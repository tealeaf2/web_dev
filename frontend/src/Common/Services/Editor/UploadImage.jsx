import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { uploadImageWithId } from './ImageService';
import { useCanvasHook } from '../../../Components/Editor/Editor';
import { FabricImage } from 'fabric';

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const { scrapbookId } = useParams();
  const {canvasEditor} = useCanvasHook();

  const onFileUpload = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
  
    try {
      const imageRef = await uploadImageWithId({ scrapbookId, image: file });
      const fileUrl = imageRef.get("image").url();
  
      const img = await FabricImage.fromURL(
        fileUrl
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
    setLoading(false);
  }


  return (
    <div>
      <label htmlFor='uploadImage'>
        {/* TODO: Loader */}
        {loading ? <></> : 'Upload Image'}
      </label>
      <input type='file' id="uploadImage" className='hidden' multiple={false} onChange={onFileUpload}/>
    </div>
  )

}