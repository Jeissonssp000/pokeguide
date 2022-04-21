import React from "react";
import { InfoContext } from "../context/InfoContext";

const ItemsList = () => {
  const { pokemonList } = InfoContext();

  return (
    <article className="items-list_article">
      {pokemonList.map((pokemon, index) => (
        <Item key={index} pokemon={pokemon} />
      ))}
    </article>
  );
};

const Item = ({ pokemon }) => {
  const onClick = () => console.log(pokemon);
  return (
    <div className="item_component" onClick={onClick}>
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default ItemsList;
