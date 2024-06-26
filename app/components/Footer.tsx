// import "/footer.css";

import Image from "next/image";

const Footer = () => {
  return (
    <div className=" font-outfit text-white  min-h-screen flex flex-col align-bottom justify-end  mb-0 animate-pulse ">
      <div className=" flex flex-col md:flex-row justify-between items-center p-5 md:p-20 md:mt-32 ">
        <div className=" text-3xl md:text-4xl w-full md:w-1/2 leading-loose text-center md:text-left">
          Dash dash terraUSD neo uniswap kadena helium avalanche polymath
          bancor.
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="text-white heading-gradient text-2xl text-center md:text-right">
            Looking for help?
          </div>
          <div
            className={`flex  items-center gap-2 md:gap-4 justify-center md:justify-end`}
          >
            <input
              placeholder="Enter Your Name"
              className="border-2 border-white bg-transparent rounded-lg w-full md:w-96 p-3 md:p-5 text-lg md:h-16 md:text-2xl"
            />
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full md:w-40 h-14 md:h-16 rounded-lg text-white text-lg md:text-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white"></div>
      <footer className="footer-bottom flex justify-between  p-5 md:p-10  mb-0 items-center">
        <h1 className="text-white text-lg md:text-2xl mr-5 md:mr-10">
          A.I <span className="ml-1 md:ml-2">GEN</span>
        </h1>
        <div className="flex gap-2 mb-0 md:gap-4 ">
          <Image src="/Twitter.png" alt="twitter" width={22} height={23} />
          <Image src="/LinkedIn.png" alt="linkedin" width={22} height={23} />
          <Image src="/TikTok.png" alt="music" width={22} height={23} />
          <Image src="/YouTube.png" alt="youtube" width={22} height={23} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
