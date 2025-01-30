import { useState } from "react";
import "./Comment.css";

const Comment = () => {
  const [input, setInput] = useState({
    username: "",
    comment: "",
    review: 0,
  });

  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleStarClick = (rating) => {
    setInput({
      ...input,
      review: rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.username === "" ||
      input.comment === "" ||
      input.review === 0
    ) {
      alert("Please fill out all fields and select a review rating.");
      return;
    }

    setReviews([...reviews, input]);
    setInput({ username: "", comment: "", review: 0 });
  };

  return (
    <>
      <h3>Comment & Review</h3>
      <div className="container">
        <div className="image-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/936/043/non_2x/office-woman-holding-a-cup-of-coffee-tea-woman-taking-a-coffee-break-in-the-office-home-office-office-concept-illustration-vector.jpg"
            alt="Office Woman"
          />
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>UserName:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="username"
              value={input.username}
              onChange={handleChange}
            />

            <label>Comment:</label>
            <textarea
              name="comment"
              placeholder="Write your comment here..."
              value={input.comment}
              onChange={handleChange}
            />

            <label>Review:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= input.review ? "star selected" : "star"}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <h3>User Reviews</h3>
      <div className="review-container">
        {reviews.length > 0 ? (
          <div className="review-grid">
            {reviews.map((review, index) => (
              <div className="review" key={index}>
                <h4>{review.username}</h4>
                <p>{review.comment}</p>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= review.review ? "star selected" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </div>
    </>
  );
};

export default Comment;
