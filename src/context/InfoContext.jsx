import React, { createContext, useContext, useState } from "react";
import { useList } from "../hooks/useList";

const Context = createContext({});

export const InfoContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const value = {
    search,
    setSearch: (event) => setSearch(event.target.value),
    typesList: useList("type"),
    pokemonList: useList("pokemon?limit=10"),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const InfoContext = () => {
  const info = useContext(Context);
  return info;
};
