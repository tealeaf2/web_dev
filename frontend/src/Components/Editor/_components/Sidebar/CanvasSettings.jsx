import React, { useState, useEffect } from 'react'
import { useCanvasHook } from '../../Editor'
import { useParams } from 'react-router-dom'
import { getDesignById } from '../../../../Common/Services/Scrapbook/DesignsService';
import { updateDimensions } from '../../../../Common/Services/Editor/EditorService';

function CanvasSettings() {
  const { scrapbookId } = useParams();
  const { canvasEditor } = useCanvasHook();
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSave = () => {
    const numericWidth = parseInt(width);
    const numericHeight = parseInt(height);

    if (isNaN(numericWidth) || isNaN(numericHeight)) {
      alert("Please enter valid numeric values for width and height.");
      return;
    }

    // Update canvas size on the client
    if (canvasEditor) {
      canvasEditor.setWidth(numericWidth);
      canvasEditor.setHeight(numericHeight);
      canvasEditor.requestRenderAll();
    }

    // Send update to the backend
    updateDimensions({ width: numericWidth, height: numericHeight, id: scrapbookId })
      .then((res) => {
        console.log("Dimensions updated successfully:", res);
      })
      .catch((error) => {
        console.error("Failed to update dimensions:", error);
      });
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  useEffect(() => {
    if (!scrapbookId) return;
    getDesignById({ designId: scrapbookId }).then(res => {
      setWidth(res.get('width'));
      setHeight(res.get('height'));
    });
  }, [scrapbookId]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">Width</span>
        <input type="text" className="form-control" value={width} placeholder="Enter Width" aria-label="Width"
          onChange={handleWidth}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Height</span>
        <input type="text" className="form-control" value={height} placeholder="Enter Height" aria-label="Height"
          onChange={handleHeight}
        />
      </div>

      <div className="w-full flex justify-end">
        <button type="button" className="btn btn-secondary"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>

    </div>
  )
}

export default CanvasSettings