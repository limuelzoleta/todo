import React, { SyntheticEvent } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoTask } from "./interfaces/index";

function App() {
  const handleSubmit = (task: TodoTask) => {
    console.log(task);
  };

  return (
    <div title='App' className='App'>
      <TodoForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
