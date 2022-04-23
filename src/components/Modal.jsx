import React from "react";
import { ModalContext } from "../context/ModalContext";
import Description from "./Description";

const Modal = () => {
  const { show, hideModal, info } = ModalContext();
  return (
    <div
      style={{ height: show ? "100vh" : 0 }}
      className="modal"
      onClick={hideModal}
    >
      {info ? <Description info={info} /> : show ? <h1>Loading...</h1> : null}
    </div>
  );
};

export default Modal;
