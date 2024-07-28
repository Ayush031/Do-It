import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "./components";
import { useSelector } from "react-redux";

const App = () => {
  // const reduxTodos = useSelector((state) => state.todos);
  // const [todos, setTodos] = useState(reduxTodos);
  // if (todos && todos.length > 0) {
  // }

  return (
    <>
      <div className="px-12 text-textBlack1 dark:text-slate-100">
        <Navbar />
        <section className="flex gap-x-12">
          <aside>
            <SideBar />
          </aside>
          <div className="w-full">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
