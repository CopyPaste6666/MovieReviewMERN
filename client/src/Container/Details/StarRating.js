import React, { useState, useEffect } from 'react';
import './ReviewSec.css';

const Star = ({ selected, onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer', fontSize: '48px' }}>
    {selected ? '★' : '☆'}
  </span>
);

const StarRating = ({ totalStars, initialMovieId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [movieId, setMovieId] = useState(initialMovieId); // Store movieId separately
  const [userData, setUserData] = useState({});


  const callDetails = async () => {
    try {
        const res = await fetch('/getdata', {
            method: "GET",
            headers: {
                
                "Content-Type": "application/json"
            },
            
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }

    } catch (err) {
        console.log(err);
        
    }
}

  useEffect(() => {
    callDetails();
    setMovieId(initialMovieId); // Update movieId if initialMovieId changes
  }, [initialMovieId]);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch('/details', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId,
        name,
        email,
        rating,
        comment,
      }),
    });
  
    try {
      const data = await res.json();
  
      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else if (res.status === 401) {
        window.alert("Unauthorized Comment");
        console.log("Unauthorized Registration");
      } else {
        window.alert(`Submitted rating: ${rating}, comment: ${comment}, Movie/TV ID: ${movieId}`);
        console.log("Submitted Rating Successfully");
      }
    } catch (error) {
      console.error("Error occurred while parsing response:", error);
    }
  };
  

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
      <p>Selected rating: {rating}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your review here..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StarRating;
