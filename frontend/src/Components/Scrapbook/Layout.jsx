import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import RecentDesign from "./_components/RecentDesign";
import UploadedDesign from "./_components/UploadedDesign";
import Sidebar from "./_components/Sidebar";
import CustomCanvasInput from "./_components/CustomCanvasInput";
import { createNewDesign } from "../../Common/Services/Scrapbook/DesignsService";

function Layout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    width: "",
    height: "",
  });

  const [viewMode, setViewMode] = useState("all");

  // Event function to call createNewDesign
  const handleCreateNewDesign = (formData) => {
    const { name, width, height } = formData;
    createNewDesign({ name, width, height }).then((result) => {
      navigate(`/editor/${result.id}`)
    });
  };

  const handleShowUploaded = () => setViewMode("uploaded");
  const handleShowRecent = () => setViewMode("recent");
  const handleShowAll = () => setViewMode("all");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-white shadow-md h-screen sticky top-0">
        <Sidebar handleUploaded={handleShowUploaded} handleRecent={handleShowRecent} handleAll={handleShowAll}/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Floating Banner */}
        <div className="w-full flex justify-center mb-8">
          <div className="bg-[#a8479880] text-white rounded-xl shadow-lg h-40 w-full flex items-center justify-center">
            <h1 className="text-4xl font-bold">Your Workspace</h1>
          </div>
        </div>

        {(viewMode === "all" || viewMode === "uploaded") && <UploadedDesign />}
        {(viewMode === "all" || viewMode === "recent") && <RecentDesign />}
      </div>

      <CustomCanvasInput
        formData={formData}
        setFormData={setFormData}
        onCreate={handleCreateNewDesign}
      />

    </div>
  );
}

export default Layout;
