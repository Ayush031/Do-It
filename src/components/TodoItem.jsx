import React from "react";
import { icons } from "../data";
import { useDispatch } from "react-redux";
import { completeTodo } from "../features/todo/todoReducer";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const handleTodoStatus = (e) => {
    if (e.target.checked) {
      dispatch(completeTodo(props.todo.id));
    }
  };
    

  return (
    <div className="flex justify-between border-t border-t-[2px] py-4">
      <div>
        <input
          className="m-3"
          type="checkbox"
          name="todoStatus"
          id="todoStatus"
          onChange={handleTodoStatus}
        />
        <label htmlFor="todoStatus" className="dark:text-s late-100" >{props.todo.title}</label>
      </div>
      <div className="mr-8">
        <img src={icons.star} />
      </div>
    </div>
  );
};

export default TodoItem;
