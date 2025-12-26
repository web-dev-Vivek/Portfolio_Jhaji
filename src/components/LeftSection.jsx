import React from "react";
const Section = [
  { title: "Jhaji", background: "white" },
  { title: "Hello", background: "#ff3d00" },
  { title: "Approach", background: "#5900cc" },
  { title: "Work", background: "black" },
  { title: "Talent", background: "#2835f8" },
  { title: "Careers", background: "" },
  { title: "Contact", background: "" },
  { title: "Unusual index", background: "" },
];
function LeftSection() {
  return (
    <div className="w-2/10 h-screen ">
      {Section.map((SectionItem, index) => (
        <div
          style={{ backgroundColor: SectionItem.background }}
          className="p-3 m-3 rounded-4xl h-2/10 border-2 border-black"
          key={index}
        >
          {SectionItem.title}
        </div>
      ))}
    </div>
  );
}

export default LeftSection;
