import React from "react";

export default function SidebarSettings({ selectedOption }) {

  return (
    <div className='w-[250px] h-screen bg-white p-4 shadow-xl'>
      {/* Title */}
      <p className='text-xl font-semibold text-gray-800'>{selectedOption?.name}</p>
      
      {/* Description */}
      <p className='text-sm text-gray-600 mb-4'>{selectedOption?.desc}</p>

      {/* Settings Component */}
      <div className='overflow-y-auto'>
        {selectedOption?.component}
      </div>
    </div>
  )
}