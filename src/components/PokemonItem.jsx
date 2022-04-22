import React from "react";
import { ModalContext } from "../context/ModalContext";
import { getIdImg } from "../utils/getCode";

const PokemonItem = ({ pokemon }) => {
  const { showModal } = ModalContext();
  const id = getIdImg(pokemon.url);
  const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  return (
    <div className="pokemon-item" onClick={() => showModal(pokemon)}>
      <img src={src} alt={pokemon.name} height="80%" />
      <h3 style={{ textAlign: "center" }}>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonItem;
