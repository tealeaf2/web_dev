import React, { useState, useEffect } from 'react'
import ObjectSettings from './Settings/ObjectSettings'
import { useCanvasHook } from '../../Editor';

function TopNavBar() {
  const { canvasEditor } = useCanvasHook();
  const [showShapeSettings, setShowShapeSettings] = useState(false);
  const [enableTextSettings, setEnableTextSettings] = useState(false);
  const [showImageSettings, setShowImageSettings] = useState(false);


  useEffect(() => {
    if (!canvasEditor || canvasEditor.length === 0) return;

    const updateSettingsFromSelection = () => {
      const activeObject = canvasEditor.getActiveObject();
      // console.log(activeObject)
      if (activeObject) {
        setEnableTextSettings(!!activeObject.text); // true if it's a text object
        setShowShapeSettings(true);
        setShowImageSettings(activeObject.isType('image'))
      }
    };

    const clearSettings = () => {
      setEnableTextSettings(false);
      setShowShapeSettings(false);
      setShowImageSettings(false);
    };

    canvasEditor.on('selection:created', updateSettingsFromSelection);
    canvasEditor.on('selection:updated', updateSettingsFromSelection);
    canvasEditor.on('selection:cleared', clearSettings);

    return () => {
      canvasEditor.off('selection:created', updateSettingsFromSelection);
      canvasEditor.off('selection:updated', updateSettingsFromSelection);
      canvasEditor.off('selection:cleared', clearSettings);
    };
  }, [canvasEditor]);


  return (
    <div>
      {showShapeSettings &&
        <div className='p-3 flex flex-row bg-white'>
          <ObjectSettings showText={enableTextSettings} showImage={showImageSettings} />
        </div>
      }
    </div>
  )
}

export default TopNavBar