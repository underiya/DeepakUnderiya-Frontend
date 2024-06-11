"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ onClick }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sticky top-0 z-10  w-full p-4 bg-transparent backdrop-blur-md text-white ">
      <div className="flex h-[40px]  justify-between  ">
        <div className="flex items-center">
          <div className="px-2 mx-5 text-2xl">A I . G E N</div>
          <ul className="hidden md:flex items-center mx-4 px-4 gap-3 ">
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

        <div className="flex gap-2">
          <button className="hidden md:block px-2 text-white bg-[#FFFFFF4D] bg-opacity-30 rounded-[4px]">
            Whitepaper
          </button>
          <button
            onClick={onClick}
            className="hidden md:block bg-gradient-to-l to-[#9E6EE5] from-[#FA75F8] px-2  rounded-[4px]"
          >
            Get Started
          </button>

          {/** hamburger */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 absolute right-0">
          <ul className="flex flex-col  items-start mx-4 gap-2">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="#tokenomics">Tokenomics</Link>
            </li>
            <li>
              <button className="w-full text-left px-2 text-white bg-[#FFFFFF4D] bg-opacity-30 rounded-[4px] mt-2">
                Whitepaper
              </button>
            </li>
            <li>
              <button
                onClick={onClick}
                className="w-full text-left bg-gradient-to-l to-[#9E6EE5] from-[#FA75F8] px-2 rounded-[4px] mt-2"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
