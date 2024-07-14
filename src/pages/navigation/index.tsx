import React from "react";
import "./style.css";
import { Search } from "../../components/search";

interface NavigationProps {
  handleSearch: (searchedWord: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ handleSearch }) => {
  return (
    <nav className="container">
      <div className="logo">LOGO</div>
      <Search handleSearch={handleSearch} />
    </nav>
  );
};
