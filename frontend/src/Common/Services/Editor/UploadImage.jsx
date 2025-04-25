import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { uploadImageWithId } from './ImageService';
import { useCanvasHook } from '../../../Components/Editor/Editor';
import { FabricImage } from 'fabric';

export default function UploadImage() {
  const { scrapbookId } = useParams();
  const { canvasEditor } = useCanvasHook();

  const onFileUpload = async (e) => {
    const file = e.target.files[0];

    try {
      // const imageRef = await uploadImageWithId({ scrapbookId, image: file });
      const fileUrl = URL.createObjectURL(file);

      const img = await FabricImage.fromURL(
        fileUrl,
        {
          crossOrigin: 'anonymous'
        }
      )
      img.set({
        width: 200,
        height: 200,
      })
      canvasEditor.add(img);
      canvasEditor.renderAll();
    } catch (error) {
      console.error("Upload/render error:", error);
    };
  }


  return (
    <div className="flex items-center mb-2">
      <label htmlFor="uploadImage">
        {/* Image upload button */}
        <div className="flex items-center justify-center gap-4 rounded border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6 cursor-pointer hover:bg-gray-100 transition">
          <span className="font-medium">Upload Image</span>
          <i className="bi bi-upload"></i>
        </div>
      </label>

      <input
        type="file"
        id="uploadImage"
        className="sr-only"
        multiple={false}
        onChange={onFileUpload}
      />
    </div>
  )

}