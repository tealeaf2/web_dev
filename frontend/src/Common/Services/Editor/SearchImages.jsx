import React, { useEffect, useState } from 'react'
import { unsplashApi } from './ImageService'
import { useCanvasHook } from '../../../Components/Editor/Editor';
import { FabricImage } from 'fabric';

export default function SearchImages() {
  const [imageList, setImageList] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const {canvasEditor} = useCanvasHook();

  useEffect(() => {
    GetImageList('Gradient')
  }, [])

  const GetImageList = async (searchInput) => {
    //https://api.unsplash.com/search/photos

    const result = await unsplashApi({ searchInput: searchInput })
    setImageList(result)
  }

  // Add selected image to canvas
  const addImageToCanvas = async (imageUrl) => {
    const img = await FabricImage.fromURL(
      imageUrl,
      {
        crossOrigin: 'anonymous'
      }
    )
    canvasEditor.add(img);
    canvasEditor.renderAll();
  }

  return (
    <>
    <div>
      <p>Search Images</p>
      <div className='flex gap-2 items-center my-2'>
        <input placeholder='Mountain' onChange={(e) => setSearchInput(e.target.value)}/>
        <button onClick={()=>GetImageList(searchInput)}>Search</button>
      </div>
    </div>
    <div className='mt-2 grid grid-cols-2 gap-2 overflow-auto h-[75vh]'>
      {imageList.map((image, index) => (
        <div key={index} onClick={()=>addImageToCanvas(image?.urls?.regular)} className='cursor-pointer'>
          <img src={image?.urls?.thumb} alt={image?.slug}
            width={300}
            height={300}
            className='w-full h-[80px] rounded-sm object-cover'
          />
        </div>
      ))}
    </div>
    </>
  )
}