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

const TodoList = () => {
  return (
    <ul className="todoList">
      {todoList.map(({ title, id }) => (
        <li key={id} className="TodoListItemText">
          {title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
