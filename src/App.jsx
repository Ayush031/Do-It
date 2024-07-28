import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "./components";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

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
