import React from 'react'
import { useCanvasHook } from '../../Components/Editor/Editor'
import { IText } from 'fabric';

function TextSettings() {
  const { canvasEditor } = useCanvasHook();

  const onAddTextClick = (type) => {
    if (canvasEditor) {
      let textRef;

      // Create the text object based on type
      switch (type) {
        case 'Heading':
          textRef = new IText('Add Heading', {
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Arial',
            fill: 'black',
            left: 100,
            top: 100,
          });
          break;

        case 'Subheading':
          textRef = new IText('Add Subheading', {
            fontSize: 20,
            fontWeight: '400',
            fontFamily: 'Arial',
            fill: 'black',
            left: 100,
            top: 150,
          });
          break;

        case 'Paragraph':
          textRef = new IText('Add Paragraph', {
            fontSize: 12,
            fontWeight: 'normal',
            fontFamily: 'Arial',
            fill: 'black',
            left: 100,
            top: 200,
          });
          break;

        default:
          break;
      }

      // Add the text object to the canvas
      if (textRef) {
        canvasEditor.add(textRef);
        canvasEditor.renderAll();
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-2xl p-3 bg-secondary rounded-xl cursor-pointer"
        onClick={() => onAddTextClick('Heading')}
      >Add Heading</p>
      <p className="font-medium text-xl p-3 bg-secondary rounded-xl cursor-pointer"
        onClick={() => onAddTextClick('Subheading')}
      >Add Subheading</p>
      <p className="text-md p-3 bg-secondary rounded-xl cursor-pointer"
        onClick={() => onAddTextClick('Paragraph')}
      >Paragraph</p>
    </div>
  )
}

export default TextSettings