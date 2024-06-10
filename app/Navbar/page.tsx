"use client";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  onClick: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  return (
    <nav className="sticky top-0 z-10  w-full p-[16px] bg-transparent backdrop-blur-md text-white ">
      <div className="flex h-[40px]  justify-between  ">
        <div className="flex">
          <div className="px-2 mx-5 text-[25px]">A I . G E N</div>
          <ul className="flex items-center mx-4 px-4 gap-3 ">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="#tokenomics">Tokenomics</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2  m-0 align-middle justify-end">
          <button className=" px-2 text-white bg-[#FFFFFF4D] bg-opacity-30 rounded-[4px]">
            Whitepaper
          </button>
          <button
            onClick={onClick}
            className="  bg-gradient-to-l to-[#9E6EE5] from-[#FA75F8] px-2  rounded-[4px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
