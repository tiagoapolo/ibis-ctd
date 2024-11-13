import { AddTodoForm } from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm />
      <hr />
      <TodoList />
    </>
  );
}

export default App;
