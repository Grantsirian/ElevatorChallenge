import React from 'react';
import './Rating.css';

const Rating = ({rating}) => {
    const totalStars = 5;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        let starClass = 'star empty'; // Default class (grey star)

        if (index < Math.floor(rating)) {
          starClass = 'star filled'; // Full star (gold)
        } else if (index < Math.ceil(rating)) {
          starClass = 'star half'; // Half star (half gold, half grey)
        }

        return (
          <span title={rating} key={index} className={starClass}>
            ★
          </span>
        );
      })}
    </div>
  );
}

export default Rating