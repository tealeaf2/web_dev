// Main page
import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import EditorHeader from "./_components/EditorHeader";
import { getDesignById } from "../../Common/Services/Scrapbook/DesignsService";
import EditorSidebar from "./_components/EditorSidebar";
import CanvasEditor from "./_components/CanvasEditor";
import { CanvasContext } from "../../Context/CanvasContext";
import TopNavBar from "./_components/EditorNavbar/TopNavBar";
import { updateName } from "../../Common/Services/Editor/EditorService";

export default function Editor() {
  const { scrapbookId } = useParams();
  const [book, setBook] = useState(null);
  const [bookName, setBookName] = useState("")
  const [canvasEditor, setCanvasEditor] = useState([]);
  const timeoutRef = useRef(null);

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

    // Clear the previous timeout if there is one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to call updateName after 500ms
    timeoutRef.current = setTimeout(() => {
      updateName({ name: newName, id: scrapbookId });
      // console.log("finished running")
    }, 500);
  };

  //TODO: Create a method to check if the scrapbookId exists, if it doesn't exit back to scrapbooks and give an alert

  return (
    <>
      <div>
        <CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
          <EditorHeader book={book} name={bookName} handleNameChange={handleNameChange} />
          <div className='flex'>
            <EditorSidebar />
            <div className="relative w-full h-screen">
              <div className="absolute top-0 left-0 w-full z-10">
                <TopNavBar />
              </div>
              <CanvasEditor book={book} />
            </div>

          </div>
        </CanvasContext.Provider>
      </div>
    </>
  )
}

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("Error!")
  }
  return context
}