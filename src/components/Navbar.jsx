import React from "react";
import { icons, navbarIcons } from "../data";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="h-14 py-3 bg-[#fbfdfb] flex justify-between items-center">
        <div className="justify-start items-center gap-6 flex">
          <div className="w-6 h-6 relative">
            <img src={icons.menu} alt="menu" />
          </div>
          <div className="justify-start items-center gap-1 flex">
            <div className="w-8 h-8 relative">
              <img src={icons.logo} />
            </div>
            <div className="text-[#3f9142] text-2xl font-bold font-['Sen'] leading-normal">
              DoIt
            </div>
          </div>
        </div>
        <div className="h-6 justify-end items-center gap-6 flex">
          {navbarIcons.map((i) => (
            <div className="w-6 h-6 relative" key={i.title}>
              <img key={i.title} src={i.iconUrl} alt={i.title} />
            </div>
          ))}
        </div>
      </div>
    </>
    // <div>
    //   <div className="flex items-center ">
    //     <div className="flex gap-6">
    //       <img src={icons.menu} alt="menu" />
    //       <div className="flex items-center">
    //         <img src={icons.logo} alt="logo" />
    //         <div className="text-greenDark text-2xl font-bold font-['Sen'] leading-normal">
    //           DoIt
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex gap-6 ">
    //       {navbarIcons.map((i) => (
    //         <img key={i.title} src={i.iconUrl} alt={i.title} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
