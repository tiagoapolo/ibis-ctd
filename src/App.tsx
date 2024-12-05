import { AddTodoForm } from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useSemiPersistentState from "./hooks/useSemiPersistentState";

function App() {
  const { todoList, setTodoList } = useSemiPersistentState();

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setTodoList} />
      <hr />
      <TodoList todoList={todoList ?? []} />
    </>
  );
}

export default App;
