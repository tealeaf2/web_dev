// Main page
import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import EditorHeader from "./_components/EditorHeader";
import { getDesignById } from "../../Common/Services/Scrapbook/DesignsService";
import EditorSidebar from "./_components/EditorSidebar";
import CanvasEditor from "./_components/CanvasEditor";
import { CanvasContext } from "../../Context/CanvasContext";

export default function Editor() {
  const { scrapbookId } = useParams();
  const [book, setBook] = useState(null);
  const [bookName, setBookName] = useState("")
  const [canvasEditor, setCanvasEditor] = useState([]);

  useEffect(() => {
    if (!scrapbookId) return;

    getDesignById({ designId: scrapbookId }).then((res) => {
      setBook(res);
      setBookName(res.get("name"))
    })
  }, [scrapbookId])

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setBookName(newName);
  }

  //TODO: Create a method to check if the scrapbookId exists, if it doesn't exit back to scrapbooks and give an alert

  return (
    <>
      <div>
        <CanvasContext.Provider value={{canvasEditor, setCanvasEditor}}>
          <EditorHeader name={bookName} handleNameChange={handleNameChange} />
          <div className='flex'>
            <EditorSidebar />
            <CanvasEditor book={book} />
          </div>
        </CanvasContext.Provider>
      </div>
    </>
  )
}

export const useCanvasHook=() => {
  const context = useContext(CanvasContext);
  if(!context) {
    throw new Error("Error!")
  }
  return context
}