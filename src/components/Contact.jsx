import React from "react";

function Contact() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text- text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#ffff00] m-1 h-10 ">
        <p>You are entering to the Contact Section (110)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>110/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#ffff00] m-1 md:h-220 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl lobster">110</p>
        <p className="h-5/7 flex items-end font-bold text-[20vw] lobster">
          Contact
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#ffff00] p-3 lobster ">
          <p className="text-black">(Contact)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/110
          </p>
        </div>
      </div>
      <div className="md:h-130 border-1 p-5 border-black m-1 rounded-3xl">
        <div className="h-1/12 "></div>
        <div className="h-3/12 border-b-1 border-black md:text-9xl p-3 flex justify-Start items-center lobster">
          Let's
        </div>
        <div className="h-3/12 border-b-1 border-black md:text-9xl p-3 flex justify-center items-center lobster">
          Execute Your
        </div>
        <div className="h-3/12 border-b-1 border-black md:text-9xl p-3 flex justify-end items-center lobster">
          Idea
        </div>
        <div className="h-2/12 w-full flex justify-between items-end text-[#ffff00] p-3 lobster ">
          <p className="text-black">(Partners)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/110
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
