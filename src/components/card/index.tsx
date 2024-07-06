import "./style.css";
import { Component } from "react";

interface CardProps {
  price: number;
  title: string;
  thumbnail: string;
  description: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src={this.props.thumbnail} alt="product-thumbnail" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p className="price">{this.props.price}</p>
        </div>
      </div>
    );
  }
}
