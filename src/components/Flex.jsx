import React from "react";

function Section02() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#2835f8] m-1 h-10 ">
        <p>You are entering to the Flex Section (010)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>010/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#2835f8] m-1 md:h-160 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl lobster">010</p>
        <p className="h-5/7 flex items-end font-bold text-[20vw] lobster">
          Flex
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#2835f8] p-3 lobster ">
          <p className="text-white">(Flex)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>010/001
          </p>
        </div>
      </div>

      <div className="w-full rounded-3xl bg m-1 h-100 border-1 overflow-hidden border-black">
        <div className="w-full h-full pr-10 pl-10 ">
          <div className="h-1/7 w-full md:border-b-1 md:flex flex justify-end md:justify-center text-[12vw] lobster border-black "></div>
          <div className="h-4/7 w-full md:border-b-1 flex flex-col md:flex-row justify-evenly md:pt-5 gap-2 md:gap-0 md:pb-5 lobster border-black ">
            <div className="md:w-3/13 h-full md:block flex items-center justify-between mr-4 md:border-r-1 border-b-1 md:border-b-0 border-black ">
              <div className="h-3/4 text-xl md:text-8xl w-full flex justify-center items-center ">
                <p>6+</p>
              </div>
              <div className="h-1/4 flex justify-center items-center w-full text-2xl">
                <p className="text-[#2835f8]">Happy clients</p>{" "}
              </div>
            </div>
            <div className="md:w-3/13 h-full md:block flex items-center justify-between mr-4 md:border-r-1 border-b-1 md:border-b-0 border-black ">
              <div className="h-3/4 text-xl md:text-8xl w-full flex justify-center items-center ">
                <p>1+</p>
              </div>
              <div className="h-1/4 flex justify-center items-center w-full text-2xl">
                <p className="text-[#2835f8]">Year's experiences</p>{" "}
              </div>
            </div>
            <div className="md:w-3/13 h-full md:block flex items-center justify-between mr-4 md:border-r-1 border-b-1 md:border-b-0 border-black ">
              <div className="h-3/4 text-xl md:text-8xl w-full flex justify-center items-center ">
                <p>10+</p>
              </div>
              <div className="h-1/4 flex justify-center items-center w-full text-2xl">
                <p className="text-[#2835f8]">Projects delivered</p>{" "}
              </div>
            </div>
            <div className="md:w-3/13 h-full md:block flex items-center justify-between mr-4 ">
              <div className="h-3/4 text-xl md:text-8xl w-full flex justify-center items-center ">
                <p>5k+</p>
              </div>
              <div className="h-1/4 flex justify-center items-center w-full text-2xl">
                <p className="text-[#2835f8]">Peoples use my product</p>{" "}
              </div>
            </div>
          </div>
          <div className="h-1/7 text-[#2835f8] w-full border-b-1 md:border-b-0 flex justify-start text-[12vw] lobster border-black "></div>
          <div className="h-1/7 w-full flex justify-between items-center text-[#2835f8] p-3 lobster ">
            <p>(Flex)</p>
            <p className="text-black">
              <span className="mb-[2px] mr-[3px]">●</span>010/010
            </p>
          </div>
        </div>
      </div>
      <div className="w-full rounded-3xl bg m-1 md:h-100 p-5 md:p-10 border-1 overflow-hidden border-black">
        <p className="h-6/8 text-9xl md:text-[20vw] rotate-90 text-[#2835f8] flex justify-center items-center ">
          :)
        </p>
        <div className="h-1/8 text-[#2835f8] w-full border-b-1 md:border-b-0 flex justify-start text-[12vw] lobster border-black "></div>
        <div className="h-1/8 w-full flex justify-between items-center text-[#2835f8] p-3 lobster ">
          <p>(Flex)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>010/011
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section02;
