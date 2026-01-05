import React from "react";
import Intro from "./Intro.jsx";
import Hello from "./Hello.jsx";
import Flex from "./Flex.jsx";
import Work from "./Work.jsx";
import Service from "./Services.jsx";
import Process from "./Process.jsx";
import Partners from "./Partners.jsx";
import Contact from "./Contact.jsx";

function RightSection() {
  return (
    <div
      id="right-scroll"
      className="md:w-8/10 md:h-screen overflow-y-auto no-scrollbar p-3"
    >
      <div id="000">
        <Intro />
      </div>
      <div id="001">
        <Hello />
      </div>
      <div id="010">
        <Flex />
      </div>
      <div id="011">
        <Work />
      </div>
      <div id="100">
        <Service />
      </div>
      <div id="101">
        <Process />
      </div>
      <div id="111">
        <Contact />
      </div>
    </div>
  );
}

export default RightSection;
