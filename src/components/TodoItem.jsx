import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../features/todo/todoReducer";
import { icons } from "../data";

const TodoItem = (props) => {
  const [starFilled, setStarFilled] = useState(false);

  const dispatch = useDispatch();
  const gridType = useSelector((state) => state.gridType);
  const theme = useSelector((state) => state.theme);

  const handleTodoStatus = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  return (
    <div
      className={`flex justify-between items-center gap-x-5 py-4 pr-8 ${
        props.todo.checked ? "bg-gray-200 dark:bg-gray-800" : ""
      } ${
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
          id={`todoStatus-${props.todo.id}`}
          checked={props.todo.checked}
          onChange={handleTodoStatus}
        />
        <label
          htmlFor={`todoStatus-${props.todo.id}`}
          className={`text-lightTextColor dark:text-darkTextColor ${
            props.todo.checked ? "line-through" : ""
          }`}
        >
          {props.todo.title}
        </label>
      </div>
      <div
        className="mr-8"
        onClick={() => {
          setStarFilled(!starFilled);
        }}
      >
        <img
          src={
            starFilled
              ? theme === "dark"
                ? icons.star.filled.dark
                : icons.star.filled.light
              : theme === "dark"
              ? icons.star.outline.dark
              : icons.star.outline.light
          }
          alt="priority"
        />
      </div>
    </div>
  );
};

export default TodoItem;
