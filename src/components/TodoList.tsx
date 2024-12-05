import { useEffect } from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    title: "Do the laundry!",
    id: 1,
  },
  {
    title: "Create react components!",
    id: 2,
  },
  {
    title: "Take my dog out for a walk!",
    id: 3,
  },
];

type Todo = { title: string; id: number };
type TodoList = Todo[];

const TodoList = ({ todoList }: { todoList: TodoList }) => {
  return (
    <ul className="todoList">
      {todoList.map(({ title, id }) => (
        <TodoListItem key={id} title={title} />
      ))}
    </ul>
  );
};

export default TodoList;
