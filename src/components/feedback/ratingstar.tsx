'use client'
import React from 'react';

interface RatingStarsProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className=''>
      {stars.map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey' }}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;