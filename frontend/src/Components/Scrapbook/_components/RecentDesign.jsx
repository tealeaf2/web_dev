import React, { useState, useEffect, useRef } from "react";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import PublishInput from "./PublishInput";
import { useNavigate } from "react-router-dom";
import { getDesignsByUser, deleteDesignById } from "../../../Common/Services/Scrapbook/DesignsService";
import { getCurrentUser } from "../../Auth/AuthService"

export default function RecentDesign() {
  const [showIndex, setShowIndex] = useState(null);
  const [target, setTarget] = useState(null);
  const containerRefs = useRef([]);
  const [designList, setDesignList] = useState([]);
  const navigate = useNavigate();

  const handleClick = (event, index) => {
    setTarget(event.target);
    setShowIndex(showIndex === index ? null : index);
  };

  const isPopoverOpen = showIndex !== null;

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      getDesignsByUser({ userID: currentUser.id }).then((result) => {
        const developedDesigns = result.filter((design) => design.get("isPublished") === false);
        setDesignList(developedDesigns);
      });
    }
  }, []);

  const handleDelete = (id) => {
    // Delete the design from the database and then from designList
    deleteDesignById({ id: id })
    setDesignList((prevDesignList) => prevDesignList.filter((design) => design.id !== id));
  };

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
              <div key={index}>
                <div
                  className="group"
                  ref={(el) => (containerRefs.current[index] = el)}>
                  <div className="bg-secondary rounded-lg shadow-sm transition-opacity hover:opacity-70"
                    onClick={() => navigate('/editor/' + design.id)}
                  >
                    <img
                      src={design.get("imagePreview")?.url()}
                      alt={design.get("name")}
                      width={200}
                      height={200}
                      className='w-full h-[200px] object-contain rounded-lg cursor-pointer'
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="text-left font-medium">
                      {design.get("name")}
                    </div>
                    <div className={`text-right text-[#212529] hover:scale-110 transition-all ${isPopoverOpen ? 'pointer-events-none' : ''}`}
                      onClick={(e) => handleClick(e, index)}
                    >
                      <i className="bi bi-three-dots cursor-pointer"></i>
                    </div>

                    <Overlay
                      show={showIndex === index}
                      target={target}
                      placement="bottom"
                      container={containerRefs.current[index]}
                      rootClose
                      onHide={() => setShowIndex(null)}
                      transition={true}
                    >
                      <Popover id={`popover-${index}`}>
                        <Popover.Body>
                          <div className="list-group cursor-pointer">
                            <button className='list-group-item list-group-item-action'
                              data-bs-toggle="modal"
                              data-bs-target="#publishInput"
                              onClick={() => setShowIndex(null)}
                            >
                              Publish
                            </button>
                            <button className='list-group-item list-group-item-action'
                              onClick={() => handleDelete(design.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                </div>
                <div>
                  <PublishInput digibook={design} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
