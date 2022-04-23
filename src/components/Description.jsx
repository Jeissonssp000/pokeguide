import React, { useState } from "react";

const Description = ({ info }) => {
  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${info.img}.png`;
  const typeString = () => {
    if (info.types && info.types.length) {
      const list = [];
      info.types.forEach((item) => list.push(item.type.name));
      return list.join(" - ");
    }
  };
  return (
    <div className="detail-container" onClick={(e) => e.stopPropagation()}>
      <div className="pokemon-info">
        <img src={img} alt={info.name} height="200px" width="200px" />
        <div className="pokemon-detail">
          <p>
            {info.name} <span>{info.img}</span>
          </p>
          <p style={{ maxWidth: 280 }}>
            Description: <br />
            {info.description.replace("\f", " ")}
            <br />
            height: {info.height}
            <br />
            weight: {info.weight}
            <br />
            color: {info.color?.name}
            <br />
            habitat: {info.habitat?.name}
            <br />
            type: {typeString()}
          </p>
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>evolutions</h3>
      <div className="pokemon-evolution">
        {info.evolution.length === 1 ? (
          <h5>This pokemon does not evolve</h5>
        ) : (
          info.evolution.map((evo, index) => <EvoItem evo={evo} key={index} />)
        )}
      </div>
    </div>
  );
};

export default Description;

const EvoItem = ({ evo }) => {
  const [loaded, setLoaded] = useState(false);
  const evoImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evo.img}.png`;
  return (
    <div className="evo-card">
      <img
        src={evoImg}
        alt={evo.name}
        height="80px"
        width="80px"
        onLoad={() => setLoaded(true)}
      />
      <h6 className="evo-name">{loaded ? evo.name : "Loading..."}</h6>
    </div>
  );
};
