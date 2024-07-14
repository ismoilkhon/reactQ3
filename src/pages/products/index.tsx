import "./style.css";
import { Navigation } from "../navigation";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination";
import React, { useState, useEffect, useCallback } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  discountPercentage: number;
};

export const Products: React.FC = () => {
  const [limit] = useState<number>(8);
  const [word, setWord] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/search?q=${word}&limit=${limit}&skip=${offset}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setTotal(res.total);
      })
      .catch((err) => console.log(err));
  }, [offset, word]);

  const handleSelect = useCallback((newOffset: number) => {
    setOffset(newOffset);
  }, []);

  const handleSearch = useCallback(
    (newWord: string) => {
      if (newWord === word) return;
      setWord(newWord);
      setOffset(0);
    },
    [word],
  );

  return (
    <>
      <Navigation handleSearch={handleSearch} />
      <div className="grit">
        {products.map((product) => (
          <Card
            key={product.id}
            price={product.price}
            id={product.id}
            title={product.title}
            rating={product.rating}
            thumbnail={product.thumbnail}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>

      <Pagination
        count={total}
        limit={limit}
        offset={offset}
        onSelect={handleSelect}
      />
      <input
        className="error"
        type="button"
        value="⛔"
        onClick={() => {
          throw new Error("An error occurred");
        }}
      />
    </>
  );
};
