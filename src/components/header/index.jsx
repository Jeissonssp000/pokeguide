import "./Header.css";
import React, { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="header-container">
      <img src="https://raw.githubusercontent.com/Mondal10/Pokedex/master/public/assets/logo-128.png" alt="logo" height="40"/>
      <label>
        Search:
        <input
          value={search}
          name="search"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
        />
      </label>
    </header>
  );
};

export default Header;
