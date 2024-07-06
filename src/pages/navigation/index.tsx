import "./style.css";
import { Component } from "react";
interface NavigationState {
  handleSearch: (searchedWord: string) => void;
  word: string;
}

export class Navigation extends Component<NavigationState> {
  state = {
    word: "",
  };
  render() {
    const { handleSearch } = this.props;
    return (
      <nav className="container">
        <div className="logo">LOGO</div>
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => this.setState({ word: e.target.value })}
          />
          <button
            onClick={() => {
              handleSearch(this.state.word);
              this.setState({ word: "" });
            }}
          >
            🔍
          </button>
        </div>
      </nav>
    );
  }
}
