import React from "react";

const ChartLegends = () => {
  return (
    <>
      <ul className="space-y-4 text-white text-base  border-white  px-40">
        <li
          className="flex items-center border-2 p-0 h-[63px]
                rounded-l-md"
        >
          <div className="bg-[#BE2C2C] w-6 h-full p-0"></div>
          <span className="pl-4">
            Partnership<span className="pl-12 pr-4"> : 5% tokens</span>
          </span>
        </li>
        <li
          className="flex items-center border-2 p-0 h-[63px]
                rounded-l-md"
        >
          <div className="bg-[#FF8F34] w-6 h-full p-0"></div>
          <span className="pl-4">
            LP Pool<span className="pl-12 pr-4"> : 35% tokens</span>
          </span>
        </li>
        <li
          className="flex items-center border-2 p-0 h-[63px]
                rounded-l-md"
        >
          <div className="bg-[#9934FF] w-6 h-full p-0"></div>
          <span className="pl-4">
            Burned<span className="pl-12 pr-4"> : 30% tokens</span>
          </span>
        </li>

        <li
          className="flex items-center border-2 p-0 h-[63px]
                rounded-l-md"
        >
          <div className="bg-[#028DFD] w-6 h-full p-0"></div>
          <span className="pl-4">
            BNP LP Pool<span className="pl-12 pr-4"> : 30% tokens</span>
          </span>
        </li>
      </ul>
    </>
  );
};

export default ChartLegends;
