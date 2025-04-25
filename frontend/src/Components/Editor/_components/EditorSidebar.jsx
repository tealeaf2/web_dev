import React, { useState } from "react";
import { sideBarMenu } from "./options";
import SidebarSettings from "./Sidebar/SidebarSettings";
import { useNavigate } from "react-router-dom";

export default function EditorSidebar() {
  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();

  const handleSelect = (menu) => {
    if (selectedOption === menu) {
      setSelectedOption(null);
    } else {
      setSelectedOption(menu);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="h-screen w-16 flex-col justify-between bg-[#212529]">
          {sideBarMenu.map((menu, index) => {
            const isActive = selectedOption === menu;

            return (
              <div key={index} className={`sidebar-item group relative flex w-full justify-center px-2 py-3 text-gray-500 hover:bg-white hover:text-gray-700 cursor-pointer transition
                ${isActive ? "bg-white text-gray-900" : ""}
              `}
                onClick={() => handleSelect(menu)}
              >
                {menu.icon}
                {/* <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  {menu.name}
                </span> */}
              </div>
            );
          })}
          <div className="bottom-0 border-t border-gray-700 bg-[#212529]">
            <div className="sidebar-item group relative flex w-full justify-center px-2 py-3 text-sm text-gray-500 hover:bg-white hover:text-gray-700 cursor-pointer"
            onClick={() => navigate('/scrapbooks')}
            >
              <i className="bi bi-box-arrow-left"></i>
            </div>
          </div>
        </div>
        {selectedOption && <SidebarSettings selectedOption={selectedOption} />}
      </div>
    </>
  )
}