import React, { useState, useEffect } from "react";
import { createNewDesign } from "../../../Common/Services/Scrapbook/DesignsService";
import CustomCanvasInput from "./CustomCanvasInput";
import { useNavigate } from "react-router-dom";
import { getDesignsByUser } from "../../../Common/Services/Scrapbook/DesignsService";
import { getCurrentUser } from "../../Auth/AuthService"

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
    const { name, width, height } = formData;
    createNewDesign({ name, width, height }).then((result) => {
      navigate(`/editor/${result.id}`)
    });
  };

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      getDesignsByUser({ userID: currentUser.id }).then((result) => {
        setDesignList(result);
      });
    }
  }, []);

  return (
    <>
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Recent digibooks</h2>

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
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
            {designList?.map((design, index) => (
              <div className="group" key={index}>
                <div className="bg-secondary rounded-lg cursor-pointer shadow-sm transition-opacity group-hover:opacity-70"
                  onClick={() => navigate('/editor/' + design.id)}
                >
                  <img
                    src={design.get("imagePreview")?.url()}
                    alt={design.get("name")}
                    width={200}
                    height={200}
                    className='w-full h-[200px] object-contain rounded-lg'
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-left font-medium">
                    {design.get("name")}
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    Options
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
