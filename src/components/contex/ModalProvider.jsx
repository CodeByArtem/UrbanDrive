import { createContext, useCallback, useState } from "react";
import { createPortal } from "react-dom";


export const ModalContext = createContext();
const modalRoot = document.querySelector("#modal-root");

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const handleSetModal = useCallback((modal = null) => {
    const id = setTimeout(() => {
      setModal(modal);
      clearTimeout(id);
    }, );
  }, []);
  return (
    <ModalContext.Provider value={handleSetModal}>
      {children}
      {modal &&
        createPortal(

          modalRoot
        )}
    </ModalContext.Provider>
  );
};