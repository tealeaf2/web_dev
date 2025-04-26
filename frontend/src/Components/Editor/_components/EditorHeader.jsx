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
      <div className="flex flex-row justify-between text-white" style={{
        background: "linear-gradient(90deg, #3b82f6 0%, #ec4899 100%)",
        padding: "1rem 2rem",
        width: "100%",
        top: "0",
      }}>
        <div className="w-1/3 text-white font-bold">
          digibooks
        </div>
        {/* Centered Input as Header */}
        <div className="w-1/3 flex justify-center">
          <input
            placeholder="digibook name"
            value={name}
            onChange={handleNameChange}
            className="text-center text-xl font-semibold bg-transparent border-none outline-none text-white placeholder-gray-400 w-full max-w-md"
          />
        </div>

        <div className="w-1/3 flex justify-end space-x-3 gap-3">
          <button
            onClick={onSave}
            className="btn btn-light !text-sm"
          >
            Save <i className="pl-3 bi bi-save"></i>
          </button>
          <button
            onClick={onExport}
            className="btn btn-light !text-sm"
          >
            Export <i className="pl-3 bi bi-download"></i>
          </button>
        </div>
      </div>
    </>
  )
}