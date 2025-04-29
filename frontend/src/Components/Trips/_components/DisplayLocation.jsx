import React, {useState, useCallback} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Env from '../../../environments';

export default function DisplayLocation({ location, results }) {
  const totalRatings = results?.length || 0;

  const getPercentage = (count) => {
    return totalRatings > 0 ? Math.round((count / totalRatings) * 100) : 0;
  };

  const averageRating =
    totalRatings > 0
      ? (results.reduce((sum, r) => sum + r.get("rating"), 0) / totalRatings).toFixed(1)
      : "No ratings";

  const ratingCounts = [5, 4, 3, 2, 1].reduce((acc, star) => {
    acc[star] = results.filter(r => r.get("rating") === star).length;
    return acc;
  }, {});

  // Code from GPT, gets maps from google API and displays it based off of location
  const geoPoint = location?.get("coordinate");
  const latitude = geoPoint ? geoPoint.latitude: 0;
  const longitude = geoPoint ? geoPoint.longitude : 0;
  const mapCenter = { lat: latitude, lng: longitude };

  const containerStyle = {
    width: '600px',
    height: '150px',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: Env.GOOGLE_MAPS_PLATFORM_KEY,
  });


  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    map.setZoom(6);
    setMap(map);
  }, [mapCenter]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      {/* Location Info */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{location.get("name")}</h2>
          <p className="text-sm text-gray-600">{location.get("address")}</p>
          <span className="inline-block bg-[#fc6ab5] text-white text-sm font-medium px-4 py-1 rounded-full">
            ⭐ {averageRating} / 5
          </span>
        </div>
      </div>
      <div className="pt-2">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={6}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={mapCenter} />
          </GoogleMap>
        ) : (
          null
        )}
      </div>
      {/* Ratings Breakdown */}
      <div className="md:w-1/3 pt-2">
        <ul className="space-y-3">
          {[5, 4, 3, 2, 1].map(star => {
            const count = ratingCounts[star] || 0;
            const percent = getPercentage(count);
            return (
              <li key={star} className="flex items-center">
                <span className="w-10 text-sm text-gray-600">{star} ★</span>
                <div className="flex-1 mx-2 h-3 bg-gray-300 rounded">
                  <div
                    className="h-3 bg-[#5193d6] rounded"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 w-6 text-right">({count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
