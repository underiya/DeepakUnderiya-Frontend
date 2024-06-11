const Table = () => {
  return <>
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
  </>;
};

export default Table;
