import React, { useEffect, useState } from 'react'
import Autocomplete from "react-google-autocomplete";
import DisplayDigibook from './_components/DisplayDigibook';
import Loading from './_components/Loading';
import DisplayLocation from './_components/DisplayLocation';
import { useParams, useNavigate } from 'react-router-dom'
import { searchPlace, searchDigibooks } from '../../Common/Services/TripsService';
import Env from '../../environments';

function SearchTrips() {
  const { placeId } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [render, setRender] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (res) => {
    setShow(true);
    setChosen(res);
  }

  const onPlaceSelected = (value) => {
    setSearch(value);
  };

  const onSearchClick = () => {
    if (search) {
      searchPlace(search)
      .then((res) => {
        navigate(`/trips/${res.get("placeId")}`);
      })
      .catch((error) => {
        console.error("Error during search or create place:", error);
      });
    }
  };

  useEffect(() => {
    if (!placeId) return;

    searchPlace({ place_id: placeId }).then((res) => {
      setPlace(res);

      if (res?.get("placeId")) {
        searchDigibooks({ placeId: res.get("placeId") }).then((digibooks) => {
          setResults(digibooks);
          setRender(true);
          // console.log(digibooks);
        });
      }
    });
  }, [placeId]);

  return (
    <>
      <div>
        <div className="m-3 w-3/4">
          <div className="input-group">
            <Autocomplete
              id="searchInput"
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
              className="form-control shadow-md"
            />
            <button className="btn btn-primary" type="button"
              onClick={onSearchClick}
            ><i className="bi bi-search"></i></button>

            {/* TODO: Make a sort option */}
            {/* <div className="ml-4">
              Dropdown
            </div> */}
          </div>
        </div>

        <div>
          {place && results && <DisplayLocation location={place} results={results} />}
        </div>

        <hr/>

        {render ? (
          <div>
            <div className="ml-4 text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                "{place?.get("name")}"
              </span>
              <span className="text-sm text-gray-500">
                ({results.length} {results.length === 1 ? 'digibook' : 'digibooks'})
              </span>
            </div>

            {results.length === 0 && (
              <div className="text-center p-4">
                <h4 className="font-semibold text-gray-800">Be the first to publish a digibook!</h4>
                <p className="text-gray-600 mt-2 text-xs">Start creating and sharing your digibook today!</p>
                <div className="cursor-pointer transition-all hover:scale-120 transition-transform duration-300 transform hover:rotate-180"
                  onClick={() => navigate("/scrapbooks")}
                >
                  <i className="bi bi-plus-square text-3xl"></i>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg cursor-pointer hover:opacity-[90%] transition duration-300"
                  onClick={() => handleShow(result)}
                >
                  <div className="relative bg-white shadow overflow-hidden group">
                    {/* Background Image */}
                    <img
                      src={result.get("imagePreview")?.url()}
                      alt={result.get("name")}
                      className="absolute inset-0 w-full h-full object-cover transition"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent"></div>

                    {/* Overlay Content */}
                    <div className="relative flex flex-col justify-between h-full p-4 mt-20">
                      <div className="mt-4 text-sm text-gray-300">
                        <div>By: {result.get("userId")?.get("firstName")} {result.get("userId")?.get("lastName")}</div>
                        <div className="text-sm text-gray-200">
                          <span>Rating: {result.get("rating") ? result.get("rating").toFixed(1) : "No rating"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="text-xl font-bold text-black">
                      {result.get("name")}
                    </h5>
                    <p className="text-black text-xs mt-2 line-clamp-3">
                      {result.get("description")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <DisplayDigibook show={show} handleClose={handleClose} digibook={chosen} />
          </div>





        ) : <Loading />}
      </div>
    </>
  )
}

export default SearchTrips