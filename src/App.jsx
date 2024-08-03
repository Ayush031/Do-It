import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar, TodoItemDescription } from "./components";

const App = () => {
  return (
    <div className="text-lightTextColor dark:text-slate-100 bg-lightSidebarChild dark:bg-darkBgPrimary font-mono min-h-screen">
      <Navbar />
      <section className="flex px-2 sm:px-4 lg:px-12">
        <aside className="sidebar absolute top-[41.5px] left-3 z-[10] sm:relative sm:top-auto sm:left-auto sm:z-auto">
          <SideBar />
        </aside>
        <div className="flex w-full relative">
          <div className="w-full px-1 sm:px-2.5 bg-transparent dark:bg-darkBgPrimary">
            <Outlet />
          </div>
          <div className="h-[85vh] w-[90vw] xs:w-[240px] lg:w-[400px] sm:-mr-12 todoDescription hidden bg-lightSideBarBg dark:bg-darkSideBarBg absolute top-[25.5px] left-1 z-[10] sm:relative sm:top-auto sm:left-auto sm:z-auto">
            <TodoItemDescription />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
