import React from "react";
const Section = [
  { id: "000", title: "VivekJha", background: "white", textColor: "black" },
  { id: "001", title: "Hello", background: "#ff3d00", textColor: "white" },
  { id: "010", title: "Flex", background: "#5900cc", textColor: "white" },
  { id: "011", title: "Work", background: "black", textColor: "white" },
  { id: "100", title: "Services", background: "#ff003D", textColor: "white" },
  { id: "101", title: "Process", background: "#ff003D", textColor: "white" },
  { id: "110", title: "Partners", background: "#2835f8", textColor: "white" },
  { id: "111", title: "Contact", background: "#ffff00", textColor: "black" },
  {
    id: "111",
    title: "Unusual index",
    background: "#05ff00",
    textColor: "black",
  },
];
function LeftSection() {
  return (
    <div className="w-2/10 md:h-screen h-1/11 md:p-5 no-scrollbar overflow-x-auto md:overflow-y-auto">
      <div className="flex w-full md:sticky fixed bottom-0 overflow-x-auto md:flex-col flex-row ">
        {Section.map((SectionItem, index) => (
          <div
            key={index}
            style={{
              backgroundColor: SectionItem.background,
              color: SectionItem.textColor,
            }}
            className="lobster md:p-5 md:mb-2 md:mr-0 m-1 rounded-4xl md:h-full "
          >
            <div className="flex md:w-full md:h-full w-40 md:p-0 justify-between p-3 md:flex-col md:gap-10">
              <h2 className="text-sm md:text-lg">{SectionItem.id}</h2>
              <h1 className="text-sm md:text-2xl">{SectionItem.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSection;
