import React from "react";
import UploadImage from "../../../../Common/Services/Editor/UploadImage"
import SearchImages from "../../../../Common/Services/Editor/SearchImages";

export default function AddImageSettings() {
  return (
    <div>
      <UploadImage/>

      <SearchImages/>
    </div>
  )
}