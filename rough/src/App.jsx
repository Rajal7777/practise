import { useState } from "react";
import Modal from "./modal/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h1>app.js</h1>
      <button onClick={() =>setIsModalOpen(true)}>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <p>This text is from app.js</p>
        </Modal>
        click to open
      </button>
    </>
  );
}
