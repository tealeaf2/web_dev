import React, { useEffect, useRef, useState } from "react";
import { Canvas } from 'fabric';

export default function CanvasEditor() {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null)

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 800,
        backgroundColor: '#ffffff'
      })

      initCanvas.renderAll();
      setCanvas(initCanvas)
      return ()=>{
        initCanvas.dispose();
      }
    }
  }, [])

  return (
    <>
      <div className="bg-secondary w-full h-screen flex items-center justify-center flex-col">
        <canvas id='canvas' ref={canvasRef}/>
      </div>
    </>
  )
}