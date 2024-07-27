import React from "react";
import { icons } from "../data";

const TodoItem = (props) => {
  return (
    <div className="flex justify-between border-t border-t-[2px] py-4 ">
      <div>
        <input
          className="m-3"
          type="checkbox"
          name="todoStatus"
          id="todoStatus"
        />
        <label htmlFor="todoStatus">{props.todo.title}</label>
      </div>
      <div className="mr-8">
        <img src={icons.star} />
      </div>
    </div>
  );
};

export default TodoItem;
