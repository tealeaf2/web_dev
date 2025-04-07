import React from "react";

export default function CustomCanvasInput({ formData, setFormData, onCreate }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="canvasInput"
        tabIndex="-1"
        aria-labelledby="canvasInputLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="canvasInputLabel">
                Create New Digibook
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label className="form-label">Digibook Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="My Amazing Trip!"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Width</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputWidth"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="2100"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Height</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputHeight"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="1500"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* Full width button */}
              <button
                onClick={handleSubmit}
                className="btn btn-secondary w-100"
                data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
