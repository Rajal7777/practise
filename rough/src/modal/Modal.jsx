import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  const dialog = useRef();

console.log('isOpen', isOpen);
  useEffect(() => {
    const modal = dialog.current;
  
    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }

  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      <h1>modal.jsx</h1>
      {children}
     <form method="dialog">
         <button>close</button>
     </form>
    </dialog>,
    document.getElementById("modal"),
  );
}
