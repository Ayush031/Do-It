import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { icons, sideBarRouteItems } from "../data";

const Frame = () => {
  const theme = useSelector((state) => state.theme);
  const [infoHover, setInfoHover] = useState(false);

  return (
    <div className="sidebar flex flex-col w-[280px] h-[850px] px-4 items-center justify-start gap-[9px] relative bg-lightSideBarBg dark:bg-darkSideBarBg">
      <img
        src={theme === "dark" ? icons.profile : icons.profile}
        className="rounded-full"
      />
      <div className="relative w-fit [font-family:'Outfit-Medium',Helvetica] font-medium text-lightTextColor dark:text-darkTextColor text-[15px] tracking-[0] leading-5 whitespace-nowrap">
        Hey, ABCD
      </div>
      <section className="flex flex-col w-full items-start relative flex-[0_0_auto]">
        <div className="flex flex-col items-start px-0 py-6 relative self-stretch w-full flex-[0_0_auto] bg-lightSidebarChild dark:bg-darkBgSecondary">
          {sideBarRouteItems.map((i) => (
            <div className="w-full" key={i.title}>
              <NavLink
                to={i.route}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] text-lightTextColor bg-greenDark/30 dark:text-darkSidebarItemActiveText dark:bg-darkSidebarItemActiveBg"
                    : "rounded-lg flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] text-lightTextColor bg-lightSidebarChild dark:bg-transparent dark:text-darkTextColor "
                }
              >
                <img
                  className="relative w-6 h-6"
                  alt="Menu"
                  src={theme === "dark" ? i.iconUrl.dark : i.iconUrl.light}
                />
                <div className="relative w-fit [font-family:'Outfit-Medium',Helvetica] font-medium text-[15px] tracking-[0] leading-5 whitespace-nowrap">
                  {i.title}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
      <section className="py-6 bg-lightSidebarChild dark:bg-darkBgSecondary w-full h-fit">
        <div className="px-4 py-2 flex gap-4 items-center">
          <img src={theme === "dark" ? icons.sum.dark : icons.sum.light} />
          <span>Add List</span>
        </div>
      </section>
      <section className="bg-lightSidebarChild dark:bg-darkBgSecondary py-2 px-4 w-full">
        <div className="">
          <div className="flex items-center justify-between">
            <h3>Today Tasks</h3>
            <div
              className="cursor-pointer relative"
              onMouseOver={() => {
                setInfoHover(true);
                console.log("hovered");
              }}
              onMouseLeave={() => setInfoHover(false)}
            >
              <img src={icons.info} />
              {infoHover && (
                <div className="absolute text-[10px] text-lightSideBarBg bg-lightTextColor dark:bg-darkTextColor dark:text-darkGreenColor rounded-md w-24 p-[2px] px-1 -translate-y-[18px] translate-x-5">
                  Info About Tasks
                </div>
              )}
            </div>
          </div>
          <h2 className="text-2xl">11</h2>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <div className="h-40 w-40 rounded-full border"></div>
          <div className="flex gap-5">
            {["Pending", "Done"].map((i) => (
              <div
                key={i}
                className="w-[51.85px] h-[11.30px] flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-greenDark rounded-full" />
                <div className="text-lightTextColor dark:text-darkTextColor text-[10px] font-normal font-mono">
                  {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Frame;
