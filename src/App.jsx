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
        <div className="w-full pl-12 bg-transparent dark:bg-darkBgPrimary">
          <Outlet />
        </div>
        <div className="min-w-[400px] todoDescription hidden bg-darkSidebarItemActiveText/15">
          <TodoItemDescription />
        </div>
      </section>
    </div>
  );
};

export default App;
