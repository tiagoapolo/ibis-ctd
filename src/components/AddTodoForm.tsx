type AddTodoFormProps = {
  onAddTodo: string;
};

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const handleAddTodo = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Form element;
    const titleValue = form.title.value;

    if (!titleValue || titleValue === "") {
      return;
    }

    onAddTodo(titleValue);
    form.title.value = "";
  };

  return (
    <form id="addTodoTitleForm" onSubmit={handleAddTodo}>
      <label htmlFor="addTodoTitle">Title</label>
      <input name="title" id="addTodoTitle" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export { AddTodoForm };
