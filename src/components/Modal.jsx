import React from "react";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {
  const { show, setShow, selected, setSelected } = ModalContext();
  const hideModal = () => setShow(false);
  return (
    <div
      style={{ height: show ? "100vh" : 0 }}
      className="modal"
      onClick={hideModal}
    ></div>
  );
};

export default Modal;
