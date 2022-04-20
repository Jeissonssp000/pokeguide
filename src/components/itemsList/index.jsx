import "./ItemsList.css";
import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/api";

const ItemsList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => getPokemon(setPokemonList), []);

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
