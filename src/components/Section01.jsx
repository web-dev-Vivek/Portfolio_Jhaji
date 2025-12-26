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
      <div className="w-full rounded-3xl bg m-1 h-160 border-1 border-black"></div>
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
