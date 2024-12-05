type TodoListItemProps = {
  title: string;
};
const TodoListItem = ({ title }: TodoListItemProps) => {
  return <li className="TodoListItemText">{title}</li>;
};

export type { TodoListItemProps };
export default TodoListItem;
