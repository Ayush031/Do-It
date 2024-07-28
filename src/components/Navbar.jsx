import React, { useState } from "react";
import { icons } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { changeGridType, changeTheme } from "../features/todo/todoReducer";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [gridType, setGridType] = useState(false);

  const handleColorTheme = () => {
    localStorage.getItem(theme === "dark") || theme === "dark"
      ? dispatch(changeTheme("light"))
      : dispatch(changeTheme("dark"));
    document.body.classList.toggle("dark", theme == "dark");
  };

  const handleAppGrid = () => {
    setGridType(!gridType);
    dispatch(changeGridType(gridType));
  };

  return (
    <div className="h-14 py-3 px-12 bg-[#fbfdfb] dark:bg-darkTheme flex justify-between items-center">
      <div className="justify-start items-center gap-6 flex">
        <div className="w-6 h-6 relative">
          <img src={icons.menu.light} alt="menu" />
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="w-8 h-8 relative">
            <img src={icons.logo.light} alt="logo" />
          </div>
          <div className="text-greenDark text-2xl font-bold font-['Sen'] leading-normal">
            DoIt
          </div>
        </div>
      </div>
      <div className="h-6 justify-end items-center gap-6 flex">
        <div className="w-6 h-6 relative cursor-pointer" onClick={() => {}}>
          <img src={icons.search.light} alt="search" />
        </div>
        <div
          className="w-6 h-6 relative cursor-pointer"
          onClick={handleAppGrid}
        >
          <img src={icons.appGrid.light} alt="app grid" />
        </div>
        <div
          className="w-6 h-6 relative cursor-pointer"
          onClick={handleColorTheme}
        >
          <img src={icons.colorTheme.light} alt="color theme" />
        </div>
      </div>
    </div>
  );
}
