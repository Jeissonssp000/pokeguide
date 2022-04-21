import "./Header.css";
import React from "react";
import { InfoContext } from "../../context/InfoContext";

const Header = () => {
  const { search, setSearch } = InfoContext();
  return (
    <header className="header-container">
      <img
        src="https://raw.githubusercontent.com/Mondal10/Pokedex/master/public/assets/logo-128.png"
        alt="logo"
        height="40"
      />
      <label>
        Search:
        <input value={search} name="search" onChange={setSearch} type="text" />
      </label>
    </header>
  );
};

export default Header;
