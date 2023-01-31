import React from "react";
import ModalPortal from "../../../_helpers/ModalPortal";

import "./cookiesModal.scss";

const CookiesModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalPortal>
      <div className="container">
        <div className="cookiesContent" id="cookiesPopup">
          <button className="close">✖</button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
            alt="cookies-img"
          />
          <p>
            We use cookies for improving user experience, analytics and
            marketing.
          </p>
          <button className="accept" onClick={onClose}>
            That's fine!
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};
export default CookiesModal;
