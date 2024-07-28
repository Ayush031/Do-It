import React from "react";
import { icons } from "../data";

function TodoUtility() {
  return (
    <>
      <div className="flex items-center ">
        <div className="text-[#142e15]/60 text-[13px] font-medium font-['Outfit'] leading-none">
          To Do
        </div>
        <span>
          <img src={icons.caretDown.light} alt="" />
        </span>
      </div>
    </>
  );
}

export default TodoUtility;
