import React, { useState } from "react";
import { sideBarMenu } from "./options";
import SidebarSettings from "./SidebarSettings";

export default function EditorSidebar() {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <>
      <div className="flex">
        <div className="p-2 w-[80px] border-r h-screen pt-2">
          {sideBarMenu.map((menu, index) => {
            return (
              <div key={index} className="p-1 mb-3 flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedOption(menu)}
              >
                {menu.icon}
                <p className="mt-1 text-sm">{menu.name}</p>
              </div>
            );
          })}
        </div>
        <SidebarSettings selectedOption={selectedOption} />
      </div>
    </>
  )
}