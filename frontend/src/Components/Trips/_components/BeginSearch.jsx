import React, { useState } from 'react'
import Autocomplete from "react-google-autocomplete";
import Env from '../../../environments';

function BeginSearch({ handleSearch }) {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onPlaceSelected = (place) => {
    setSelectedPlace(place);
  };

  const onSearchClick = () => {
    if (selectedPlace) {
      // console.log(selectedPlace)
      handleSearch(selectedPlace);
    }
  };

  return (
    <div>
      <section className="flex items-start justify-center min-h-screen pt-[10vh]">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-black sm:text-5xl">
              Explore other
              <strong className="text-[#fc6ab5]"> digibooks </strong>
              !
            </h1>
            <p className="mt-1 text-pretty text-gray-500 text-md">
              Discover experiences made by others around the world.
            </p>
          </div>
          <div className="input-group">
            <Autocomplete
              apiKey={Env.GOOGLE_MAPS_PLATFORM_KEY}
              onPlaceSelected={onPlaceSelected}
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
              placeholder="Search for a city, restaurant, or event..."
              className="form-control shadow-lg"
            />
            <button className="btn btn-primary" type="button"
            onClick={onSearchClick}
            ><i className="bi bi-search"></i></button>
          </div>
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            <div className="mt-2">
              Popular today:
            </div>
            {["New York", "Paris", "Tokyo", "Los Angeles", "London"].map((place, index) => (
              <button key={index} className="px-4 py-2 text-gray-700 rounded-lg hover:bg-pink-100 transition"
              onClick={() => handleSearch({ name: place })}
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </section >
    </div >
  )
}

export default BeginSearch