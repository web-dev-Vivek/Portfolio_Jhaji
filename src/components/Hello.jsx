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

      <div className="w-full lobster rounded-3xl bg-[#ff3d00] m-1 overflow-hidden">
        <div className="w-full px-4 md:px-6 py-6 text-white space-y-8">
          {/* Block 1 */}
          <div className="border-b border-black pb-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <p className="text-black border border-black px-3 py-1 rounded-full text-sm md:text-xl">
                000
              </p>
              <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
                Product design should feel
              </p>
            </div>

            <p className="mt-2 text-[5vw] sm:text-[4vw] md:text-[2.5vw] text-center">
              creative, intentional, and driven by
            </p>
            <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
              real user experiences.
            </p>
          </div>

          {/* Block 2 */}
          <div className="border-b border-black pb-4 space-y-2">
            <div className="flex justify-evenly items-center flex-wrap gap-4">
              <p className="text-black border border-black px-3 py-1 rounded-full text-sm md:text-xl">
                001
              </p>
              <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
                Over-optimization kills
              </p>
            </div>

            <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
              originality; meaningful innovation
            </p>
            <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
              comes from experimentation, not playing safe.
            </p>
          </div>

          {/* Block 3 */}
          <div className="border-b border-black pb-4 space-y-2">
            <div className="flex justify-evenly items-center flex-wrap gap-4">
              <p className="text-black border border-black px-3 py-1 rounded-full text-sm md:text-xl">
                010
              </p>
              <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
                When everything looks
              </p>
            </div>

            <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
              the same, creative differentiation
            </p>
            <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw]">
              becomes the strongest advantage.
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-4">
            <p className="text-white">(Hello)</p>
            <p className="text-black">
              <span className="mr-1">●</span>001/011
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
