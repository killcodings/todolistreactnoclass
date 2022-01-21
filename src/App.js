import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (usrInput) => {
    if (usrInput) {
      const newItem = {
        id: Math.floor(Math.random() * 100) + 1,
        task: usrInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleTogle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  return (
    <div className="App">
      <header>
        <h1>ToDoListReact</h1>
        <h2>Task list {todos.length}</h2>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleTogle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
