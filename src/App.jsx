import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "./components";
import { useSelector } from "react-redux";

const App = () => {
  // const reduxTodos = useSelector((state) => state.todos);
  // const [todos, setTodos] = useState(reduxTodos);
  // if (todos && todos.length > 0) {
  // }

  

  return (
    <div className=" text-lightTextColor dark:text-slate-100 dark:bg-darkBgPrimary">
      <Navbar />
      <section className="flex px-12">
        <aside>
          <SideBar />
        </aside>
        <div className="w-full pl-12 bg-transparent dark:bg-darkBgPrimary">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default App;
