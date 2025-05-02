import React, { useEffect, useState } from 'react'
import { unsplashApi } from '../../../../Common/Services/Editor/ImageService'
import { useCanvasHook } from '../../Editor';
import { FabricImage } from 'fabric';

export default function SearchImages() {
  const [imageList, setImageList] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const { canvasEditor } = useCanvasHook();

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
        <p className='text-xl font-semibold text-gray-800'>Search</p>
        <div className='flex items-center'>
          <input
            type="text"
            placeholder="Mountain"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-1 py-2 w-full border border-gray-300"
          />

          <button
            onClick={() => GetImageList(searchInput)}
            className="bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            Search
          </button>
        </div>
      </div>
      <div className='mt-2 grid grid-cols-2 gap-2 overflow-auto h-[58vh]'>
        {imageList.map((image, index) => (
          <div key={index} onClick={() => addImageToCanvas(image?.urls?.regular)} className='cursor-pointer'>
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