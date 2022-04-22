import React from "react";
import { ModalContext } from "../context/ModalContext";
import { getCode } from "../utils/getCode";

const PokemonItem = ({ pokemon }) => {
  const { setShow } = ModalContext();
  const code = getCode(pokemon.url);
  const id = code < 10 ? `00${code}` : code < 100 ? `0${code}` : `${code}`;
  const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  return (
    <div className="pokemon-item" onClick={() => setShow(true)}>
      <img src={src} alt={pokemon.name} height="80%" />
      <h3 style={{ textAlign: "center" }}>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonItem;
