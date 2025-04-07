import React, { useState } from "react";
import { createNewDesign } from "../../../Common/Services/Scrapbook/DesignsService";
import CustomCanvasInput from "./CustomCanvasInput";
import { useNavigate } from "react-router-dom";

export default function RecentDesign() {
  const [designList, setDesignList] = useState([]);
  const navigate = useNavigate();

  // Single object to store form data
  const [formData, setFormData] = useState({
    name: "",
    width: "",
    height: "",
  });

  // Event function to call createNewDesign
  const handleCreateNewDesign = (formData) => {
    console.log(formData)
    const { name, width, height } = formData;
    createNewDesign({ name, width, height }).then((result) => {
      navigate(`/editor/${result.id}`)
    });
  };

  return (
    <>
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Recent Designs</h2>

        {designList.length === 0 ? (
          <div className="flex flex-col gap-4 justify-content items-center">
            <p className="text-gray-600 mt-2 text-center">
              You don't seem to have any digibooks created. Create a new one!
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#canvasInput"
            >
              + Create New
            </button>
            <CustomCanvasInput
              formData={formData}
              setFormData={setFormData}
              onCreate={handleCreateNewDesign}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
