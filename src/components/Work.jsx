import React from "react";
import Arrow from "/Arrow.svg";
import IMG1 from "/IMG1.png";
import IMG2 from "/IMG2.png";
import IMG3 from "/IMG3.png";
import IMG4 from "/IMG4.png";

function Work() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-black m-1 h-10 ">
        <p>You are entering to the Work Section (011)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>011/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-black m-1 md:h-160 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl text-white lobster">
          011
        </p>
        <p className="h-5/7 flex items-end text-white font-bold text-[20vw] lobster">
          Work
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#5900cc] p-3 lobster ">
          <p className="text-white">(Work)</p>
          <p className="text-white">
            <span className="mb-[2px] mr-[3px]">●</span>011/001
          </p>
        </div>
      </div>
      <div className="w-full rounded-3xl bg m-1 h-100 overflow-hidden flex flex-col gap-2 ">
        <div className="flex justify-evenly md:p-5 items-center h-1/3 w-full p-2 bg-black text-white rounded-3xl">
          <p className="w-4/7 flex justify-start text-2xl md:text-5xl lobster">
            Artistic wings
          </p>
          <p className="w-2/7 flex justify-end text-[13px] md:text-lg">
            E-commerce platform
          </p>
          <p className="w-1/12 rounded-3xl p-1 border-1 border-white flex group justify-center">
            <img
              src={Arrow}
              alt="arrow"
              className="h-4 w-4 md:group-hover:translate-x-7 group-hover:translate-x-1 transition-transform duration-500 "
            />
          </p>
        </div>
        <div className="flex justify-evenly md:p-5 items-center h-1/3 w-full p-2 bg-black text-white rounded-3xl">
          <p className="w-4/7 flex justify-start text-2xl md:text-5xl lobster">
            HR-51 Cafe
          </p>
          <p className="w-2/7 flex justify-end text-[13px] md:text-lg">
            E-commerce platform
          </p>
          <p className="w-1/12 rounded-3xl p-1 border-1 border-white flex group justify-center">
            <img
              src={Arrow}
              alt="arrow"
              className="h-4 w-4 md:group-hover:translate-x-7 group-hover:translate-x-1 transition-transform duration-500"
            />
          </p>
        </div>
        <div className="flex justify-evenly md:p-5 items-center h-1/3 w-full p-2 bg-black text-white rounded-3xl">
          <p className="w-4/7 flex justify-start text-2xl md:text-5xl lobster">
            Analytica
          </p>
          <p className="w-2/7 flex justify-end text-[13px] md:text-lg">
            Developer comparison platform
          </p>
          <p className="w-1/12 rounded-3xl p-1 border-1 border-white flex group justify-center">
            <img
              src={Arrow}
              alt="arrow"
              className="h-4 w-4 md:group-hover:translate-x-7 group-hover:translate-x-1 transition-transform duration-500"
            />
          </p>
        </div>
      </div>
      <div className="relative w-full m-2 overflow-hidden">
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
  );
}

export default Work;
