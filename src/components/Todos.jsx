import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const gridType = useSelector((state) => state.gridType);

  const filteredTodos = (checked) =>
    todos.filter((todo) => todo.checked === checked);

  return (
    <>
      <div className={`${gridType ? "grid grid-cols-3 gap-7" : "space-y-4"}`}>
        <div>
          <h2 className="text-xl font-semibold">Active Todos</h2>
          {filteredTodos(false).map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Completed Todos</h2>
          {filteredTodos(true).map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
