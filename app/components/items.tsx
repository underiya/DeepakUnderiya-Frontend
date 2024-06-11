import Image from "next/image";

export default function Items() {
  const height = 528;
  const cardWidth = 525;
  const largeCardWidth = 725;
  const cardHeight = 600;

  const cardStyle =
    "bg-[rgb(42,39,42)] rounded-3xl m-0 p-0 flex flex-col items-center ";
  const imageStyle = "rounded-b-3xl hover:animate-disappear";
  return (
    <div className=" text-white font-normal text-4xl font-outfit relative top-[10%] w-full">
      <div className="flex justify-center items-center gap-12 h-[30%] m-0">
        <div className={`${cardStyle} w-[${cardWidth}px] h-[${cardHeight}px]`}>
          <div className="text-center py-3">AI Outfits</div>
          <Image
            src="/shoe.png"
            width={cardWidth}
            height={height}
            alt="shoes"
            className={imageStyle}
          />
        </div>
        <div
          className={`${cardStyle} w-[${largeCardWidth}px] h-[${cardHeight}px]`}
        >
          <div className="text-center py-3">Realistic AI Avatar</div>
          <Image
            src="/girl2.png"
            width={largeCardWidth}
            height={height}
            alt="girl"
            className={imageStyle}
          />
        </div>
      </div>
      <div className="relative top-[20%] my-[3%] flex justify-center items-center gap-12 h-[30%]">
        <div className={cardStyle}>
          <div className="text-center py-3 h-full">
            Generate or Write your Script
          </div>
          <Image
            src="/keyboard.png"
            width={largeCardWidth}
            height={height}
            alt="keyboard"
            className={imageStyle}
          />
        </div>
        <div className={`${cardStyle} w-[${cardWidth}px] h-[${cardHeight}px]`}>
          <div className="text-center py-3">AI-Powered Voice Generator</div>
          <Image
            src="/details.png"
            width={cardWidth}
            height={height}
            alt="details"
            className={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}
