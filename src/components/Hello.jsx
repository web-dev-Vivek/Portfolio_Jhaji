import React from "react";

function Section01() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#ff3d00] m-1 h-10 ">
        <p>You are entering to the Hello Section (001)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>001/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#ff3d00] m-1 md:h-160 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl lobster">001</p>
        <p className="h-5/7 flex items-end font-bold text-[20vw] lobster">
          Hello
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#ff3d00] p-3 lobster ">
          <p className="text-white">(Hello)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>001/001
          </p>
        </div>
      </div>

      <div className="w-full rounded-3xl bg m-1 border border-black overflow-hidden">
        <div className="w-full h-full px-4 md:px-10 py-6">
          {/* I */}
          <div
            className="w-full border-b border-black flex justify-end md:justify-center
                    text-[18vw] sm:text-[14vw] md:text-[10vw] lobster leading-none"
          >
            I
          </div>

          {/* AM Section */}
          <div
            className="w-full border-b border-black flex flex-col md:flex-row
                    justify-between items-center gap-4 py-4"
          >
            <p
              className="w-full md:w-2/5 text-xs sm:text-sm md:text-xl
                    font-normal md:indent-20 lobster text-center md:text-left"
            >
              I build clean, creative web experiences and evolving into a
              MERN-stack developer with AI-powered features.
            </p>

            <p
              className="text-[#ff3d00] text-[18vw] sm:text-[14vw] md:text-[10vw]
                    lobster leading-none"
            >
              AM
            </p>
          </div>

          {/* Developer */}
          <div
            className="w-full border-b border-black flex justify-start
                    text-[#ff3d00] text-[18vw] sm:text-[14vw] md:text-[10vw]
                    lobster leading-none py-2"
          >
            Developer
          </div>

          {/* Footer */}
          <div
            className="w-full flex justify-between items-center text-[#ff3d00]
                    p-3 lobster text-sm md:text-base"
          >
            <p>(Hello)</p>
            <p className="text-black flex items-center">
              <span className="mr-2">●</span>001/010
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lobster rounded-3xl bg-[#ff3d00] m-1 md:h-350 overflow-hidden ">
        <div className="w-full h-full pl-6 pr-6 text-white">
          <div className="h-1/27 w-full text-[5vw]"></div>
          <div className="h-2/27 w-full border-b-1 flex justify-between border-black text-[6vw]">
            <div></div>
            <div className="flex gap-25 mt-5 md:mt-0 items-center">
              <p className="md:text-xl text-sm text-black border-1 border-black md:p-2 p-1 rounded-full">
                000
              </p>
              <p>Product design should feel</p>
            </div>
          </div>
          <div className="h-2/27 w-full border-b-1 flex justify-center  border-black text-[6vw]">
            creative, intentional, and driven by
          </div>
          <div className="h-2/27 w-full flex justify-start  text-[6vw]">
            real user experiences.
          </div>
          <div className="h-2/27 w-full text-[5vw]"></div>
          <div className="h-2/27 w-full mt-5 md:mt-0 border-b-1 flex justify-evenly items-center border-black ">
            <p className="md:text-xl text-sm text-black border-1 border-black md:p-2 p-1 rounded-full">
              001
            </p>
            <p className="text-[6vw] ">Over-optimization kills</p>
          </div>
          <div className="h-2/27 w-full border-b-1 border-black text-[6vw]">
            originality;meaningful innovation
          </div>
          <div className="h-2/27 w-full border-b-1 flex justify-start border-black text-[6vw]">
            comes from experimentation,not
          </div>
          <div className="h-2/27 w-full flex justify-start  text-[6vw]">
            playing safe.
          </div>
          <div className="h-2/27 w-full text-[5vw]"></div>
          <div className="h-2/27 w-full border-b-1 mt-5 md:mt-0 flex justify-evenly items-center border-black ">
            <p className="md:text-xl text-sm text-black border-1 border-black md:p-2 p-1 rounded-full">
              010
            </p>
            <p className="text-[6vw]">When everything looks</p>
          </div>
          <div className="h-2/27 w-full border-b-1 border-black text-[6vw]">
            the same, creative differentiation
          </div>
          <div className="h-2/27 w-full text-[6vw]">
            becomes the strongest advantage.
          </div>
          <div className="h-2/27 w-full flex md:mt-0 mt-5 justify-between text-[#ff3d00] p-3 lobster ">
            <p className="text-white">(Hello)</p>
            <p className="text-black">
              <span className="mb-[2px] mr-[3px]">●</span>001/011
            </p>
          </div>
        </div>
      </div>
      <div className="w-full rounded-3xl bg m-1 md:h-220 p-6 border-1 border-black">
        <div className="text-[6vw] lobster h-1/25"></div>
        <div className=" lobster flex justify-between items-center h-3/25">
          <p className="md:text-3xl flex justify-start">My Mission</p>
          <p className="text-[6vw]">Building</p>
        </div>
        <div className="text-[6vw] flex justify-end items-center lobster h-3/25">
          <span className="text-[#ff3d00]">creative foundations</span>
        </div>
        <div className="text-[6vw] mb-5 md:mb-0 lobster flex justify-end h-1/25 ">
          <div className="text-[6vw] w-4/5 lobster border-b-1 border-black"></div>
        </div>
        <div className="text-[6vw] lobster h-1/25"></div>
        <div className=" lobster flex justify-between items-center h-3/25">
          <p className="md:text-3xl flex justify-start">Challenge</p>
          <p className="text-[6vw]">breaking</p>
        </div>
        <div className="text-[6vw] flex justify-end items-center lobster h-3/25">
          <span className="text-[#ff3d00]">repetitive design&nbsp;</span>{" "}
          thinking
        </div>
        <div className="text-[6vw] mb-5 md:mb-0  lobster flex justify-end h-1/25 ">
          <div className="text-[6vw] w-4/5 lobster border-b-1 border-black"></div>
        </div>
        <div className="text-[6vw] lobster h-1/25"></div>
        <div className=" lobster flex justify-between items-center h-3/25">
          <p className="md:text-3xl flex justify-start">Goal</p>
          <p className="text-[6vw]">
            and shaping&nbsp;<span className="text-[#ff3d00]">AI-powered,</span>
          </p>
        </div>
        <div className="text-[6vw] mb-5 md:mb-0 flex justify-end items-center lobster h-3/25">
          future-ready&nbsp;
          <span className=" text-[#ff3d00]">digital experiences.</span>
        </div>
        <div className="h-2/25 w-full flex justify-between items-end text-[#ff3d00] p-3 lobster ">
          <p>(Hello)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>001/100
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section01;
