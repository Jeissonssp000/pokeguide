import React from "react";
import { InfoContext } from "../context/InfoContext";
import logo from "../assets/logo.png";

const Header = () => {
  const { search, searchHandler } = InfoContext();
  return (
    <header className="header-container">
      <img src={logo} alt="logo" height="40" />
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
