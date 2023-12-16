import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComShow = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Replace with your actual API endpoint
        const apiEndpoint = 'https://your-api-endpoint/reviews';

        axios.get(apiEndpoint)
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
            });
    }, []);

    return (
        <div>
            <h2>Reveiws</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <h3>{review.title}</h3>
                            <p>{review.content}</p>
                            <p>Rating: {review.rating}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews yet.</p>
            )}
        </div>
    );
};

export default ComShow;
