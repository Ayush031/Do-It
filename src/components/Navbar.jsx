import React from "react";
import { icons } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/todo/todoReducer";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleColorTheme = () => {
    theme === "dark"
      ? dispatch(changeTheme("light"))
      : dispatch(changeTheme("dark"));
    document.body.classList.toggle("dark", theme == "dark");
  };

  return (
    <div className="h-14 py-3 bg-[#fbfdfb] flex justify-between items-center">
      <div className="justify-start items-center gap-6 flex">
        <div className="w-6 h-6 relative">
          <img src={icons.menu} alt="menu" />
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="w-8 h-8 relative">
            <img src={icons.logo} alt="logo" />
          </div>
          <div className="text-[#3f9142] text-2xl font-bold font-['Sen'] leading-normal">
            DoIt
          </div>
        </div>
      </div>
      <div className="h-6 justify-end items-center gap-6 flex">
        <div className="w-6 h-6 relative cursor-pointer" onClick={() => {}}>
          <img src={icons.search} alt="search" />
        </div>
        <div className="w-6 h-6 relative cursor-pointer" onClick={() => {}}>
          <img src={icons.appGrid} alt="app grid" />
        </div>
        <div
          className="w-6 h-6 relative cursor-pointer"
          onClick={handleColorTheme}
        >
          <img src={icons.colorTheme} alt="color theme" />
        </div>
      </div>
    </div>
  );
}
