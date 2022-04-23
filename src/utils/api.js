import axios from "axios";
import { getIdImg } from "./getCode";

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

let evolve = (evolves_to, array) => {
  if (evolves_to.length) {
    evolves_to.forEach((evolve) => {
      const img = getIdImg(evolve.species.url);
      array.push({ ...evolve.species, img });
      if (evolve.evolves_to.length) {
        evolve.evolves_to.forEach((last) => {
          const img = getIdImg(last.species.url);
          array.push({ ...last.species, img });
        });
      }
    });
  }
};

export const getPokemonInfo = async (url, setState) => {
  const pokemon = await axios.get(url);
  const img = getIdImg(url);
  const { name, id, types, height, weight } = pokemon.data;
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const info = await axios.get(speciesUrl);
  const { habitat, color, evolution_chain } = info.data;
  const chain = await axios.get(evolution_chain.url);
  const { evolves_to, species } = chain.data.chain;
  species.img = getIdImg(species.url);
  const evolution = [species];
  evolve(evolves_to, evolution);
  const data = {
    name,
    id,
    img,
    description: info?.data?.flavor_text_entries[0]?.flavor_text,
    height,
    weight,
    //genero
    habitat,
    color,
    types,
    evolution,
  };
  setState(data);
};
