// Main page
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import EditorHeader from "./_components/EditorHeader";
import { getDesignById } from "../../Common/Services/Scrapbook/DesignsService";

// Things you need to do:
// Fix the login/register page to use bootstrap and tailwind css instead so that it is neater
// - Make the design for both the pages a lot better as well
// Develop the home page before a user is able to login/register, basically an about page about the website
// - Make sure to also use tailwind and bootstrap to develop it as well

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
      Editor Page
    </>
  )
}