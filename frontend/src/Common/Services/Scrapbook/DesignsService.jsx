import Parse from "parse";

export const createNewDesign = ({
  name,
  width,
  height
}) => {
  const w = width || 1000;
  const h = height || 800;

  const Scrapbook = Parse.Object.extend("Scrapbook");
  const newScrapbook = new Scrapbook();
  const currentUser = Parse.User.current();

  const intWidth = parseInt(w);
  const intHeight = parseInt(h);

  newScrapbook.set("name", name)
  newScrapbook.set("width", intWidth)
  newScrapbook.set("height", intHeight)
  newScrapbook.set("userId", currentUser)

  return newScrapbook.save().then((result) => {
    return result;
  }).catch((e) => {
    console.error(e);
  });
}

export const getDesignById = ({ designId }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);
  return query.get(designId).then((result) => {
    return result;
  });
}

export const getDesignsByUser = ({ userID }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);
  
  const userPointer = new Parse.User();
  userPointer.id = userID;

  query.equalTo("userId", userPointer);
  
  return query.find()
    .then((results) => {
      return results;
    })
    .catch((error) => {
      console.error("Error fetching designs by user:", error);
      throw error;
    });
};

export const deleteDesignById = ({ id }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);

  query.get(id)
  .then((design) => {
    // Delete the design object
    return design.destroy();
  }).catch((err) => {
    console.error(err)
  })
}

export const publishDesign = ({ id, location, desc, name }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const Place = Parse.Object.extend("Place");
  const scrapbookQuery = new Parse.Query(Scrapbook);
  const placeQuery = new Parse.Query(Place);

  return scrapbookQuery.get(id)
    .then((design) => {
      return placeQuery.equalTo("placeId", location.place_id).first()
        .then((existingPlace) => {
          if (existingPlace) {
            // Place already exists
            return existingPlace;
          } else {
            // Create a new Place
            const newPlace = new Place();
            newPlace.set("placeId", location.place_id);
            newPlace.set("name", location.name);
            newPlace.set("address", location.formatted_address);
            
            const lat = location.geometry?.location?.lat();
            const lng = location.geometry?.location?.lng();
            if (lat && lng) {
              const geoPoint = new Parse.GeoPoint({ latitude: lat, longitude: lng });
              newPlace.set("coordinate", geoPoint);
            }

            if (location.photos && location.photos.length > 0) {
              newPlace.set("photoUrl", location.photos[0].getUrl());
            }

            return newPlace.save();
          }
        })
        .then((place) => {
          // Now update the scrapbook
          design.set("name", name);
          design.set("locationId", location.place_id);
          design.set("description", desc);
          design.set("isPublished", true);
          design.set("placeId", place); // Pointer to Place
          return design.save();
        });
    })
    .catch((err) => {
      console.error("Error publishing design:", err);
    });
};