import React, { useRef, useState } from 'react';
import { shapesSettingsList } from '../../../Components/Editor/_components/options';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { useCanvasHook } from '../../../Components/Editor/Editor';

function ObjectSettings({ showText, showImage }) {
  const [showIndex, setShowIndex] = useState(null);
  const [target, setTarget] = useState(null);
  const containerRefs = useRef([]);
  const { canvasEditor } = useCanvasHook();

  const handleClick = (event, index) => {
    if (showIndex !== null) {
      // If any popover is open, always close it first
      setShowIndex(null);
      setTarget(null);
    } else {
      // If none is open, open this one
      setTarget(event.target);
      setShowIndex(index);
    }
  };

  const onDelete = () => {
    if (canvasEditor) {
      const activeObject = canvasEditor.getActiveObject();
      if (activeObject) {
        canvasEditor.remove(activeObject);
        canvasEditor.renderAll();
      }
    }
  };

  return (
    <div className='flex gap-4'>
      {!showImage && shapesSettingsList.map((shape, index) => {
        if (!showText && shape.name == 'Font') {
          return null;
        }

        return (
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
                <Popover.Body>
                  {shape.component}
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        )
      })}
      <div className="cursor-pointer hover:scale-110 transition-all" onClick={onDelete}>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
}

export default ObjectSettings;
