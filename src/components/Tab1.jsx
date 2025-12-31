import React, { useState } from "react";

function Tab1() {
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
  const [ActiveID, setActiveID] = useState(1);
  return (
    <div
      className="hidden md:flex flex-col rounded-2xl overflow-hidden m-1 mt-5 w-full
                h-auto md:h-140"
    >
      <div className="flex flex-row h-auto md:h-2/18">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveID(service.id)}
            className={`border-1 border-black rounded-t-2xl flex-1 font-bold
          text-sm md:text-lg
          py-2 md:py-0
          ${
            ActiveID === service.id ? "border-b-0 text-[#5900cc]" : "text-black"
          }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div
        className="w-full border border-black border-t-0 rounded-b-2xl
                md:p-4
               h-auto md:h-16/18
               text-xl md:text-7xl lobster
               indent-0 md:indent-[90px]"
      >
        <div className="mb-6 md:mb-0">
          {services.find((service) => service.id === ActiveID)?.description}
        </div>
        <div className="flex justify-center md:h-5/10 md:justify-center items-center">
          <button
            className="border border-[#5900cc]
                   text-[#5900cc]
                   rounded-full
                   px-4 py-2
                   text-sm md:text-2xl
                   transform transition-transform duration-500 ease-out
                   hover:bg-black hover:text-white hover:border-none hover:-translate-y-1"
          >
            Book session
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
