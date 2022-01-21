function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete">
        <button onClick={() => removeTask(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
