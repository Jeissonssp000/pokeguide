import React, { createContext, useContext, useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { useLimitedList } from "../hooks/useLimitedList";
import { useList } from "../hooks/useList";
import { useSearch } from "../hooks/useSearch";
import { getPokeList } from "../utils/api";

const Context = createContext({});

export const InfoContextProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => getPokeList(setPokeList), []);

  const filter = useFilter();
  const { filteredList } = filter;

  const search = useSearch(filteredList.length ? filteredList : pokeList);
  const { searchList } = search;

  const limited = useLimitedList(pokeList);
  const { limitedList, max } = limited;

  const pokemonList = searchList.length
    ? searchList
    : filteredList.length
    ? filteredList
    : limitedList;

  const showLoadMore = !searchList.length && !filteredList.length && !max;

  const value = {
    ...search,
    ...filter,
    ...limited,
    showLoadMore,
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
