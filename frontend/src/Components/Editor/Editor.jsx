// Main page
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import EditorHeader from "./_components/EditorHeader";
import { getDesignById } from "../../Common/Services/Scrapbook/DesignsService";
import EditorSidebar from "./_components/EditorSidebar";
import CanvasEditor from "./_components/CanvasEditor";

export default function Editor() {
  const { scrapbookId } = useParams();
  const [book, setBook] = useState(null);
  const [bookName, setBookName] = useState("")

  useEffect(() => {
    if (!scrapbookId) return;

    getDesignById({ designId: scrapbookId }).then((res) => {
      setBook(res);
      setBookName(res.get("name"))
      console.log(res)
    })    
  }, [scrapbookId])

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setBookName(newName);
  }

  //TODO: Create a method to check if the scrapbookId exists, if it doesn't exit back to scrapbooks and give an alert

  return (
    <>
      <EditorHeader name={bookName} handleNameChange={handleNameChange}/>
      <div className='flex'>
        <EditorSidebar/>
        <CanvasEditor/>
      </div>
    </>
  )
}