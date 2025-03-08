import {
  getAllTripsReviews
} from "../../Common/Services/TripsService"
import {
  reviewSubmit
} from "../../Common/Services/ReviewService"
import React, { useEffect, useState } from "react";
import Review from "./Review";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [clickReviews, setClickReviews] = useState({});
  const [showAddReview, setShowAddReview] = useState({});
  const [reviewText, setReviewText] = useState("");
  const [ratingText, setRatingText] = useState("");

  useEffect(() => {
    getAllTripsReviews().then((data) => {
      console.log(data);
      setTrips(data);
    });
  }, [])

  const handleClick = (tripId) => {
    setClickReviews((prev) => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  }

  const handleAddReviewClick = (tripId) => {
    setShowAddReview((prev) => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  };

  const handleSubmitReview = (tripId, comment, rating) => {
    reviewSubmit({ comment, rating, tripId }).then((newReview) => {
      // Find the trip in the state
      setTrips((prevTrips) =>
        prevTrips.map((trip) => {
          if (trip.trip.id === tripId) {
            // Append new review to the reviews array
            return {
              ...trip,
              reviews: [...trip.reviews, newReview],
            };
          }
          return trip;
        })
      );
  
    setReviewText("");
    setRatingText("");
    }).catch((e) => {
      console.log("Error for submission: ", e);
    })
  };

  return (
    <>
      <ul>
        {trips.map((trip) => (
          <li key={trip.trip.id}>
            <div>
              Name: {trip.trip.get("Place")}
            </div>
            <div>
              <img src={trip.trip.get("Scrapbook").url()} width="200" height="200" />
            </div>
            <div>
              Description: {trip.trip.get("Description")}
            </div>
            {/* For future, make the button instead the whole image? Or at least a box around the trip */}
            {/* Should be that when you click button, all the reviews show up for that specific trip */}

            {/* TODO: Make delete for review and specific user */}
            <div>
              <button onClick={() => handleClick(trip.trip.id)}>
                {clickReviews[trip.trip.id] ? "Hide Reviews" : "Show Reviews"}
              </button>
              <button onClick={() => handleAddReviewClick(trip.trip.id)}>
                {showAddReview[trip.trip.id] ? "Cancel" : "Add Review"}
              </button>
            </div>

            {showAddReview[trip.trip.id] && (
              <div>
                <input
                  type="text"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write a review..."
                />
                Rating?
                <input
                  type="number"
                  value={ratingText}
                  onChange={(e) => setRatingText(e.target.value)}
                  placeholder="0"
                  min="1"
                  max="5"
                />
                <button onClick={() => handleSubmitReview(trip.trip.id, reviewText, ratingText)}>Submit</button>
              </div>
            )}

            {/* Conditional rendering of reviews */}
            {clickReviews[trip.trip.id] && (
              <Review reviews={trip.reviews.length > 0 ? trip.reviews : []} />
            )}

          </li>
        ))}
      </ul>
    </>
  )
}