import React, { useEffect, useRef, useState } from "react";
import { Canvas } from 'fabric';
import { useCanvasHook } from "../Editor";

export default function CanvasEditor({book}) {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null)
  const {canvasEditor, setCanvasEditor} = useCanvasHook();

  // console.log(book)

  useEffect(() => {
    if (canvasRef.current && book) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: book.get("width") / 2,
        height: book.get("height") / 2,
        backgroundColor: '#ffffff',
        preserveObjectStacking: true,
      })

      const scaleFactor = window.devicePixelRatio || 1
      initCanvas.set({
        width: book.get("width") * scaleFactor,
        height: book.get("height") * scaleFactor,
        zoom: 1 / scaleFactor
      })      
      initCanvas.renderAll();
      setCanvas(initCanvas)
      setCanvasEditor(initCanvas);
      return ()=>{
        initCanvas.dispose();
      }
    }
  }, [book])

  useEffect(() => {
    const handleKeyDown=(e) => {
      if(e.key=='Delete' || e.key=='Backspace') {
        if(canvasEditor) {
          const activeObject = canvasEditor.getActiveObject();
          if (activeObject) {
            canvasEditor.remove(activeObject);
            canvasEditor.renderAll();
          }
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [canvasEditor])

  return (
    <>
      <div className="bg-secondary w-full h-screen flex items-center justify-center flex-col">
        <canvas id='canvas' ref={canvasRef}/>
      </div>
    </>
  )
}