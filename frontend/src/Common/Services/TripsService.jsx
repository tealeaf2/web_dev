import Parse from "parse";

export const searchDigibooks = ({ placeId }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);

  if (!placeId) return [];

  query.equalTo("locationId", placeId);
  query.equalTo("isPublished", true);
  query.include("userId");

  return query.find()
    .then((results) => {
      return results; // Array of Scrapbook objects
    })
    .catch((error) => {
      console.error("Error searching digibooks:", error);
      throw error;
    });
};

// Method that returns the place and creates one if there isn't, just a way to populate the database
// Can be pretty expensive long scale tho, can always take out the making places part
export const searchPlace = (place) => {
  const Place = Parse.Object.extend("Place");
  const query = new Parse.Query(Place);

  if (place.place_id && place.place_id !== 'undefined') {
    query.equalTo("placeId", place.place_id);
  } else if (place.name) {
    query.equalTo("name", place.name);
  }

  return query.first()
    .then((foundPlace) => {
      if (foundPlace) {
        return foundPlace; // Return the place if found
      } else {
        // If not found, create a new place
        const newPlace = new Place();
        newPlace.set("name", place.name);
        newPlace.set("placeId", place.place_id); // Ensure placeId is unique
        newPlace.set("address", place.formatted_address);

        const lat = place.geometry?.location?.lat();
        const lng = place.geometry?.location?.lng();
        if (lat && lng) {
          const geoPoint = new Parse.GeoPoint({ latitude: lat, longitude: lng });
          newPlace.set("coordinate", geoPoint);
        }
        if (place.photos && place.photos.length > 0) {
          newPlace.set("photoUrl", place.photos[0].getUrl());
        }
        return newPlace.save(); // Save the new place
      }
    })
    .catch((error) => {
      console.error("Error searching or creating place:", error);
      throw error;
    });
};
