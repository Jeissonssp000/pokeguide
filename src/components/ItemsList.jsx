import React from "react";
import { InfoContext } from "../context/InfoContext";
import PokemonItem from "./PokemonItem";

const ItemsList = () => {
  const { searchEmpty, filterIsEmpty, pokemonList } = InfoContext();
  const noData = searchEmpty || filterIsEmpty;

  return (
    <article className="items-list_article">
      {noData ? (
        <h1>Vacio</h1>
      ) : pokemonList ? (
        pokemonList.map((pokemon, index) => (
          <PokemonItem pokemon={pokemon} key={index} />
        ))
      ) : null}
    </article>
  );
};

export default ItemsList;
