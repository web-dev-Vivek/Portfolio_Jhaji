import React from "react";

function Section01() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#ff3d00] m-1 h-10 ">
        <p>You are entering to the Hello Section (001)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>001/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#ff3d00] m-1 h-160 ">
        <p className="font-bold text-6xl lobster">001</p>
        <p className="font-bold text-[20vw] lobster">Hello</p>
      </div>
      <div className="w-full rounded-3xl bg m-1 h-160 border-1 overflow-hidden border-black">
        <div className="w-full h-full pr-10 pl-10">
          <div className="h-2/7 w-full border-b-1 flex justify-center  text-[11vw] lobster border-black ">
            I
          </div>
          <div className="h-2/7 w-full border-b-1 flex justify-between items-center text-[11vw] lobster border-black ">
            <p className="w-2/7 indent-45 text-xl font-normal">
              I build clean, creative web experiences and evolving into a
              MERN-stack developer with AI-powered features.
            </p>
            <p className="w-3/5 pr-40 flex justify-end text-[#ff3d00]">AM</p>
          </div>
          <div className="h-2/7 text-[#ff3d00] w-full border-b-1 flex justify-start text-[11vw] lobster border-black ">
            Developer
          </div>
          <div className="h-1/7 w-full flex justify-between text-[#ff3d00] p-3 lobster ">
            <p>(Hello)</p>
            <p className="text-black">
              <span className="mb-[2px] mr-[3px]">●</span>001/010
            </p>
          </div>
        </div>
      </div>
      <div className="w-full rounded-3xl bg-[#ff3d00] m-1 h-160 "></div>
      <div className="w-full rounded-3xl bg m-1 h-120 border-1 border-black"></div>
      <div className="w-full rounded-3xl bg-[#ff3d00] m-1 h-120 "></div>
      <div className="w-full rounded-3xl bg m-1 h-120 border-1 border-black"></div>
      <div className="w-full rounded-3xl bg-[#ff3d00] m-1 h-120 "></div>
      <div className="w-full rounded-3xl bg m-1 h-120 border-1 border-black"></div>
      <div className="w-full rounded-3xl bg-[#ff3d00] m-1 h-120 "></div>
    </div>
  );
}

export default Section01;
