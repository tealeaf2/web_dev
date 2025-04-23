import React, {useState, useEffect} from 'react'
import ColorPickerEditor from '../../Services/Editor/ColorPickerEditor'
import { useCanvasHook } from '../../../Components/Editor/Editor';

function BorderColor() {
  const [color, setColor] = useState('#000');
  const {canvasEditor} = useCanvasHook();

  useEffect(() => {
    const activeObj = canvasEditor.getActiveObject();
    if (activeObj) {
      setColor(activeObj.stroke || '#000');
    }
  }, []);

  const onColorChange = (color) => {
    setColor(color);
    const activeObj = canvasEditor.getActiveObject();

    if (!activeObj) {
      return;
    }

    activeObj.set({
      stroke: color,
      strokeWidth: activeObj.strokeWidth || 1,
    })
    canvasEditor.renderAll();
  }

  return (
    <div>
      <ColorPickerEditor onColorChange={(v)=>onColorChange(v)} value={color}/>
    </div>
  )
}

export default BorderColor