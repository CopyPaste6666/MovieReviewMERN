import React, { useState } from 'react';
import './ReviewSec.css';

const Star = ({ selected, onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer', fontSize: '48px' }} >
    {selected ? '★' : '☆'}
  </span>
);

const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted rating: ${rating}, comment: ${comment}`);
  };

  return (
    <div >
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
