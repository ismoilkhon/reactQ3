import "./style.css";
import React from "react";

interface RatingProps {
  rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="rating">
      {Array(5)
        .fill("★")
        .map((star, index) => (
          <label key={index} className={index < rating ? "selected" : ""}>
            {star}
          </label>
        ))}
    </div>
  );
};
