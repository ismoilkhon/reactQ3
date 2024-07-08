import "./style.css";
import React from "react";
import { Rating } from "../rating";

interface CardProps {
  price: number;
  title: string;
  thumbnail: string;
  rating: number;
}

export const Card: React.FC<CardProps> = ({
  price,
  title,
  thumbnail,
  rating,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={thumbnail} alt="product-thumbnail" />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p className="price">${price}</p>
        <Rating rating={rating} />
      </div>
    </div>
  );
};
