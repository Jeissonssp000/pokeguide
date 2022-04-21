import React, { createContext, useContext, useEffect, useState } from "react";
import { useList } from "../hooks/useList";
import { getPokeList } from "../utils/api";

const Context = createContext({});

export const InfoContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [pokeList, setPokeList] = useState("");
  const [searchList, setSearchList] = useState([]);

  const pokemonList = useList("pokemon?limit=10");

  useEffect(() => getPokeList(setPokeList), []);

  useEffect(() => {
    if (search.length > 0) {
      const newArray = pokeList.filter((pokemon) =>
        pokemon.name.includes(search)
      );
      setSearchList(newArray);
    } else {
      setSearchList([]);
    }
  }, [search]);

  const value = {
    search,
    setSearch: (event) => setSearch(event.target.value),
    typesList: useList("type"),
    colorsList: useList("pokemon-color"),
    genderList: useList("gender"),
    pokeList,
    pokemonList: searchList.length ? searchList : pokemonList,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const InfoContext = () => {
  const info = useContext(Context);
  return info;
};
