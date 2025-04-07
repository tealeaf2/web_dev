import React from "react";
import Sidebar from "./_components/Sidebar"
import Options from "./_components/IntroOptions"
import RecentDesign from "./_components/RecentDesign"

function Layout() {
  return (
    <div>
      <div className="flex gap-5">
        <Sidebar />

        {/* Banner */}
        <div className="flex flex-col w-[90%] gap-4">
          <div className="h-[200px] mt-12 rounded-2xl border border-gray-300 overflow-hidden bg-white flex items-center justify-center">
            <section className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Workspace
              </h1>
            </section>
          </div>

          {/* Options for templates of scrapbook, don't do, but as a later idea */}
          <div>
            <Options />
          </div>

          <div>
            <RecentDesign />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Layout;