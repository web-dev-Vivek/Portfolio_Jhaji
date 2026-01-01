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
          <p className="text-white">(Contact)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/110
          </p>
        </div>
      </div>
      <div className="md:h-130 "></div>
    </div>
  );
}

export default Contact;
