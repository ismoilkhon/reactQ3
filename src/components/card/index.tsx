import "./style.css";
import { Rating } from "../rating";
import { useNavigate } from "react-router-dom";

interface CardProps {
  price: number;
  id: number;
  title: string;
  thumbnail: string;
  rating: number;
  discountPercentage: number;
}

export function Card({
  thumbnail,
  id,
  title,
  price,
  discountPercentage,
  rating,
}: CardProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card" onClick={() => navigate(`/${id}`)}>
        <div className="card-img">
          <img src={thumbnail} alt="product-thumbnail" />
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p className="price">
            ${price}{" "}
            <samp className="discount">-{Math.round(discountPercentage)}%</samp>
          </p>
          <Rating rating={rating} />
        </div>
      </div>
    </>
  );
}
