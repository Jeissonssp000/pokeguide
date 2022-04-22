import React from "react";

const Description = ({ info }) => {
  console.log(info);
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
          <p>
            Description:
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
      <div className="pokemon-evolution">
        {info.evolution.length === 1 ? (
          <h5>This pokemon does not evolve</h5>
        ) : (
          info.evolution.map((evo, index) => {
            const evoImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evo.img}.png`;
            return (
              <div className="evo-card" key={index}>
                <img src={evoImg} alt={evo.name} height="80px" width="80px" />
                <h6 className="evo-name">{evo.name}</h6>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Description;
