import React from "react";
import { InfoContext } from "../context/InfoContext";

const ItemsList = () => {
  const { searchEmpty, filterIsEmpty, pokemonList } = InfoContext();
  const noData = searchEmpty || filterIsEmpty;

  return (
    <article className="items-list_article">
      {noData ? (
        <h1>Vacio</h1>
      ) : pokemonList ? (
        pokemonList.map((pokemon, index) => (
          <div
            key={index}
            className="item_component"
            onClick={() => console.log(pokemon)}
          >
            <h3>{pokemon.name}</h3>
          </div>
        ))
      ) : null}
    </article>
  );
};

export default ItemsList;
