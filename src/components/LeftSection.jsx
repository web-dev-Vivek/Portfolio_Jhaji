import React from "react";
const Section = [
  { id: "000", title: "VivekJha", background: "white", textColor: "black" },
  { id: "001", title: "Hello", background: "#ff3d00", textColor: "white" },
  { id: "010", title: "Approach", background: "#5900cc", textColor: "white" },
  { id: "011", title: "Work", background: "black", textColor: "white" },
  { id: "100", title: "Talent", background: "#2835f8", textColor: "white" },
  { id: "101", title: "Careers", background: "#ff003D", textColor: "white" },
  { id: "110", title: "Contact", background: "#ffff00", textColor: "black" },
  {
    id: "111",
    title: "Unusual index",
    background: "#05ff00",
    textColor: "black",
  },
];
function LeftSection() {
  return (
    <div className="w-2/10 h-screen ">
      {Section.map((SectionItem, index) => (
        <div
          style={{
            backgroundColor: SectionItem.background,
            color: SectionItem.textColor,
          }}
          className="lobster p-5 m-3 rounded-4xl h-2/10 "
          key={index}
        >
          <div className="flex flex-col gap-10">
            <h2>{SectionItem.id}</h2>
            <h1 className="text-2xl">{SectionItem.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeftSection;
