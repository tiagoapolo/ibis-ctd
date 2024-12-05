import { useEffect, useState } from "react";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState<{ title: string; id: number }[]>();

  const setTodoListHandler = (title: string) => {
    if (!todoList) {
      const firstItem = { title, id: 0 };
      localStorage.setItem("savedTodoList", JSON.stringify([firstItem]));
      return setTodoList([firstItem]);
    }

    const newList = [...todoList, { title, id: todoList.length }];
    localStorage.setItem("savedTodoList", JSON.stringify(newList));
    setTodoList(newList);
  };

  useEffect(() => {
    const savedListString = localStorage.getItem("savedTodoList");
    if (savedListString) {
      try {
        const parsedList = JSON.parse(savedListString);
        setTodoList(parsedList);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return {
    todoList,
    setTodoList: setTodoListHandler,
  };
};

export default useSemiPersistentState;
