import React, { useState } from "react";

function Tab2() {
  const services = [
    {
      id: 1,
      description:
        "Data overload and messy charts? I simplify complex workflows into clean, actionable dashboards that actually make sense. Organize and Boom.",
      title: "Dashboard Design",
    },
    {
      id: 2,
      description:
        "Slow speeds and broken links? I code high-performance, SEO-optimized sites that load in a blink and scale forever. Launch and Boom.",
      title: "Website Development",
    },
    {
      id: 3,
      description:
        "Design-to-code gap? I build pixel-perfect, responsive UI using React and Tailwind that looks stunning on every screen. Code and Boom.",
      title: "Frontend Development",
    },
    {
      id: 4,
      description:
        "Security risks and server crashes? I architect rock-solid APIs and secure databases to keep your business running 24/7. Scale and Boom.",
      title: "Backend Development",
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
            className={`border border-black rounded-t-2xl flex-1 font-bold
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
               p-3 md:p-4
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

export default Tab2;
