import axios from "axios";

// axios configuration
const baseURL = "https://pokeapi.co/api/v2/";
axios.defaults.baseURL = baseURL;

export const getList = (url, setState) => {
  axios.get(url).then((response) => {
    const data = response.data.results;
    setState(data);
  });
};

export const getPokeList = (setState) => {
  axios.get("pokedex/national").then((response) => {
    const data = response.data.pokemon_entries;
    const array = []
    data.forEach(pokemon => {
      array.push(pokemon.pokemon_species)
    });
    setState(array);
  });
};
