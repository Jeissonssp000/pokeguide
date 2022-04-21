import React, { createContext, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { useList } from "../hooks/useList";
import { useSearch } from "../hooks/useSearch";

const Context = createContext({});

export const InfoContextProvider = ({ children }) => {
  const limitedList = useList("pokemon?limit=10");

  const filter = useFilter();
  const { filteredList } = filter;

  const search = useSearch(filteredList);
  const { searchList } = search;

  const pokemonList = searchList.length
    ? searchList
    : filteredList.length
    ? filteredList
    : limitedList;

  const value = {
    ...search,
    ...filter,
    typesList: useList("type"),
    colorsList: useList("pokemon-color"),
    genderList: useList("gender"),
    pokemonList,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const InfoContext = () => {
  const info = useContext(Context);
  return info;
};
