import React from "react";
import { icons } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../features/todo/todoReducer";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const handleTodoStatus = (e) => {
    if (e.target.checked) {
      dispatch(completeTodo(props.todo.id));
    }
  };

  const gridType = useSelector((state) => state.gridType);

  return (
    <div
      className={`flex justify-between items-center gap-x-5 py-4 pr-8;
         ${
        gridType
          ? "border border-[1.5px] border-lightSideBarBg dark:border-darkGreenColor/75"
          : "border-t border-t-[1.5px] border-t-lightSideBarBg dark:border-t-darkGreenColor/75"
      }`}
    >
      <div>
        <input
          className="m-3"
          type="checkbox"
          name="todoStatus"
          id="todoStatus"
          onChange={handleTodoStatus}
        />
        <label
          htmlFor="todoStatus"
          className="text-lightTextColor dark:text-darkTextColor"
        >
          {props.todo.title}
        </label>
      </div>
      <div className="mr-8">
        <img src={icons.star.light} />
      </div>
    </div>
  );
};

export default TodoItem;
