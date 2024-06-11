import Image from "next/image";
import React from "react";

const Phases = () => {
  const h = 503;
  const w = 629;
  return (
    <>
      <div className="mt-16 text-5xl font-normal text-center font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#FA75F8] to-[#9E6EE6]">
        Roadmap
      </div>

      <div className=" text-white">
        {/* Phase 1 */}
        <div className="grid grid-cols-1 justify-items-center items-center  md:grid-cols-2  min-h-screen">
          <div className="m-auto">
            <div className="font-medium text-5xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FACC69] to-[#FA75F8]">
              PHASE 1
            </div>
            <ul className="font-normal p-6 opacity-80 text-lg py-2 w-full max-w-md list-inside">
              <li>Horizen dai dai harmony dogecoin waves nexo.</li>
              <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
              <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
              <li>Serum TRON solana tether holo crypto.</li>
              <li>Flow eCash amp EOS digibyte stellar.</li>
            </ul>
          </div>
          <div className="animate-move  relative left-[105px] rounded-xl max-md:left-0">
            <Image
              src="/phase1.png"
              height={h}
              width={w}
              alt="phase1"
              className=" rounded-xl"
            />
          </div>
        </div>
        {/* Phase 2 */}
        <div className="grid grid-cols-1 justify-items-center items-center  md:grid-cols-2  min-h-screen">
          <div className="m-auto justify-items-center">
            <div className="font-medium text-5xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF91A5] to-[#FA75F8]">
              PHASE 2
            </div>
            <ul className="font-normal p-6 opacity-80 text-lg py-2 w-full max-w-md list-inside">
              <li>
                BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox
                PancakeSwap.
              </li>
              <li>Tether ethereum helium eCash IOTA.</li>
              <li>Litecoin enjin shiba-inu dash audius monero.</li>
              <li>
                Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin
                celsius TRON.
              </li>
              <li>Hive stellar velas flow cardano.</li>
            </ul>
          </div>
          <div className="animate-move  relative left-[74.91px] rounded-2xl max-md:left-0">
            <Image
              src="/phase2.png"
              width={w}
              height={h}
              alt="phase2"
              className="rounded-2xl"
            />
          </div>
        </div>
        {/* Phase 3 */}
        <div className="grid grid-cols-1  justify-items-center items-center   md:grid-cols-2 min-h-screen">
          <div className="m-auto justify-items-center ">
            <div className="font-medium text-5xl pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FA75F8] to-[#9E6EE6]">
              PHASE 3
            </div>
            <ul className="font-normal p-6 opacity-80 text-lg py-2  max-w-md list-inside">
              <li>
                Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.
              </li>
              <li>Waves TRON dogecoin bancor eCash quant secret.</li>
              <li>Celsius crypto bancor nexo litecoin decentraland crypto.</li>
            </ul>
          </div>
          <div className=" animate-move relative left-[107.46px] rounded-xl max-md:left-0">
            <Image
              src="/phase3.png"
              width={w}
              height={h}
              alt="phase3"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Phases;
