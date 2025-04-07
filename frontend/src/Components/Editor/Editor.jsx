// Main page
import React from "react";
import { useParams } from 'react-router-dom';

export default function Editor() {
  const { scrapbookId } = useParams(); 

  //TODO: Create a method to check if the scrapbookId exists, if it doesn't exit back to scrapbooks and give an alert

  return (
    <>
      Editor Page
    </>
  )
}