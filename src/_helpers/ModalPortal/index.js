import { useEffect } from "react";
import ReactDOM from "react-dom";
const ModalPortal = ({ children }) => {
  // const elRef = useRef(null);
  // if (!elRef.current) {
  //   const div = document.createElement("div");
  //   elRef.current = div;
  // }
  const modalRoot = document.getElementById("modal-root");
  useEffect(() => {
    // const modalRoot = document.getElementById("modal-root");
    // modalRoot.appendChild(elRef.current);

    return () => {
      // modalRoot.removeChild(elRef.current);
    };
  }, []);

  return ReactDOM.createPortal(children, modalRoot);
};
export default ModalPortal;
