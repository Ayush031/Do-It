import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "./components";

const App = () => {
  return (
    <>
      <div className="px-12">
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
