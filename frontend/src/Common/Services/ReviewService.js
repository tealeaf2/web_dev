import Parse from "parse";

// TODO: make code more typesafe and correct for inputs

// Makes new review based on comment and rating of the user
export const reviewSubmit = ({comment, rating, tripId}) => {
  const ratingNumber = parseInt(rating);

  const Review = Parse.Object.extend("Review");
  const newReview = new Review();

  const Trip = Parse.Object.extend("Trips");
  const tripPointer = new Trip();
  tripPointer.id = tripId;

  newReview.set("Comment", comment);
  newReview.set("Rating", ratingNumber);
  newReview.set("tripId", tripPointer);

  return newReview.save().then((result) => {
    // console.log(result)
    return result;
  });
}