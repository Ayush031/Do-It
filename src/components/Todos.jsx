import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const todosRedux = useSelector((state) => state.todos);
  const gridType = useSelector((state) => state.gridType);

  return (
    <>
      <div className={`${gridType && "grid grid-cols-3 gap-7"}`}>
        {todosRedux?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Todos;
