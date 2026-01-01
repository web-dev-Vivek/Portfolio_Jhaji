import React from "react";
import Arrow from "/Arrow.svg";
import IMG1 from "/IMG1.png";
import IMG2 from "/IMG2.png";
import IMG3 from "/IMG3.png";
import IMG4 from "/IMG4.png";

function Partners() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#2835f8] m-1 h-10 ">
        <p>You are entering to the Partners Section (110)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>110/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#2835f8] m-1 md:h-220 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl lobster">110</p>
        <p className="h-5/7 flex items-end font-bold text-[20vw] lobster">
          Partners
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#2835f8] p-3 lobster ">
          <p className="text-white">(Partners)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/110
          </p>
        </div>
      </div>
      <div className="w-full rounded-3xl m-1 md:h-100 p-6 border-1 border-black">
        <h1 className="text-5xl h-1/5 lobster flex justify-center">
          Need More Proofs??
        </h1>
        <div className="relative h-4/5 flex items-center w-full m-2 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-5 bg-gradient-to-r from-[#f4e9e1] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-5 bg-gradient-to-l from-[#f4e9e1] to-transparent" />

          <div className="flex w-max animate-marquee gap-8">
            <img src={IMG1} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG2} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG3} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG4} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG1} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG2} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG3} className="h-40 rounded-2xl w-auto object-cover" />
            <img src={IMG4} className="h-40 rounded-2xl w-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
