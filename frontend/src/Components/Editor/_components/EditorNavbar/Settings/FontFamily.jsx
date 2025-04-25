import React from 'react'
import { FontFamilyList } from '../../options'
import { useCanvasHook } from '../../../Editor';

function FontFamily() {
  const { canvasEditor } = useCanvasHook();

  const onFontChange = (value) => {
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) {
      return;
    }

    activeObj.set({
      fontFamily: value,
    })
    canvasEditor.renderAll();
  }

  return (
    <div className="w-[200px] overflow-auto h-[200px]">
      {FontFamilyList.map((font, index) => (
        <p
        key={index}
        className="text-[12px] cursor-pointer"
        style={{ fontFamily: font }}
        onClick={()=>onFontChange(font)}
      >
        {font}
      </p>
      ))}
    </div>
  )
}

export default FontFamily