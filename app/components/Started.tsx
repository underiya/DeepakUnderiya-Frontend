import Image from "next/image";

const Started = () => {
  return (
    <div className="flex mt-10 mb-0 p-4 flex-col justify-center items-center h-[332px]">
      <div className="flex justify-center">
        <Image src="/startImg.png" width={1400} height={332} alt="startImg" />
      </div>
      <div className="flex justify-center w-11/12">
        <button className="w-full min-h-[168px] mx-8 rounded-lg p-[2px] text-white flex justify-evenly items-center font-outfit font-normal text-[80px] bg-gradient-to-r from-[#876ed4] to-[#fa75f8]">
          Get Started
          <Image src="/arrow.png" height={100} width={100} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Started;
