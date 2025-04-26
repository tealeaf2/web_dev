import React, { useState, useEffect } from 'react'
import { getDesignsByUser, deleteDesignById } from '../../../Common/Services/Scrapbook/DesignsService'
import { getCurrentUser } from '../../Auth/AuthService'

function UploadedDesign() {
  const [designList, setDesignList] = useState([]);

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      getDesignsByUser({ userID: currentUser.id }).then((result) => {
        const publishedDesigns = result.filter((design) => design.get("isPublished") === true);
        setDesignList(publishedDesigns);
      });
    }
  }, []);

  const handleDelete = (id) => {
    // Delete the design from the database and then from designList
    deleteDesignById({ id: id })
    setDesignList((prevDesignList) => prevDesignList.filter((design) => design.id !== id));
  };

  return (
    <div>
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Uploaded digibooks</h2>

        {designList.length === 0 ? (
          <div className="flex flex-col gap-4 justify-content items-center">
            <p className="text-gray-600 mt-2 text-center">
              You don't seem to have any digibooks uploaded. Start creating!
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
            {designList?.map((design, index) => (
              <div key={index}>
                <div className="group">
                  <div className="bg-secondary rounded-lg shadow-sm transition-opacity hover:opacity-70"
                    onClick={() => navigate('/editor/' + design.id)}
                  >
                    <img
                      src={design.get("imagePreview")?.url()}
                      alt={design.get("name")}
                      width={200}
                      height={200}
                      className='w-full h-[200px] object-contain rounded-lg cursor-pointer'
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="text-left font-medium">
                      {design.get("name")}
                    </div>
                    <div className='text-right text-[#212529] hover:scale-110 transition-all'
                      onClick={() => handleDelete(design.id)}
                    >
                      <i className="bi bi-trash3 cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadedDesign