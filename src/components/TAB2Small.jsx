import React, { useState } from "react";

function TAB2Small() {
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
  const [ActiveID, setActiveID] = useState(0);
  return (
    <div
      className="md:hidden flex flex-col rounded-2xl border-1 border-black overflow-hidden m-1 mt-1 w-full
                h-auto md:h-140"
    >
      <div className="flex flex-col h-auto md:h-2/18">
        {services.map((service) => (
          <>
            <button
              key={service.id}
              onClick={() => setActiveID(service.id)}
              className={` lobster border-t-1 border-black flex-1
          text-xl md:text-lg
          py-2 md:py-0
          ${ActiveID === service.id ? "text-[#5900cc] " : "text-black "}`}
            >
              {service.title}
            </button>
            <div
              className={`w-full rounded-b-2xl
                md:p-4
               h-auto md:h-16/18
               text-xl md:text-7xl lobster
               indent-0 md:indent-[45px]
          ${ActiveID === service.id ? "block p-3" : "hidden"}`}
            >
              <div
                className={`mb-6 md:mb-0
          ${ActiveID === service.id ? "block" : "hidden"}`}
              >
                {
                  services.find((service) => service.id === ActiveID)
                    ?.description
                }
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TAB2Small;
