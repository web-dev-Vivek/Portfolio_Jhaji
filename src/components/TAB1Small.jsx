import React, { useState } from "react";

function TAB1Small() {
  const services = [
    {
      id: 1,
      description:
        "Messy layouts, high bounce rates, and stiff competition? I build sleek, conversion-led sites that turn visitors into fans. Build and Boom.",
      title: "Website Design",
    },
    {
      id: 2,
      description:
        "Clunky flows and confused users? I design thumb-friendly, intuitive interfaces that make navigation effortless. Design, Tap, and Boom.",
      title: "Mobile App Design",
    },
    {
      id: 3,
      description:
        "Forgettable identity in a crowded market? I craft sharp, iconic logos that capture your brand’s soul instantly. Brand and Boom.",
      title: "Logo Design",
    },
    {
      id: 4,
      description:
        "Static designs feeling boring? I add high-end interactions and buttery-smooth animations that bring your site to life. Animate and Boom.",
      title: "Framer Development",
    },
  ];
  const [ActiveID, setActiveID] = useState(0);
  return (
    <div
      className="md:hidden flex flex-col border-1 border-black rounded-2xl overflow-hidden m-1 mb-0 w-full
                h-auto md:h-140"
    >
      {services.map((service) => (
        <div className="flex flex-col h-auto md:h-2/18">
          <button
            key={service.id}
            onClick={() => setActiveID(service.id)}
            className={` lobster flex-1 border-t-1  border-black
          text-xl md:text-lg
          py-2 md:py-0
          ${1 === service.id ? "border-t-0 " : ""}
          ${ActiveID === service.id ? "text-[#5900cc]" : " text-black"}`}
          >
            {service.title}
          </button>
          <div
            className={`w-full rounded-b-2xl
                md:p-4
               h-auto md:h-16/18
               text-3xl md:text-7xl lobster
               indent-0 md:indent-[45px]
          ${ActiveID === service.id ? "block p-3" : "hidden"}`}
          >
            <div
              className={`mb-6 md:mb-0
          ${ActiveID === service.id ? "block" : "hidden"}`}
            >
              {services.find((service) => service.id === ActiveID)?.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TAB1Small;
