type AddTodoFormProps = {
  onAddTodo: string;
};

const AddTodoForm = ({ onAddTodo, onSubmit, onChange }: AddTodoFormProps) => {
  const handleAddTodo = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Form element;
    const inputTitleField = form.title;
    console.log({ first: inputTitleField.value, second: form.details.value });
    onAddTodo(inputTitleField.value);
    inputTitleField.value = "";
  };

  return (
    <form id="addTodoTitleForm" onSubmit={handleAddTodo}>
      <label htmlFor="addTodoTitle">Title</label>
      <input name="title" id="addTodoTitle" type="text" />
      <input name="details" id="addTodoTitle" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export { AddTodoForm };
