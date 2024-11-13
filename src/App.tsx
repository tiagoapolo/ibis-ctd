import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [newTodoItem, setNewTodoItem] = useState("");

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={(title) => setNewTodoItem(title)} />
      <p>{newTodoItem}</p>
      <hr />
      <TodoList />
    </>
  );
}

export default App;
