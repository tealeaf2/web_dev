import React, { useEffect, useRef, useState } from "react";
import { Canvas, FabricText } from 'fabric';
import { useCanvasHook } from "../Editor";
import { saveDesign } from "../../../Common/Services/Editor/EditorService";

export default function CanvasEditor({ book, setLoading }) {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null)
  const { canvasEditor, setCanvasEditor } = useCanvasHook();

  // This function was copied from EditorHeader
  // Couldn't figure out why this wasn't working in a seperate module for autosaving,
  // so had to implement like this
  const onSave = () => {
    if (canvasEditor.length === 0) return;

    setLoading(true);

    const JsonDesign = canvasEditor.toJSON();

    const dataUrl = canvasEditor.toDataURL({
      format: "png",
      quality: 1,
      width: book?.get("width"),
      height: book?.get("height")
    });

    const dataURLtoBlob = (dataurl) => {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    };

    const blob = dataURLtoBlob(dataUrl);

    return saveDesign({ blob: blob, objectId: book.id, design: JsonDesign })
      .then(() => {
        // console.log("Design and preview image saved.");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error saving design:", error);
      });
  };

  // Initializing the canvas itself
  // TODO: set up delete using backspace/delete button on keyboard
  useEffect(() => {
    if (canvasRef.current && book) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: book.get("width"),
        height: book.get("height"),
        backgroundColor: '#ffffff',
        preserveObjectStacking: true,
        renderOnAddRemove: false,
      })

      const scaleFactor = window.devicePixelRatio || 1
      initCanvas.set({
        width: book.get("width") * scaleFactor,
        height: book.get("height") * scaleFactor,
        zoom: 1 / scaleFactor
      })

      if (book?.get("jsonTemplate") && book.get("jsonTemplate").objects.length > 0) {
        initCanvas.loadFromJSON(book.get("jsonTemplate"), () => {
          initCanvas.requestRenderAll();
        })
      }

      initCanvas.renderAll();
      setCanvas(initCanvas)
      setCanvasEditor(initCanvas);

      return () => {
        initCanvas.dispose();
      }
    }
  }, [book])


  // Triggers save after 2 seconds everytime a user either adds/change/deletes an object on the canvas
  // Still a bit finicky, doesn't save the most recent edit, very hard too
  useEffect(() => {
    if (canvasEditor.length === 0) return;

    let saveTimeout = null;
    let isSaving = false;

    const triggerAutosave = () => {
      if (isSaving) {
        // Don't start a new save if one is already running — wait
        return;
      }

      // Cancel any previously scheduled save
      if (saveTimeout) clearTimeout(saveTimeout);

      // Debounce save: wait 2 seconds after last change
      saveTimeout = setTimeout(() => {
        isSaving = true;
        onSave().finally(() => {
          isSaving = false;
        });
      }, 2000);
    };

    canvasEditor.on('object:added', triggerAutosave);
    canvasEditor.on('object:modified', triggerAutosave);
    canvasEditor.on('object:removed', triggerAutosave);
    canvasEditor.on('object:moving', triggerAutosave); // detects moving

    return () => {
      if (saveTimeout) clearTimeout(saveTimeout);
      canvasEditor.off('object:added', triggerAutosave);
      canvasEditor.off('object:modified', triggerAutosave);
      canvasEditor.off('object:removed', triggerAutosave);
      canvasEditor.off('object:moving', triggerAutosave);
    };
  }, [canvasEditor]);

  // Couldn't figure out how to use delete with text, just removed in general
  // useEffect(() => {

  //   const handleKeyDown=(e) => {
  //     if(e.key=='Delete' || e.key=='Backspace') {
  //       if(canvasEditor) {
  //         const activeObject = canvasEditor.getActiveObject();
  //         console.log(activeObject)
  //         // if (activeObject && (activeObject instanceof FabricText)) {
  //         //   // Allow normal text deletion behavior for text boxes
  //         //   // This part will allow text to be deleted with backspace when text box is focused
  //         //   return;
  //         // } else if (activeObject) {
  //         //   // If the active object is not a text box, remove the active object
  //         //   canvasEditor.remove(activeObject);
  //         //   canvasEditor.renderAll();
  //         // }
  //       }
  //     }
  //   }
  //   document.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   }
  // }, [canvasEditor])

  return (
    <>
      <div className="bg-secondary w-full h-screen flex items-center justify-center flex-col">
        <canvas id='canvas' ref={canvasRef} />
      </div>
    </>
  )
}