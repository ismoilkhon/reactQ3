import { Rating } from "../rating";
import "./style.css";
import React from "react";

interface CardProps {
  price: number;
  title: string;
  thumbnail: string;
  rating: number;
}

export class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src={this.props.thumbnail} alt="product-thumbnail" />
        </div>
        <div className="card-body">
          <h5>{this.props.title}</h5>
          <p className="price">${this.props.price}</p>
          <Rating rating={this.props.rating} />
          {/* <button>See more...</button> */}
        </div>
      </div>
    );
  }
}
