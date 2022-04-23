import React, { useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { getIdImg } from "../utils/getCode";

const PokemonItem = ({ pokemon }) => {
  const { showModal } = ModalContext();
  const [loaded, setLoaded] = useState(false);
  const id = getIdImg(pokemon.url);
  const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  const style = { textAlign: "center" };
  return (
    <div className="pokemon-item" onClick={() => showModal(pokemon)}>
      <img
        onLoad={() => setLoaded(true)}
        src={src}
        alt={pokemon.name}
        height="80%"
      />
      <h3 style={style}>{loaded ? pokemon.name : "Loading..."}</h3>
    </div>
  );
};

export default PokemonItem;
