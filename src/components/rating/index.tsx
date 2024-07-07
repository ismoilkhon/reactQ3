import React from "react";
import "./style.css";
interface RatingProps {
  rating: number;
}

export class Rating extends React.Component<RatingProps> {
  render() {
    const { rating } = this.props;

    return (
      <div className="rating">
        {Array(5)
          .fill("★")
          .map((star, index) => (
            <label
              key={index}
              className={index <= rating - 1 ? "selected" : ""}
            >
              {star}
            </label>
          ))}
      </div>
    );
  }
}
