import React from "react";
import UploadImage from "./UploadImage"
import SearchImages from "./SearchImages";

export default function AddImageSettings() {
  return (
    <div>
      <UploadImage/>

      <SearchImages/>
    </div>
  )
}