import "./TodoItem.css";

type TodoItemProps = {
  text: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
};

const TodoItem = ({ text, checked, onCheck }: TodoItemProps) => {
  return (
    <div className="TodoItemContainer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onCheck?.(!checked)}
      />
      <div className="TodoItemText">{text}</div>
    </div>
  );
};

export type { TodoItemProps };
export { TodoItem };
