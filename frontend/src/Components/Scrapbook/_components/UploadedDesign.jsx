import React, { useState } from 'react'

function UploadedDesign() {
  const [designList, setDesignList] = useState([]);

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
          null
        )}
      </div>
    </div>
  )
}

export default UploadedDesign