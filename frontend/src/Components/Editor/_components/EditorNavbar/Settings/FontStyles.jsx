import React from 'react';
import { useCanvasHook } from '../../../Editor';

function FontStyles() {
  const { canvasEditor } = useCanvasHook();

  const onSettingClick = (type) => {
    const activeObj = canvasEditor?.getActiveObject();
    if (!activeObj || !activeObj.isType('i-text')) return;

    switch (type) {
      case 'bold':
        activeObj.set('fontWeight', activeObj.fontWeight === 'bold' ? 'normal' : 'bold');
        break;
      case 'italic':
        activeObj.set('fontStyle', activeObj.fontStyle === 'italic' ? 'normal' : 'italic');
        break;
      case 'underline':
        activeObj.set('underline', !activeObj.underline);
        break;
      default:
        break;
    }

    canvasEditor.renderAll();
  };

  return (
    <div className="flex gap-2">
      <div className="btn" onClick={() => onSettingClick('bold')}>
        <i className="bi bi-type-bold"></i>
      </div>

      <div className="btn" onClick={() => onSettingClick('italic')}>
        <i className="bi bi-type-italic"></i>
      </div>

      <div className="btn" onClick={() => onSettingClick('underline')}>
        <i className="bi bi-type-underline"></i>
      </div>
    </div>
  );
}

export default FontStyles;
