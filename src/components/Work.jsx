import React from "react";
import Arrow from "/Arrow.svg";
import IMG1 from "/IMG1.png";
import IMG2 from "/IMG2.png";
import IMG3 from "/IMG3.png";
import IMG4 from "/IMG4.png";
import Peek from "/Peek.jpg";
import Peek1 from "/Peek1.jpg";

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
      <div className="w-full rounded-3xl bg m-1 h-100 relative   flex flex-col gap-2 ">
        <div className="w-full relative h-1/3 group  rounded-3xl overflow-hidden ">
          <div className="w-full h-full flex justify-between items-center p-5 z-90 rounded-3xl md:group-hover:transition-transform ease-out duration-500 absolute bg-black text-white top-0 md:group-hover:-translate-x-30">
            <p className=" text-2xl md:text-5xl lobster">Artistic Wings</p>
            <p className=" text-sm md:text-2xl lobster">Custom presents</p>
            <a
              href="https://theartisticwing.vercel.app/"
              className="flex md:hidden items-center justify-center border-1 border-white bg-black px-2 py-1 rounded-full"
            >
              <img className="w-5 h-5" src={Arrow} alt="" />
            </a>
          </div>
          <div className="w-full h-full z-88 rounded-3xl overflow-hidden md:group-hover:transition-transform ease-out duration-500 absolute top-0 bg-green-600 md:group-hover:-translate-x-20">
            <img src={IMG1} alt="" />
          </div>

          <img
            className="absolute bg-black text-white right-10 rounded-3xl z-87 h-32 rounded-l-none md:group-hover:translate-x-11 md:group-hover:transition-transform ease-out duration-600"
            src={Peek}
            alt=""
          />
        </div>
        <div className="w-full relative h-1/3 group  rounded-3xl overflow-hidden ">
          <div className="w-full h-full flex justify-between items-center p-5 z-90 rounded-3xl md:group-hover:transition-transform ease-out duration-500 absolute bg-black text-white top-0 md:group-hover:-translate-x-30">
            <p className=" text-2xl md:text-5xl lobster">Analytica</p>
            <p className=" text-sm md:text-2xl lobster">Insight Developers</p>
            <a
              href="https://analytica-frontend.vercel.app/"
              className="flex md:hidden items-center justify-center border-1 border-white bg-black px-2 py-1 rounded-full"
            >
              <img className="w-5 h-5" src={Arrow} alt="" />
            </a>
          </div>
          <div className="w-full h-full z-88 rounded-3xl overflow-hidden md:group-hover:transition-transform ease-out duration-500 absolute top-0 bg-green-600 md:group-hover:-translate-x-20">
            <img src={IMG3} alt="" />
          </div>

          <img
            className="absolute bg-black text-white right-10 rounded-2xl z-87 h-32 rounded-l-none md:group-hover:translate-x-11 md:group-hover:transition-transform ease-out duration-600"
            src={Peek}
            alt=""
          />
        </div>
        <div className="w-full relative h-1/3 group  rounded-3xl overflow-hidden ">
          <div className="w-full h-full flex justify-between items-center p-5 z-90 rounded-3xl md:group-hover:transition-transform ease-out duration-500 absolute bg-black text-white top-0 md:group-hover:-translate-x-30">
            <p className=" text-2xl md:text-5xl lobster">Enter</p>
            <p className=" text-sm md:text-2xl lobster">
              Collaboration Platform
            </p>
            <a
              href="https://enter-omega.vercel.app/"
              className="flex md:hidden items-center justify-center border-1 border-white bg-black px-2 py-1 rounded-full"
            >
              <img className="w-5 h-5" src={Arrow} alt="" />
            </a>
          </div>
          <div className="w-full h-full z-88 rounded-3xl overflow-hidden md:group-hover:transition-transform ease-out duration-500 absolute top-0 bg-green-600 md:group-hover:-translate-x-20">
            <img src={IMG4} alt="" />
          </div>

          <img
            className="absolute bg-black text-white right-10 rounded-2xl z-87 h-32 rounded-l-none md:group-hover:translate-x-11 md:group-hover:transition-transform ease-out duration-600"
            src={Peek}
            alt=""
          />
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
