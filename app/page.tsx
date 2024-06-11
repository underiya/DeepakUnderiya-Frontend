"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/page";
import Charts from "./components/Charts";
import ChartLegends from "./components/ChartLegends";
import Image from "next/image";
import Footer from "./components/Footer";
import Items from "./components/items";
import Tech from "./components/tech";
import Started from "./components/Started";
import Phases from "./components/Phases";
import Table from "./components/Table";

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const itemsArr = [
    "Select an Avatar",
    "Create or Generate Script",
    "Select AI Voice",
    "Publish",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % itemsArr.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [itemsArr.length]);

  const getStarted = () => {
    console.log("Get Started");
  };
  return (
    <>
      <main className=" absolute -top-12 p-0 m-0 pt-12 space-y-4 font-outfit bg-black overflow-hidden">
        <Navbar onClick={getStarted} />
        <section id="feature" className="h-full  bg-black  scroll-mt-16 ">
          <div>
            <Image
              className="absolute top-20 right-0 max-md:opacity-20 "
              src="/image1.png"
              alt="image1"
              width={633}
              height={740}
            />

            <div className="relative top-32 left-44  w-[660px] h-[494.5px] text-white  max-md:text-center">
              <div className=" ">
                <div className="text-base">
                  &#127881; New in AI GEN Real Time Interaction
                </div>
              </div>
              <div className="h-[390.5px] my-4 flex flex-col justify-evenly">
                <div className="space-y-2">
                  <div className="text-5xl font-medium">
                    IOTA polygon serum ipsum WAX teraUSD gala THETHA
                  </div>
                  <div className="text-2xl font-normal">
                    Chiliz serum TRON dash aave cardan crypto celo. Golem anokr
                    bcancer horixon therium bitcoin
                  </div>
                </div>
                <div>
                  <button
                    onClick={getStarted}
                    className="h-16 w-48  bg-gradient-to-l to-[#9E6EE5] from-[#FA75F8] px-2  rounded-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="my-72 "></div>
          <div className="relative z-10">
            <Image
              className=" m-auto animate-bounce-slow "
              src="/image2.png"
              alt="image2"
              width={1086}
              height={556}
            />
            <div className=" animate-disappear absolute z-20 top-56  bg-transparent left-4 w-full  text-center h-32 text-5xl font-normal  text-white  ">
              <span className="font-medium bg-clip-text  text-transparent bg-gradient-to-l from-[#FE9A9B] to-[#FACA6A]">
                Create, customize, and publish{" "}
              </span>{" "}
              your <br /> digital persona to life effectively
            </div>
          </div>

          <div className="flex p-2 mb-8  max-md:flex-col">
            <div className="mb-4 p-4">
              <Image
                src="/girl1.png"
                alt="girl image"
                width={816}
                height={508}
                className="relative  right-20  top-20 rounded-xl max-md:right-0 max-md:left-0"
              />
            </div>

            <div className="mt-16 relative top-8  my-24 mx-24 font-outfit text-white   max-md:mx-8">
              <h1 className="text-[64px] font-semibold">How it works</h1>
              <ul className=" font-outfit text-[48px] font-normal">
                {itemsArr.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        index === highlightedIndex
                          ? "bg-clip-text text-nowrap text-transparent bg-gradient-to-l from-[#9E6EE6] to-[#FCC3FA]"
                          : " text-nowrap text-gray-500"
                      }
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <br />
          <Tech />
          <br />
          <Items />
        </section>
        <br />
        <section id="tokenomics" className="scroll-mt-16  ">
          <div className="mt-12 text-center text-5xl font-normal bg-clip-text text-transparent bg-gradient-to-l from-[#FA75FB] to-[#9E6EE6] ">
            Tokenomics
          </div>
          <br />
          {/* Table  for technomics */}
          <Table />
          <br />
          {/* Charts */}
          <div className="m-auto font-inter flex  justify-center items-center">
            <div className="mx-12 size-[500px] max-md:size-[250px] ">
              <Charts />
            </div>
            <div>
              <ChartLegends />
            </div>
          </div>
        </section>
        <br />

        <section id="roadmap" className="scroll-mt-16 ">
          <Phases />
          <br />
        </section>
        <Started />
        <section className="m-0 p-4">
          <Footer />
        </section>
      </main>
    </>
  );
}
