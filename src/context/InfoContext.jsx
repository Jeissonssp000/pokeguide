import React, { createContext, useContext } from "react";
import { useList } from "../hooks/useList";
import { useSearch } from "../hooks/useSearch";

const Context = createContext({});

export const InfoContextProvider = ({ children }) => {
  const pokemonList = useList("pokemon?limit=10");
  const { empty, search, searchHandler, searchList } = useSearch();

  const value = {
    empty,
    search,
    searchHandler,
    typesList: useList("type"),
    colorsList: useList("pokemon-color"),
    genderList: useList("gender"),
    pokemonList: searchList.length ? searchList : pokemonList,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const InfoContext = () => {
  const info = useContext(Context);
  return info;
};
