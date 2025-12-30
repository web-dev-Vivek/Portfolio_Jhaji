import React from "react";

function Services() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#ff003D] m-1 h-10 ">
        <p>You are entering to the Services Section (100)</p>
        <p className="font-bold text-black flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>100/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#ff003D] m-1 md:h-160 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl text-white lobster">
          100
        </p>
        <p className="h-5/7 flex items-end text-white font-bold text-[20vw] lobster">
          Services
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#5900cc] p-3 lobster ">
          <p className="text-white">(Services)</p>
          <p className="text-white">
            <span className="mb-[2px] mr-[3px]">●</span>001/001
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 justify-between rounded-3xl m-1 md:h-100 ">
        <div className="rounded-3xl flex justify-between  p-5 items-center bg-[#ff003D] w-full h-2/6">
          <p className="w-1/7 text-black font-bold">(Clients)</p>
          <p className="w-5/7 text-white text-8xl lobster flex justify-center">
            Services
          </p>
          <p className="w-1/7 text-black  flex justify-end font-bold">
            (Partners)
          </p>
        </div>
        <div className="rounded-3xl flex justify-between p-5  items-center bg-[#ff003D] w-full h-2/6">
          <p className="w-1/7 text-black font-bold">(Clients)</p>
          <p className="w-5/7 text-white text-8xl lobster flex justify-center">
            Provided To
          </p>
          <p className="w-1/7 text-black flex justify-end font-bold">
            (Partners)
          </p>
        </div>
        <div className="rounded-3xl flex justify-between p-5  items-center bg-[#ff003D] w-full h-2/6">
          <p className="w-1/7 text-black font-bold">(Clients)</p>
          <p className="w-5/7 text-white text-8xl lobster flex justify-center">
            Our Partner
          </p>
          <p className="w-1/7 text-black flex justify-end font-bold">
            (Partners)
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-3xl overflow-hidden m-1 border-1 border-black mt-5 h-100 w-full">
        <div className="w-full h-2/15 flex flex-row ">
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Website Design
          </div>
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Mobile App Design
          </div>
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Logo Design
          </div>
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Framer devlopment
          </div>
        </div>
        <div className="w-full h-13/15"></div>
      </div>
      <div className="flex flex-col rounded-3xl overflow-hidden m-1 border-1 border-black h-100 w-full">
        <div className="w-full h-2/15 flex flex-row ">
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Dashboard Design
          </div>
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Website Development
          </div>
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Frontend Development
          </div>
          <div className="border-1 border-black flex justify-center items-center font-bold text-lg w-1/4 h-full">
            Backend Development
          </div>
        </div>
        <div className="w-full h-13/15"></div>
      </div>
    </div>
  );
}

export default Services;
