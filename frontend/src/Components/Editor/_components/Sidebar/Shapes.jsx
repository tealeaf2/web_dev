import React from "react";
import { ShapeList, StickerList } from "../options";
import { Circle, FabricImage, Line, Rect, Triangle } from "fabric";
import { useCanvasHook } from "../../Editor";

export default function Shapes() {
  const { canvasEditor } = useCanvasHook();

  const onShapeSelect = (shape) => {
    const properties = {
      left: 100,
      top: 100,
      radius: 50,
      fill: 'black',
      stroke: 'black',
      width: 100,
      height: 100,
      strokeWidth: 0
    }

    if (shape.name == 'Circle') {
      const circleRef = new Circle({
        ...properties
      })
      canvasEditor.add(circleRef);
    } else if (shape.name == 'Square') {
      const squareRef = new Rect({
        ...properties
      })
      canvasEditor.add(squareRef);
    } else if (shape.name == 'Line') {
      const lineRef = new Line([50, 50, 200, 200], {
        ...properties,
        strokeWidth: 5
      })
      canvasEditor.add(lineRef);
    } else if (shape.name == 'Triangle') {
      const triangleRef = new Triangle({
        ...properties,
      })
      canvasEditor.add(triangleRef);
    }
    canvasEditor.renderAll()
  }

  const onStickerSelect = async (sticker) => {
    if (canvasEditor) {
      const img = await FabricImage.fromURL(
        sticker,
        {
          crossOrigin: 'anonymous'
        }
      )
      canvasEditor.add(img);
      canvasEditor.renderAll();
    }
  }

  return (
    <div className="">
      <div className='grid grid-cols-3 gap-3'>
        {ShapeList.map((shape, index) => (
          <div className='border rounded-xl' key={index} onClick={() => onShapeSelect(shape)}>
            <img src={shape.icon} alt={shape.name}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div>
        <p className='text-xl font-semibold text-gray-800 my-2'>Stickers</p>
      </div>
      <div className='grid grid-cols-3 gap-3 overflow-auto h-[63vh]'>
        {StickerList.map((sticker, index) => (
          <div className="cursor-pointer" onClick={() => onStickerSelect(sticker)} key={index}>
            <img src={sticker} alt={'sticker-' + index} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}