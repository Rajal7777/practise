import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
   
  console.log('input')
  //add todo
  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
    }
   
    onAddTodo(newTodo);
    setInputValue("");

  };

  return (
    <div className="add-todo">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new todo..."
        type="text"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}
