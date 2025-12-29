import React from "react";
import Intro from "./Intro.jsx";
import Hello from "./Hello.jsx";
import Flex from "./Flex.jsx";
import Work from "./Work.jsx";

function RightSection() {
  return (
    <div className="md:w-8/10 md:h-screen h-8/9 md:p-2 overflow-y-auto overflow-x-hidden no-scrollbar p-3 ">
      {" "}
      <Intro />
      <Hello />
      <Flex />
      <Work />
    </div>
  );
}

export default RightSection;
