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
            <span className="mb-[2px] mr-[3px]">●</span>101/001
          </p>
        </div>
      </div>
      <div className="w-full rounded-3xl m-1 border border-black">
        <div className="w-full rounded-3xl p-4 md:p-6 space-y-6">
          {/* Step */}
          <div className="border-b border-black flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              1. Discovery & Goal Alignment
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              Start by understanding your business goals, target audience, and
              core challenges through stakeholder discussions and deep dives.
            </p>
          </div>

          <div className="border-b border-black flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              2. User Research & Analysis
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              Conduct market research, analyze competitors, and gather insights
              from your users to define personas, pain points, and
              opportunities.
            </p>
          </div>

          <div className="border-b border-black flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              3. Wireframing & User Flows
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              Based on research, I design wireframes and map user flows —
              ensuring each step of the user journey is intuitive and aligned
              with goals.
            </p>
          </div>

          <div className="border-b border-black flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              4. Visual Design & Interaction
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              I craft high-fidelity UI designs with brand-consistent visuals,
              micro-interactions, and accessibility in mind.
            </p>
          </div>

          <div className="border-b border-black flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              5. Implementation & Development
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              I collaborate closely with developers to ensure smooth, accurate
              implementation of the designs.
            </p>
          </div>

          <div className="border-b border-black flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              6. User Testing & Iteration
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              Feedback from real users helps validate decisions and refine
              usability before final handoff.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 py-4">
            <h1 className="lobster text-2xl md:text-3xl">
              7. Clean Handoff & Documentation
            </h1>
            <p className="para md:w-1/2 text-sm md:text-base">
              Final designs are documented with clear assets and annotations so
              developers can implement accurately and efficiently.
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end pt-6">
            <p className="lobster text-[#ff003D]">(Process)</p>
            <p className="text-black">
              <span className="mr-1">●</span>101/010
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
