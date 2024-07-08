import "./style.css";
import React, { useState, useEffect } from "react";

interface SearchProps {
  handleSearch: (searchedWord: string) => void;
}

export const Search: React.FC<SearchProps> = ({ handleSearch }) => {
  const [word, setWord] = useState<string>("");
  const [isSearchHistoryVisible, setIsSearchHistoryVisible] =
    useState<boolean>(false);

  useEffect(() => {
    setIsSearchHistoryVisible(false);
  }, []);

  const getSavedQueries = () => {
    const savedQueriesRaw = localStorage.getItem("queries");
    return savedQueriesRaw ? JSON.parse(savedQueriesRaw).slice(0, 10) : [];
  };

  const handleSearchInput = (input: string) => {
    setWord(input);
    if (input && !getSavedQueries()?.includes(input)) {
      const updatedQueries = [input, ...getSavedQueries()];
      localStorage.setItem("queries", JSON.stringify(updatedQueries));
    }
    handleSearch(input);
  };

  return (
    <div className="search">
      <div className="inputContainer">
        <input
          type="search"
          placeholder="Search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onBlur={() => setIsSearchHistoryVisible(false)}
          onFocus={() => setIsSearchHistoryVisible(true)}
        />
        {isSearchHistoryVisible && (
          <ul>
            {getSavedQueries().map((query: string) => (
              <li key={query} onMouseDown={() => handleSearchInput(query)}>
                {query}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => handleSearchInput(word)}>🔍</button>
    </div>
  );
};
