import React, { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";
import { useCanvasHook } from "../../Editor";

export default function BackgroundSettings() {
  const [bgColor, setBgColor] = useState('#fff')
  const {canvasEditor} = useCanvasHook();

  /**
   * Use to change the canvas color
   * @param {*} v 
   */
  const onColorChange = (v) => {
    setBgColor(v);
    canvasEditor?.set({
      backgroundColor: v,
      backgroundImage: null,
    })
    canvasEditor.renderAll();
  }
  return (
    <div>
      <ColorPickerEditor value={bgColor} onColorChange={(v)=>onColorChange(v)}/>
    </div>
  )
}
