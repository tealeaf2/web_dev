import React from "react"
import { useCanvasHook } from "../Editor"
import { saveDesign } from "../../../Common/Services/Editor/EditorService";

export default function EditorHeader({ book, name, handleNameChange }) {
  const { canvasEditor } = useCanvasHook();

  // What happened here
  const onSave = () => {
    if (!canvasEditor) return;

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

    saveDesign({ blob: blob, objectId: book.id, design: JsonDesign })
      .then(() => {
        console.log("Design and preview image saved.");
      })
      .catch((error) => {
        console.error("Error saving design:", error);
      });
  };

  const onExport = () => {
    const dataUrl = canvasEditor?.toDataURL({
      format: 'png',
      quality: 1,
      width: book?.get("width"),
      height: book?.get("height")
    });

    const link = document?.createElement("a")
    link.href = dataUrl;
    link.download = `Digibook - ${name}.png`;
    link.click();
  }

  return (
    <>
      <div className="p-3 flex flex-row justify-between">
        <div>
          <input
            placeholder="digibook name"
            value={name}
            onChange={handleNameChange}
            className="border-none outline-none" />
        </div>

        <div>
          <button onClick={() => onSave()}>Save</button>
        </div>
        <div>
          <button onClick={() => onExport()}>Export</button>
        </div>
      </div>
    </>
  )
}