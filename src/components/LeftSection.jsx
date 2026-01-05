import React from "react";
const Section = [
  { id: "000", title: "VivekJha", background: "white", textColor: "black" },
  { id: "001", title: "Hello", background: "#ff3d00", textColor: "white" },
  { id: "010", title: "Flex", background: "#2835f8", textColor: "white" },
  { id: "011", title: "Work", background: "black", textColor: "white" },
  { id: "100", title: "Services", background: "#5900cc", textColor: "white" },
  { id: "101", title: "Process", background: "#ff003D", textColor: "white" },
  // { id: "110", title: "Partners", background: "#2835f8", textColor: "white" },
  { id: "111", title: "Contact", background: "#ffff00", textColor: "black" },
];
function LeftSection() {
  const scrollToSection = (id) => {
    const container = document.getElementById("right-scroll");
    const target = document.getElementById(id);

    if (!container || !target) return;

    container.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-2/10 z-99 md:z-0 md:h-screen h-1/11 bg-[#f4e9e1] md:p-5 no-scrollbar overflow-x-auto md:overflow-y-auto">
      <div className="flex w-full md:sticky fixed bg-[#f4e9e1] bottom-0 overflow-x-auto md:flex-col flex-row ">
        {Section.map((item) => (
          <div
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer lobster m-1 p-4 rounded-4xl"
            style={{
              backgroundColor: item.background,
              color: item.textColor,
            }}
          >
            <div className="flex md:w-full md:h-full w-40  md:p-0 justify-between md:p-3 md:flex-col md:gap-10">
              <h2>{item.id}</h2>
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSection;
