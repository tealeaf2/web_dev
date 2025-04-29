import React, { useState } from 'react'
import { publishDesign } from '../../../Common/Services/Scrapbook/DesignsService'
import Autocomplete from "react-google-autocomplete";
import Env from '../../../environments'

function PublishInput({ digibook }) {
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState(digibook.get("name") || '');
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePublish = (e) => {
    e.preventDefault();

    if (!title || !desc || !location || !rating) {
      alert("Please fill in all fields!");
      return;
    }

    publishDesign({ id: digibook.id, name: title, desc: desc, location: location, rating: rating }).then(() => {
      window.location.reload();
    })
  }

  const onRatingChange = (e) => {
    const value = parseFloat(e.target.value);
    setRating(value);
  }

  return (
    <div>
      <div
        className="modal fade"
        id="publishInput"
        tabIndex="-1"
        aria-labelledby="canvasInputLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="canvasInputLabel">
                Publish Your digibook!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title:</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="My Amazing Trip!"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location:</label>
                <div className="input-group">
                  <Autocomplete
                    apiKey={Env.GOOGLE_MAPS_PLATFORM_KEY}
                    onPlaceSelected={(place) => {
                      setLocation(place)
                      console.log(place)
                    }}
                    options={{
                      types: [],
                      fields: [
                        "place_id",
                        "name",
                        "formatted_address",
                        "geometry",
                        "photo"
                      ]
                    }}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label flex justify-between">
                  <span>Rating: {rating}</span>
                </label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  step="0.5"
                  id="ratingInput"
                  value={rating}
                  onChange={onRatingChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea
                  required
                  className="form-control"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows="3"
                  placeholder="Write about your digibook..."
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={handlePublish}
                className="btn btn-primary w-100"
                data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishInput