import React from "react";

export default function SidebarSettings({ selectedOption }) {

  return (
    <div className='w-[250px] h-screen border-r'>
      <p className='font-bold'>{selectedOption?.name}</p>
      <p className='text-sm text-gray-500'>{selectedOption?.desc}</p>
      <div>
      {selectedOption?.component}
      </div>
    </div>
  )
}