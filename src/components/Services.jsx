import React, { useState } from "react";
import TAB1 from "./Tab1.jsx";
import TAB1Small from "./TAB1Small.jsx";
import TAB2 from "./Tab2.jsx";
import TAB2Small from "./TAB2Small.jsx";

function Services() {
  const List = ["Services", "Provided To", "Our Partners"];
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#5900cc] m-1 h-10 ">
        <p>You are entering to the Services Section (100)</p>
        <p className="font-bold text-black flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>100/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#5900cc] m-1 md:h-160 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl text-white lobster">
          100
        </p>
        <p className="h-5/7 flex items-end text-white font-bold text-[20vw] lobster">
          Services
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#5900cc] p-3 lobster ">
          <p className="text-white">(Services)</p>
          <p className="text-white">
            <span className="mb-[2px] mr-[3px]">●</span>100/001
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 justify-between rounded-3xl m-1 md:h-100 ">
        {List.map((list, index) => (
          <div className="rounded-3xl flex justify-between p-5 items-center bg-[#5900cc] w-full h-2/6">
            <p className="w-1/7 text-black text-[10px] md:text-2xl md:font-bold">
              (Clients)
            </p>
            <p
              key={index}
              className="w-5/7 text-white text-3xl md:text-8xl lobster flex justify-center"
            >
              {list}
            </p>
            <p className="w-1/7 text-black text-[10px] md:text-2xl flex justify-end md:font-bold">
              (Partners)
            </p>
          </div>
        ))}
      </div>
      <TAB1 />
      <TAB1Small />
      <TAB2 />
      <TAB2Small />
    </div>
  );
}

export default Services;
