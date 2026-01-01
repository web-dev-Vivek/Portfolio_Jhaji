import React from "react";

function Process() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#ff003D] m-1 h-10 ">
        <p>You are entering to the Process Section (101)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>101/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#ff003D] m-1 md:h-220 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl lobster">101</p>
        <p className="h-5/7 flex items-end font-bold text-[20vw] lobster">
          Process
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#ff003D] p-3 lobster ">
          <p className="text-white">(Process)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>101/101
          </p>
        </div>
      </div>
      <div className="w-full rounded-3xl m-1 md:h-220 p-6 border-1 border-black">
        <div className="h-2/14 border-b border-black flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            1. Discovery & Goal Alignment
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            Start by understanding your business goals, target audience, and
            core challenges through stakeholder discussions and deep dives.
          </p>
        </div>

        <div className="h-2/14 border-b border-black flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            2. User Research & Analysis
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            Conduct market research, analyze competitors, and gather insights
            from your users to define personas, pain points, and opportunities.
          </p>
        </div>

        <div className="h-2/14 border-b border-black flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            3. Wireframing & User Flows
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            Based on research, we design wireframes and map user flows —
            ensuring each step of the user journey is intuitive, purposeful, and
            aligned with your goals.
          </p>
        </div>

        <div className="h-2/14 border-b border-black flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            4. Visual Design & Interaction
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            We craft high-fidelity UI designs with brand-consistent visuals,
            micro-interactions, and accessibility in mind — transforming
            wireframes into delightful experiences.
          </p>
        </div>

        <div className="h-2/14 border-b border-black flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            5. Implementation & Development
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            We work closely with your development team to ensure a smooth
            implementation of the designs, providing all necessary assets,
            specifications, and support throughout the development process.
          </p>
        </div>

        <div className="h-2/14 border-b border-black flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            6. User Testing & Iteration
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            We gather feedback from real users to validate the design, uncover
            usability issues, and iterate for improvement before final handoff.
          </p>
        </div>

        <div className="h-2/14 flex flex-col md:flex-row justify-between items-center p-5 ">
          <h1 className="lobster  md:text-3xl text-2xl h-1/4">
            7. Clean Handoff & Documentation
          </h1>
          <p className="text-md md:w-2/4 h-2/4 para flex justify-center md:justify-start items-center">
            Final designs are organized, documented, and handed off with clear
            guidelines, assets, and annotations — ensuring developers can
            implement everything accurately and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
