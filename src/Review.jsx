import { useState } from "react";
import "./Review.css";

function Review() {

    // Load saved reviews from localStorage
    const [reviews, setReviews] = useState(() => {

        const savedReviews = localStorage.getItem("kbReviews");

        return savedReviews
            ? JSON.parse(savedReviews)
            : [
                {
                    name: "Dinesh",
                    rating: 5,
                    message: "Fresh meat and excellent quality. Good service!"
                },
                {
                    name: "Kumar",
                    rating: 4,
                    message: "The meat was fresh and delivery was quick."
                },
                {
                    name: "Arun",
                    rating: 5,
                    message: "Very good quality and reasonable price."
                }
            ];
    });

    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const newReview = {
            name: name,
            rating: rating,
            message: message
        };

        // Add new review
        const updatedReviews = [...reviews, newReview];

        // Update React state
        setReviews(updatedReviews);

        // Save reviews in localStorage
        localStorage.setItem(
            "kbReviews",
            JSON.stringify(updatedReviews)
        );

        // Clear form
        setName("");
        setRating(5);
        setMessage("");

        alert("Review submitted successfully!");

    };

    return (
        <div className="review-page">

            {/* Header */}

            <div className="review-header">

                <h1>Customer Reviews</h1>

                <p>
                    See what our customers say about KB Meat Stall.
                </p>

            </div>

            {/* Reviews */}

            <div className="reviews-container">

                {reviews.map((review, index) => (

                    <div className="review-card" key={index}>

                        <h3>{review.name}</h3>

                        <div className="stars">

                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}

                        </div>

                        <p>{review.message}</p>

                    </div>

                ))}

            </div>

            {/* Add Review */}

            <div className="add-review">

                <h2>Write a Review</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Select Rating</label>

                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                    >

                        <option value="5">★★★★★ - Excellent</option>
                        <option value="4">★★★★☆ - Very Good</option>
                        <option value="3">★★★☆☆ - Good</option>
                        <option value="2">★★☆☆☆ - Average</option>
                        <option value="1">★☆☆☆☆ - Poor</option>

                    </select>

                    <textarea
                        placeholder="Write your review"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <button type="submit">
                        Submit Review
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Review;