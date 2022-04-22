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
      {info ? <Description info={info} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default Modal;
