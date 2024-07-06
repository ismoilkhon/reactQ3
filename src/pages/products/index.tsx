import "./style.css";
import { Component } from "react";
import { Navigation } from "../navigation";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

type ProductsState = {
  products: Product[];
  offset: number;
  limit: number;
  total: number;
  word: string;
};

class Products extends Component<{}, ProductsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
      total: 0,
      offset: 0,
      limit: 6,
      word: "",
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
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        <Pagination
          count={this.state.total}
          limit={this.state.limit}
          offset={this.state.offset}
          onSelect={this.handleSelect}
        />
      </>
    );
  }
}

export default Products;
