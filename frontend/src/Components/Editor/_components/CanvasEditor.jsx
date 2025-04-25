import React, { useEffect, useRef, useState } from "react";
import { Canvas, FabricText} from 'fabric';
import { useCanvasHook } from "../Editor";

export default function CanvasEditor({ book }) {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null)
  const { canvasEditor, setCanvasEditor } = useCanvasHook();

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