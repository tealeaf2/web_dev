import React, { useState, useEffect } from 'react'
import { useCanvasHook } from '../../../Components/Editor/Editor';

function Opacity() {
  const { canvasEditor } = useCanvasHook();
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const activeObj = canvasEditor.getActiveObject();
    if (activeObj) {
      setOpacity(activeObj.opacity);
    }
  }, []);

  const onOpacityChange = (e) => {
    const value = parseFloat(e.target.value);
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) {
      return;
    }

    activeObj.set({
      opacity: value,
    })
    setOpacity(value);
    canvasEditor.renderAll();
  }

  return (
    <div className="w-[220px]">
      <label htmlFor="opacity" className="form-label">Opacity: {opacity.toFixed(2)}</label>
      <input 
        type="range" 
        className="form-range w-full" 
        min="0" 
        max="1" 
        step="0.01" 
        id="opacity"
        value={opacity}
        onChange={onOpacityChange}/>
    </div>
  )
}

export default Opacity