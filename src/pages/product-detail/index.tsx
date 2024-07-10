import "./style.css";
import { Rating } from "../../components/rating";
import { capitalize, getNewPrice } from "../../utils";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  price: number;
  discountPercentage: number;
  images: string[];
  rating: number;
}

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res: Product) => {
        setProduct(res);
        setSelectedImage(res?.images[0]);
      })
      .catch(console.log);
  }, [id]);

  return (
    <>
      <button className="back-arrow" onClick={() => navigate("/")}>
        ➜
      </button>
      <div className="product-detail">
        <div className="img-cont">
          <img src={selectedImage ?? ""} alt="Product" />
          <div>
            {product?.images?.map((img) => (
              <img
                key={img}
                src={img}
                alt="Product"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="content-cont">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <strong>Category:</strong>
          <span>{capitalize(product?.category)}</span>
          <strong>Brand:</strong>
          <span>{capitalize(product?.brand)}</span>
          <strong>Stock:</strong>
          <span>{product?.stock}</span>
          <div className="row">
            <p className="new-price">
              $
              {getNewPrice(
                Number(product?.price),
                Number(product?.discountPercentage),
              )}
            </p>
            <div>
              <p className="discount">
                Save {Math.round(Number(product?.discountPercentage))}%
              </p>
              <div className="inline-row">
                <p>Old price: </p>
                <del> ${product?.price}</del>
              </div>
            </div>
          </div>
          <Rating rating={Number(product?.rating)} />
        </div>
      </div>
    </>
  );
};
