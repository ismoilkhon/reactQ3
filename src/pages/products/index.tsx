import "./style.css";
import React from "react";
import { Navigation } from "../navigation";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
};

type ProductsState = {
  word: string;
  limit: number;
  total: number;
  offset: number;
  products: Product[];
  isTrue: boolean;
};

class Products extends React.Component<object, ProductsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      total: 0,
      limit: 8,
      word: "",
      offset: 0,
      products: [],
      isTrue: true,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${this.state.word}&limit=${this.state.limit}&skip=${this.state.offset}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data: { products: Product[]; total: number } =
        await response.json();

      this.setState({
        products: data.products,
        total: data?.total,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  handleSelect = (offset: number) => {
    this.setState({ offset }, () => {
      this.fetchProducts();
    });
  };
  handleSearch = (word: string) => {
    if (word === this.state.word) return;
    this.setState({ word, offset: 0 }, () => {
      this.fetchProducts();
    });
  };

  render() {
    return (
      <>
        <Navigation handleSearch={this.handleSearch} word={this.state.word} />
        <div className="grit">
          {this.state.products.map((product) => (
            <Card
              key={product?.id}
              price={product.price}
              title={product.title}
              thumbnail={product.thumbnail}
              rating={product.rating}
            />
          ))}
        </div>
        <Pagination
          count={this.state.total}
          limit={this.state.limit}
          offset={this.state.offset}
          onSelect={this.handleSelect}
        />
        <input
          className="error"
          type="button"
          value="⛔"
          onClick={() => {
            throw new Event("error occured");
          }}
        />
      </>
    );
  }
}

export default Products;
