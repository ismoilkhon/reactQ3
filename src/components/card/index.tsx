import { Component } from "react";
import "./style.css";

interface CardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
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
