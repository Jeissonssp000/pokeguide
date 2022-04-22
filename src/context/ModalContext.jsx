import React, { createContext, useContext, useState } from "react";
import { getPokemonInfo } from "../utils/api";

const Context = createContext({});

export const ModalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();

  const hideModal = () => {
    setShow(false);
    setInfo(null);
  };

  const showModal = (pokemon) => {
    setShow(true);
    getPokemonInfo(pokemon.url, setInfo);
  };

  const value = { show, info, hideModal, showModal };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const ModalContext = () => {
  const info = useContext(Context);
  return info;
};
