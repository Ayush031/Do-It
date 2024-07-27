import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const todosRedux = useSelector((state) => state.todos);

  return (
    <div>
      {todosRedux.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
