import React, { useEffect, useState } from "react";
import { icons } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { changeGridType, changeTheme } from "../features/todo/todoReducer";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const gridType = useSelector((state) => state.gridType);
  const [localGridType, setLocalGridType] = useState(gridType);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleSidebarMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
  };

  const handleColorTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
  };

  const handleAppGrid = () => {
    const newGridType = !localGridType;
    setLocalGridType(newGridType);
    dispatch(changeGridType(newGridType));
  };

  return (
    <div className="h-14 py-3 px-12 bg-[#fbfdfb] dark:bg-darkTheme flex justify-between items-center">
      <div className="justify-start items-center gap-6 flex">
        <img
          alt="menu"
          height={24}
          weight={24}
          className="cursor-pointer"
          onClick={handleSidebarMenu}
          src={theme === "dark" ? icons.menu.dark : icons.menu.light}
        />
        <div className="justify-start items-center gap-1 flex">
          <div className="w-8 h-8 relative">
            <img src={icons.logo} alt="logo" />
          </div>
          <div className="text-greenDark text-2xl font-bold leading-normal">
            DoIt
          </div>
        </div>
      </div>
      <div className="h-6 justify-end items-center gap-6 flex">
        {window.innerWidth > 450 && (
          <img
            alt="search"
            height={24}
            weight={24}
            className="cursor-pointer"
            src={theme === "dark" ? icons.search.dark : icons.search.light}
          />
        )}
        {window.innerWidth > 450 && (
          <img
            height={24}
            weight={24}
            className="cursor-pointer"
            onClick={handleAppGrid}
            src={
              localGridType
                ? theme === "dark"
                  ? icons.gridType.appGrid.dark
                  : icons.gridType.appGrid.light
                : theme === "dark"
                ? icons.gridType.list.dark
                : icons.gridType.list.light
            }
            alt="gridType"
          />
        )}
        <img
          height={24}
          weight={24}
          className="cursor-pointer"
          onClick={handleColorTheme}
          src={theme === "dark" ? icons.themeMode.dark : icons.themeMode.light}
          alt="color theme"
        />
      </div>
    </div>
  );
}
