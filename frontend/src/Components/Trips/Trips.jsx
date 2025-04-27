import React from "react";
import BeginSearch from "./_components/BeginSearch";
import { useNavigate } from "react-router-dom"
import { searchPlace } from "../../Common/Services/TripsService";

export default function Trips() {
  const navigate = useNavigate();

  const handleSearch = (place) => {
    if (!place) return;

    searchPlace(place)
      .then((res) => {
        navigate(`/trips/${res.get("placeId")}`);
      })
      .catch((error) => {
        console.error("Error during search or create place:", error);
      });
  };

  return (
    <div>
      <BeginSearch handleSearch={handleSearch}/>
    </div>
  )
}