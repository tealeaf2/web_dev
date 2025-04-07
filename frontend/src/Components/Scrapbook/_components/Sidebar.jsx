import React from 'react';
import './sidebar.css'; // Import the custom CSS file

export default function Sidebar() {
  return (
    <>
      <div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              L
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <div className="sidebar-item group relative flex justify-center rounded-sm bg-blue-50 px-2 py-1.5 text-blue-700">
                  <i className="bi bi-plus-square-fill"></i>
                  <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                    Create
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-100" />
              <div className="sidebar-item group relative flex justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <i className="bi bi-house-door-fill"></i>
                <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  Home
                </span>
              </div>
              <div className="sidebar-item group relative flex justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <i className="bi bi-folder-fill"></i>
                <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  Projects
                </span>
              </div>
              <div className="sidebar-item group relative flex justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <i className="bi bi-file-text-fill"></i>
                <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  Templates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
