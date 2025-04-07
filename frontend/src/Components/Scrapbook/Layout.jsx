import React from "react";
import Header from "../Header/Header"
import Sidebar from "./_components/Sidebar"

function Layout({children}) {
  return (
    <div>
      <div>
        <Sidebar/>
        {children}
      </div>
    </div>
  )
}

export default Layout;