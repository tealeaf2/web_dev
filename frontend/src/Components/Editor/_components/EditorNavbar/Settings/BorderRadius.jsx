import React, {useState, useEffect} from 'react'
import { useCanvasHook } from '../../../Editor';

function BorderRadius() {
  const { canvasEditor } = useCanvasHook();
  const [radius, setRadius] = useState(0)

  useEffect(() => {
    const activeObj = canvasEditor.getActiveObject();
    if (activeObj) {
      setRadius(activeObj.rx);
    }
  }, []);

  const onRadiusChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) {
      return;
    }

    activeObj.set({
      rx: value,
      ry: value,
    })
    setRadius(value);
    canvasEditor.renderAll();
  }

  return (
    <div className="w-[220px]">
      <label htmlFor="borderRadius" className="form-label">Border Radius: {radius}</label>
      <input 
        type="range" 
        className="form-range w-full" 
        min="0" 
        max="50" 
        step="1" 
        id="borderRadius"
        value={radius}
        onChange={onRadiusChange}/>
    </div>
  )
}

export default BorderRadius