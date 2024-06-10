"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/page";
import Charts from "./components/Charts";
import ChartLegends from "./components/ChartLegends";
import Image from "next/image";

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const items = [
    "Select an Avatar",
    "Create or Generate Script",
    "Select AI Voice",
    "Publish",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  const getStarted = () => {};
  return (
    <>
      <Navbar onClick={getStarted} />
      <main className=" -mt-20 font-outfit bg-black">
        <section id="feature" className="h-full  bg-black  scroll-mt-16">
          <picture>
            <img
              className="absolute top-2 right-2"
              src="/image1.png"
              alt="image1"
              srcSet=""
            />
          </picture>
          <div className="relative top-32 left-44  w-[660px] h-[494.5px] text-white ">
            <div className="">
              <div className="text-base">
                New in AI GEN Real Time Interaction
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

          <br />
          <div className="mt-72 "></div>
          <picture className="relative z-10">
            <img className=" m-auto" src="/image2.png" alt="" srcSet="" />
            <div className=" absolute z-20 top-56  bg-transparent w-screen left-4   text-center h-32 text-5xl font-normal  text-white">
              <span className="font-medium bg-clip-text  text-transparent bg-gradient-to-l from-[#FE9A9B] to-[#FACA6A]">
                Create, customize, and publish{" "}
              </span>{" "}
              your <br /> digital persona to life effectively
            </div>
          </picture>

          <div className="flex ">
            <picture>
              <img src="/girl.png" alt="girl image" />
            </picture>
            <div className="mt-16  m-24 font-Outfit text-white content-center ">
              <h1 className="text-[64px] font-semibold">How it works</h1>
              <ul className=" font-outfit text-[48px] font-normal">
                {items.map((item, index) => {
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
        </section>

        <section id="tokenomics" className="scroll-mt-16">
          <div className="text-center w-screen text-5xl font-normal bg-clip-text text-transparent bg-gradient-to-l from-[#FA75FB] to-[#9E6EE6] ">
            Tokenomics
          </div>
          <br />
          {/* Table  for technomics */}
          <div className=" ml-12 grid font-inter text-white grid-cols-2 ">
            <div>
              <div className="grid grid-cols-2">
                <div className="font-semibold">Name</div>
                <div className="text-[#FFFFFF] opacity-80">: AI GEN</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold">Total Supply</div>
                <div className="text-[#FFFFFF] opacity-80">: 1B</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold">Contact</div>
                <div className="text-[#FFFFFF] opacity-80">
                  : Lorem ipsum dolor ....
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2">
                <div className="font-semibold">Token Name</div>
                <div className="text-[#FFFFFF] opacity-80">: $AIGEN</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold">Circulating</div>
                <div className="text-[#FFFFFF] opacity-80">: 1B</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold">Chain</div>
                <div className="text-[#FFFFFF] opacity-80">: Ethereum</div>
              </div>
            </div>
          </div>
          <br />
          {/* Charts */}
          <div className="flex font-inter justify-center items-center">
            <div className="size-[500px]">
              <Charts />
            </div>
            <ChartLegends />
          </div>
        </section>
        <br />
        <section id="roadmap" className="scroll-mt-16">
          <div className="py-2 text-5xl font-normal text-center font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#FA75F8] to-[#9E6EE6]">
            Roadmap
          </div>
          <br />
          <br />
          <div className=" space-y-[100px] text-white">
            {/** phase1 */}
            <div className="m-auto grid grid-cols-2  ">
              <div className="m-auto">
                <div className="font-medium text-5xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FACC69] to-[#FA75F8]">
                  PHASE 1
                </div>
                <ul className="font-normal p-6 opacity-80 text-[20px] py-2 w-[528px] h-[224px] list-inside">
                  <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                  <li>
                    Flow horizen waves dash tether zcash waves dash terraUSD.
                  </li>
                  <li>
                    Quant harmony amp cosmos PancakeSwap decentraland decred.
                  </li>
                  <li>Serum TRON solana tether holo crypto.</li>
                  <li>Flow eCash amp EOS digibyte stellar.</li>
                </ul>
              </div>
              <div className="relative left-[105px]  rounded-xl ">
                {/**image */}
                <Image
                  src="/phase1.png"
                  height={503}
                  width={629}
                  alt="phase1"
                />
              </div>
            </div>
            {/** phase2 */}
            <div className="m-auto grid grid-cols-2  ">
              <div className="m-auto">
                <div className="font-medium text-5xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF91A5] to-[#FA75F8]">
                  PHASE 2
                </div>
                <ul className="font-normal p-6 opacity-80 text-[20px] py-2 w-[528px] h-[224px] list-inside">
                  <li>
                    {" "}
                    BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox
                    PancakeSwap.
                  </li>
                  <li>Tether ethereum helium eCash IOTA.</li>
                  <li>Litecoin enjin shiba-inu dash audius monero.</li>
                  <li>
                    {" "}
                    Aave PancakeSwap loopring horizen neo uniswap avalanche
                    litecoin celsius TRON.{" "}
                  </li>
                  <li>Hive stellar velas flow cardano.</li>
                </ul>
              </div>
              <div className="relative left-[74.91px]  rounded-2xl ">
                {/**image */}
                <Image
                  src="/phase2.png"
                  width={629}
                  height={503}
                  alt="phase1"
                />
              </div>
            </div>
            {/** phase3 */}
            <div className="m-auto grid grid-cols-2  ">
              <div className="m-auto">
                <div className="font-medium text-5xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FA75F8] to-[ #9E6EE6]">
                  PHASE 3
                </div>
                <ul className="font-normal p-6 opacity-80 text-[20px] py-2 w-[528px] h-[224px] list-inside">
                  <li>
                    Revain audius bitcoin revain PancakeSwap elrond ipsum
                    ethereum.{" "}
                  </li>
                  <li>Waves TRON dogecoin bancor eCash quant secret.</li>
                  <li>
                    Celsius crypto bancor nexo litecoin decentraland crypto.
                  </li>
                </ul>
              </div>
              <div className="relative left-[107.46px]  rounded-xl ">
                {/**image */}
                <Image
                  src="/phase3.png"
                  height={503}
                  width={629}
                  alt="phase1"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
