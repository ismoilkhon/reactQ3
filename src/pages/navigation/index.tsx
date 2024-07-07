import "./style.css";
import React from "react";

interface NavigationState {
  word: string;
  handleSearch: (searchedWord: string) => void;
}

export class Navigation extends React.Component<NavigationState> {
  state = {
    word: "",
    isSearchHistoryVisible: false,
  };

  getSavedQueries = () => {
    const savedQueriesRaw = localStorage.getItem("queries");
    return savedQueriesRaw ? JSON.parse(savedQueriesRaw).slice(0, 10) : [];
  };

  handleSearch = (word: string) => {
    this.setState({ word });
    const savedQueries = this.getSavedQueries();

    if (word && !savedQueries?.includes(word)) {
      localStorage.setItem("queries", JSON.stringify([word, ...savedQueries]));
    }

    this.props.handleSearch(word);
  };

  render() {
    return (
      <nav className="container">
        <div className="logo">LOGO</div>
        <div className="search">
          <div className="inputContainer">
            <input
              type="search"
              placeholder="Search"
              value={this.state.word}
              onChange={(e) => this.setState({ word: e.target.value })}
              onBlur={() => this.setState({ isSearchHistoryVisible: false })}
              onFocus={() => this.setState({ isSearchHistoryVisible: true })}
            />
            {this.state.isSearchHistoryVisible && (
              <ul>
                {this.getSavedQueries().map((query: string) => (
                  <li key={query} onMouseDown={() => this.handleSearch(query)}>
                    {query}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={() => this.handleSearch(this.state.word)}>🔍</button>
        </div>
      </nav>
    );
  }
}
