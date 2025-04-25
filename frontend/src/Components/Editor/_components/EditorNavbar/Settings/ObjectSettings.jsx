import React, { useRef, useState } from 'react';
import { shapesSettingsList } from '../../options';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { useCanvasHook } from '../../../Editor';
import FontStyles from './FontStyles';

function ObjectSettings({ showText, showImage }) {
  const [showIndex, setShowIndex] = useState(null);
  const [target, setTarget] = useState(null);
  const containerRefs = useRef([]);
  const { canvasEditor } = useCanvasHook();

  const isImageOnlyExcluded = ['Font', 'Rounded Corner', 'Fill'];
  const isFontOnlyExcluded = ['Rounded Corner', 'Stroke Width', 'Stroke Color'];

  const handleClick = (event, index) => {
    setTarget(event.target);
    setShowIndex(showIndex === index ? null : index);
  };

  const onDelete = () => {
    const activeObject = canvasEditor?.getActiveObject();
    if (activeObject) {
      canvasEditor.remove(activeObject);
      canvasEditor.renderAll();
    }
  };

  const filteredShapes = shapesSettingsList.filter((shape) => {
    const isFont = shape.name === 'Font';

    if (!showText && isFont) return false;
    if (showImage && isImageOnlyExcluded.includes(shape.name)) return false;
    if (showText && isFontOnlyExcluded.includes(shape.name)) return false;

    return true;
  });

  // Methods for layering
  // canvas.sendObjectBackwards(myObject)
  // canvas.sendObjectToBack(myObject)
  // canvas.bringObjectForward(myObject)
  // canvas.bringObjectToFront(myObject)

  const onObjectFront = () => {
    const activeObj = canvasEditor?.getActiveObject();
    if (activeObj) {
      canvasEditor.bringObjectToFront(activeObj);
      canvasEditor.renderAll();
    }
  }
  
  const onObjectBackward = () => {
    const activeObj = canvasEditor?.getActiveObject();
    if (activeObj) {
      canvasEditor.sendObjectBackwards(activeObj);
      canvasEditor.renderAll();
    }
  }

  return (
    <div className='flex gap-4'>
      {filteredShapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
          className='relative'
        >
          <div
            onClick={(e) => handleClick(e, index)}
            className="cursor-pointer hover:scale-110 transition-all"
          >
            {shape.icon}
          </div>

          <Overlay
            show={showIndex === index}
            target={target}
            placement="bottom"
            container={containerRefs.current[index]}
            containerPadding={20}
            rootClose
            onHide={() => setShowIndex(null)}
            transition={true}
          >
            <Popover id={`popover-${index}`}>
              <Popover.Body>{shape.component}</Popover.Body>
            </Popover>
          </Overlay>
        </div>
      ))}

      {showText && <FontStyles />}

      <div
        className="cursor-pointer hover:scale-110 transition-all"
        onClick = {() => onObjectFront()}
      >
        <i className="bi bi-front"></i>
      </div>
      <div
        className="cursor-pointer hover:scale-110 transition-all"
        onClick = {() => onObjectBackward()}
      >
        <i className="bi bi-layer-backward"></i>
      </div>


      <div
        className="cursor-pointer hover:scale-110 transition-all"
        onClick={onDelete}
      >
        <i className="bi bi-trash"></i>
      </div>

    </div>
  );
}

export default ObjectSettings;
