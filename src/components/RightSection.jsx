import React from "react";
import Section00 from "./00.jsx";
import Section01 from "./Section01.jsx";

function RightSection() {
  return (
    <div className="md:w-8/10 md:h-screen h-8/9 md:p-2 overflow-y-auto overflow-x-hidden no-scrollbar p-3 ">
      {" "}
      <Section00 />
      <Section01 />
    </div>
  );
}

export default RightSection;
