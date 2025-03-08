export default function Review({ reviews }) {
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div>Rating: {review.get("Rating")}</div>
              <div>
              {review.get("Comment")}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews currently, be the first one to leave a review!</p> 
      )}
    </>
  )
}