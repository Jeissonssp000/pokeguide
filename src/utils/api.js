import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";

// axios configuration
axios.defaults.baseURL = baseURL;
axios.get().then((res) => console.log(res));
const getCode = (url) => {
  let array = url.split("/");
  const pos = array.length - 2;
  return array[pos];
};

export const getTypes = (setState) => {
  axios.get("type").then((response) => {
    const array = [];
    response.data.results.forEach((type) =>
      array.push({ name: type.name, code: getCode(type.url) })
    );
    setState(array);
  });
};

export const getPokemon = (setState) => {
  axios.get("pokemon?limit=10").then((response) => {
    const data = response.data.results;
    setState(data);
  });
};

// const img_small =
//   "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{pokemon-id}.png";
// const img_big =
//   "https://assets.pokemon.com/assets/cms2/img/pokedex/full/{pokemon-id}.png";
