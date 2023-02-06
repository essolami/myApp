import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};
const ModalOverlay = (props) => {
  <div className="modal">
    <div className="content">{props.children}</div>
  </div>;
};

const portalElement = document.getElementById("modal-root");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
