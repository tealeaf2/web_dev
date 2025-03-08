import Parse from "parse";

// Pull all trips as well as its reviews into an array
export const getAllTripsReviews = () => {
  const Trip = Parse.Object.extend("Trips");
  const Review = Parse.Object.extend("Review");

  const tripQuery = new Parse.Query(Trip);

  // For each trip, find the corresponding reviews and turn into json Object (I hate dealing with parse objects)
  return tripQuery.find().then((trips) => {
    const tripPromises = trips.map((trip) => {
      const reviewQuery = new Parse.Query(Review);
      reviewQuery.equalTo("tripId", trip);

      return reviewQuery.find().then((reviews) => {
        return {
          trip: trip,
          reviews: reviews
        };
      });
    });

    return Promise.all(tripPromises);
  }).catch((error) => {
    console.error("Error fetching trips and reviews:", error);
    return [];
  });
};