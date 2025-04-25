import React from 'react';
import './sidebar.css'; // Import the custom CSS file

export default function Sidebar({handleUploaded, handleRecent, handleAll}) {
  return (
    <>
      <div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white">
        <div>
          <div className="border-t border-gray-100">
            <div>
              <div className="flex justify-center items-center">
                <button className="sidebar-item group relative flex w-full justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  data-bs-toggle="modal"
                  data-bs-target="#canvasInput"
                >
                  <i className="bi bi-plus-square-fill"></i>
                  <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                    Create digibook
                  </span>
                </button>
              </div>
              <div className="border-t border-gray-100" />
              <div className="sidebar-item group relative flex justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={handleAll}
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  Home
                </span>
              </div>
              <div className="sidebar-item group relative flex justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={handleUploaded}
              >
                <i className="bi bi-folder-fill"></i>
                <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  Uploaded
                </span>
              </div>
              <div className="sidebar-item group relative flex justify-center rounded-sm px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={handleRecent}
              >
                <i className="bi bi-file-text-fill"></i>
                <span className="sidebar-text absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white">
                  Recent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
