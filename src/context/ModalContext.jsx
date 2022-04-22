import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const ModalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});

  const value = { show, setShow, selected, setSelected };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const ModalContext = () => {
  const info = useContext(Context);
  return info;
};
