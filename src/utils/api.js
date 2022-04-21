import axios from "axios";

// axios configuration
const baseURL = "https://pokeapi.co/api/v2/";

export const getList = (url, setState) => {
  axios.get(baseURL + url).then((response) => {
    const data = response.data.results;
    setState(data);
  });
};

export const getPokeList = (setState) => {
  axios.get(baseURL + "pokedex/national").then((response) => {
    const data = response.data.pokemon_entries;
    const array = [];
    data.forEach((pokemon) => {
      array.push(pokemon.pokemon_species);
    });
    setState(array);
  });
};

export const findInfoByUrl = (url, setState) => {
  axios.get(url).then((response) => {
    let array = [];
    const data = response.data;
    const species = data.pokemon_species_details;
    if (data.pokemon_species) {
      array = data.pokemon_species;
    } else if (data.pokemon) {
      data.pokemon.forEach((item) => array.push(item.pokemon));
    } else if (species) {
      species.forEach((item) => array.push(item.pokemon_species));
    }
    setState((old) => {
      const copy = [...old, array];
      return copy;
    });
  });
};
