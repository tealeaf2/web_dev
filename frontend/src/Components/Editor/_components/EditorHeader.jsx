import React from "react"

export default function EditorHeader({ name, handleNameChange }) {
  return (
    <>
      <div className="p-3 flex justify-between">
        <input 
          placeholder="digibook name" 
          value={name} 
          onChange={handleNameChange}
          className="border-none outline-none" />
      </div>
    </>
  )
}