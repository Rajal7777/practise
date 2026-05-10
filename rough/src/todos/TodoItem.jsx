export default function TodoItem({
  todos,
  handleDelete,
  toggleCompleted,
  handleEdit,
  editId,
}) {
  return (
    <div className="todo-list">
      {todos.length === 0 && <p>No todos yet.</p>}
   
       {todos.length > 0 && (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            {editId === todo.id ? (
              <span className="editing">Editing: </span>
            ) : (
              <span className="todo-text">{todo.text}</span>
            )}
            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
            <div className="todo-actions">
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
