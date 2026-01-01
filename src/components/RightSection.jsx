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
    <div className="md:w-8/10 md:h-screen h-10/11 md:p-2 overflow-y-auto overflow-x-hidden no-scrollbar p-3 ">
      {" "}
      <Intro />
      <Hello />
      <Flex />
      <Work />
      <Service />
      <Process />
      {/* <Partners /> */}
      <Contact />
    </div>
  );
}

export default RightSection;
