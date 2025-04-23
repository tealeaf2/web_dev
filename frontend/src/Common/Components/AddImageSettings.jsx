import React from "react";
import UploadImage from "../Services/Editor/UploadImage"
import SearchImages from "../Services/Editor/SearchImages";

export default function AddImageSettings() {
  return (
    <div>
      <UploadImage/>

      <SearchImages/>
    </div>
  )
}