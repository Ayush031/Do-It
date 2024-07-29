import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar, TodoItemDescription } from "./components";

const App = () => {
  return (
    <div className="text-lightTextColor dark:text-slate-100 dark:bg-darkBgPrimary font-mono">
      <Navbar />
      <section className="flex px-12">
        <aside className="sidebar">
          <SideBar />
        </aside>
        <div className="w-full px-2.5 bg-transparent dark:bg-darkBgPrimary">
          <Outlet />
        </div>
        <div className="min-w-[400px] -mr-12 todoDescription hidden bg-lightSideBarBg dark:bg-darkSideBarBg">
          <TodoItemDescription />
        </div>
      </section>
    </div>
  );
};

export default App;
