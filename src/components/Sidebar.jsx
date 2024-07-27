import React from "react";
import { sideBarRouteItems } from "../data";

const Frame = () => {
  return (
    <div className="flex flex-col w-[280px] h-[850px] items-center justify-start gap-[9px] relative bg-[#eef6ef]">
      <div className="relative w-fit [font-family:'Outfit-Medium',Helvetica] font-medium text-[#1a271b] text-[15px] tracking-[0] leading-5 whitespace-nowrap">
        Hey, ABCD
      </div>
      <div className="flex flex-col w-60 items-start relative flex-[0_0_auto]">
        <div className="flex flex-col items-start px-0 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfdfb]">
          {sideBarRouteItems.map((i) => (
            <div
              key={i.title}
              className="flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfdfb] rounded-lg"
            >
              <img className="relative w-6 h-6" alt="Menu" src={i.iconUrl} />
              <div className="relative w-fit [font-family:'Outfit-Medium',Helvetica] font-medium text-[#1a271b] text-[15px] tracking-[0] leading-5 whitespace-nowrap">
                {i.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
export default Frame;
