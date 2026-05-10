import { useState } from "react";
import TodoItem from "./component/TodoItem";
import TodoInput from "./component/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
 const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

 //add todo
 const handleAddTodo = (newTodo) => {
   setTodos([...todos, newTodo]);
 }

  //delete todo
  const handleDelete = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  //toggle completed
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  //edit
  const handleEdit = (id, oldText) => {
    console.log(id, oldText);
    setEditId(id);
    setEditValue(oldText);
  };

  const handleSave = () => {
    const updated = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: editValue } : todo,
    );
    setTodos(updated);
    setEditId(null);
    setEditValue("");
  };

  return (
    <div className="todo-app">
      <h1>TODO APP</h1>
      <TodoInput onAddTodo={handleAddTodo} />

      <TodoItem
        todos={todos}
        handleDelete={handleDelete}
        toggleCompleted={toggleCompleted}
        handleEdit={handleEdit}
        editId={editId}
        />

        {editId && (
          <div className="add-todo">
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              type="text"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        )}
    </div>
  );
}
