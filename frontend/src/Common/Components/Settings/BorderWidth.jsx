import React, { useState, useEffect } from 'react'
import { useCanvasHook } from '../../../Components/Editor/Editor'

function BorderWidth() {
  const { canvasEditor } = useCanvasHook();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const activeObj = canvasEditor.getActiveObject();
    if (activeObj) {
      setWidth(activeObj.strokeWidth);
    }
  }, []);

  const onWidthChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) {
      return;
    }

    activeObj.set({
      strokeWidth: value,
    })
    setWidth(value);
    canvasEditor.renderAll();
  }

  return (
    <div className="w-[220px]">
      <label htmlFor="borderWidth" className="form-label">Border Width: {width}</label>
      <input 
        type="range" 
        className="form-range w-full" 
        min="0" 
        max="20" 
        step="1" 
        id="borderWidth"
        value={width}
        onChange={onWidthChange}/>
    </div>
  )
}

export default BorderWidth