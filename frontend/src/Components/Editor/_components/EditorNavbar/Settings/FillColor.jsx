import React, { useState, useEffect } from 'react'
import ColorPickerEditor from '../../Sidebar/ColorPickerEditor'
import { useCanvasHook } from '../../../Editor';

function FillColor() {
  const [color, setColor] = useState('#000');
  const {canvasEditor} = useCanvasHook();

  useEffect(() => {
    const activeObj = canvasEditor.getActiveObject();
    if (activeObj) {
      setColor(activeObj.fill);
    }
  }, []);

  const onColorChange = (color) => {
    setColor(color);
    const activeObj = canvasEditor.getActiveObject();

    if (!activeObj) {
      return;
    }

    activeObj?.set({
      fill: color,
    })
    canvasEditor.renderAll();
  }

  return (
    <div>
      <ColorPickerEditor onColorChange={(v)=>onColorChange(v)} value={color}/>
    </div>
  )
}

export default FillColor