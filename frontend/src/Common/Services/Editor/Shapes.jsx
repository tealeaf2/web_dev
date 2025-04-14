import React from "react";
import { ShapeList } from "../../../Components/Editor/_components/options";
import { Circle, Line, Rect, Triangle } from "fabric";
import { useCanvasHook } from "../../../Components/Editor/Editor";

export default function Shapes() {
  const {canvasEditor} = useCanvasHook();

  const onShapeSelect = (shape) => {
    const properties = {
      left:100,
      top:100,
      radius:50,
      fill: 'black',
      stroke: 'black',
      width: 100,
      height: 100,
      strokeWidth: 0
    }

    if(shape.name=='Circle') {
      const circleRef = new Circle({
        ...properties
      })
      canvasEditor.add(circleRef);
    } else if(shape.name=='Square') {
      const squareRef = new Rect({
        ...properties
      })
      canvasEditor.add(squareRef);
    } else if(shape.name=='Line') {
      const lineRef = new Line([50, 50, 200, 200], {
        ...properties,
        strokeWidth: 5
      }) 
      canvasEditor.add(lineRef);
    } else if(shape.name=='Triangle') {
      const triangleRef = new Triangle({
        ...properties,
      }) 
      canvasEditor.add(triangleRef);
    }
    canvasEditor.renderAll()
  }

  return (
    <div className='grid grid-cols-3 gap-3'>
      {ShapeList.map((shape, index) => (
        <div className='p-2 border rounded-xl' key={index} onClick={()=>onShapeSelect(shape)}>
          <img src={shape.icon} alt={shape.name}
            width={100}
            height={100}
          />
        </div>
      ))}

    </div>
  )
}