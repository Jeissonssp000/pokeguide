import React from "react";
import { InfoContext } from "../context/InfoContext";

const Header = () => {
  const { search, searchHandler } = InfoContext();
  return (
    <header className="header-container">
      <img
        src="https://raw.githubusercontent.com/Mondal10/Pokedex/master/public/assets/logo-128.png"
        alt="logo"
        height="40"
      />
      <label className="search">
        <input
          value={search}
          name="search"
          onChange={searchHandler}
          className="input__field"
          type="text"
          placeholder=" "
        />
        <span className="input__label">Search:</span>
      </label>
    </header>
  );
};

export default Header;
