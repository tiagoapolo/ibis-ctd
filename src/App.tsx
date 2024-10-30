// import "./App.css";
import { useState } from "react";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <TodoItem
        checked={checked}
        onCheck={(updatedCheckValue) => {
          setChecked(updatedCheckValue);
        }}
        text="do my homework"
      />
    </>
  );
}

export default App;
