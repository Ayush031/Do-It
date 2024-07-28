import React from "react";
import { sideBarRouteItems } from "../data";
import { icons } from "../data";
import { NavLink } from "react-router-dom";
// import { PieChart } from "./PieChart";

const Frame = () => {
  return (
    <div className="flex flex-col w-[280px] h-[850px] px-4 items-center justify-start gap-[9px] relative bg-[#eef6ef]">
      <img src={icons.profile} alt="" className="rounded-full" />
      <div className="relative w-fit [font-family:'Outfit-Medium',Helvetica] font-medium text-[#1a271b] text-[15px] tracking-[0] leading-5 whitespace-nowrap">
        Hey, ABCD
      </div>
      <div className="flex flex-col w-full items-start relative flex-[0_0_auto]">
        <div className="flex flex-col items-start px-0 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfdfb]">
          {sideBarRouteItems.map((i) => (
            <div className="w-full">
              <NavLink
                to={i.route}
                key={i.title}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-greenDark/30"
                    : "rounded-lg flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfdfb]"
                }
              >
                <img className="relative w-6 h-6" alt="Menu" src={i.iconUrl} />
                <div className="relative w-fit [font-family:'Outfit-Medium',Helvetica] font-medium text-[#1a271b] text-[15px] tracking-[0] leading-5 whitespace-nowrap">
                  {i.title}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 bg-[#fbfdfb] w-full h-fit">
        <div className="px-4 py-2 flex gap-4 items-center">
          <img src={icons.sum} alt="" />
          <span>Add List</span>
        </div>
      </div>
      <div className="bg-[#fbfdfb] py-2 px-4 w-full">
        <div className="">
          <div className="flex items-center justify-between">
            <h3>Today Tasks</h3>
            <img src={icons.info} />
          </div>
          <h2>11</h2>
        </div>
        <div>
          <div>
            PieChart
          </div>
          <div className="flex gap-5">
            <div className="w-[51.85px] h-[11.30px] flex items-center gap-2">
              <div className="w-1.5 h-1.5  bg-[#3f9142]  rounded-full" />
              <div className="text-black text-[10px] font-normal font-['Inter']">
                Pending
              </div>
            </div>
            <div className="w-[51.85px] h-[11.30px] flex items-center gap-2">
              <div className="w-1.5 h-1.5  bg-[#142e15] rounded-full" />
              <div className="text-black text-[10px] font-normal font-['Inter']">
                Done
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Frame;
