import React from "react";
import { InfoContext } from "../context/InfoContext";

const ItemsList = () => {
  const { empty, pokemonList } = InfoContext();

  return (
    <article className="items-list_article">
      {!empty ? (
        pokemonList.map((pokemon, index) => (
          <Item key={index} pokemon={pokemon} />
        ))
      ) : (
        <h1>Vacio</h1>
      )}
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
