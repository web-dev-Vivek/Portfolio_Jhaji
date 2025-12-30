import React, { useState } from "react";

function Services() {
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

  const services1 = [
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
  const [ActiveID1, setActiveID1] = useState(1);

  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text-white text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#5900cc] m-1 h-10 ">
        <p>You are entering to the Services Section (100)</p>
        <p className="font-bold text-black flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>100/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#5900cc] m-1 md:h-160 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl text-white lobster">
          100
        </p>
        <p className="h-5/7 flex items-end text-white font-bold text-[20vw] lobster">
          Services
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#5900cc] p-3 lobster ">
          <p className="text-white">(Services)</p>
          <p className="text-white">
            <span className="mb-[2px] mr-[3px]">●</span>001/001
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 justify-between rounded-3xl m-1 md:h-100 ">
        <div className="rounded-3xl flex justify-between  p-5 items-center bg-[#5900cc] w-full h-2/6">
          <p className="w-1/7 text-black font-bold">(Clients)</p>
          <p className="w-5/7 text-white text-8xl lobster flex justify-center">
            Services
          </p>
          <p className="w-1/7 text-black  flex justify-end font-bold">
            (Partners)
          </p>
        </div>
        <div className="rounded-3xl flex justify-between p-5  items-center bg-[#5900cc] w-full h-2/6">
          <p className="w-1/7 text-black font-bold">(Clients)</p>
          <p className="w-5/7 text-white text-8xl lobster flex justify-center">
            Provided To
          </p>
          <p className="w-1/7 text-black flex justify-end font-bold">
            (Partners)
          </p>
        </div>
        <div className="rounded-3xl flex justify-between p-5  items-center bg-[#5900cc] w-full h-2/6">
          <p className="w-1/7 text-black font-bold">(Clients)</p>
          <p className="w-5/7 text-white text-8xl lobster flex justify-center">
            Our Partner
          </p>
          <p className="w-1/7 text-black flex justify-end font-bold">
            (Partners)
          </p>
        </div>
      </div>
      <div
        className="flex flex-col rounded-2xl overflow-hidden m-1 mt-5 w-full
                h-auto md:h-140"
      >
        {/* Tabs */}
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

        {/* Content box */}
        <div
          className="w-full border border-black border-t-0 rounded-b-2xl
               p-3 md:p-4
               h-auto md:h-16/18
               text-xl md:text-7xl lobster
               indent-0 md:indent-[45px]"
        >
          {/* Description */}
          <div className="mb-6 md:mb-0">
            {services.find((service) => service.id === ActiveID)?.description}
          </div>

          {/* Button */}
          <div className="flex justify-center md:h-5/10 md:justify-center items-center">
            <button
              className="border border-[#5900cc]
                   text-[#5900cc]
                   rounded-full
                   px-4 py-2
                   text-sm md:text-2xl
                   transform transition-transform duration-500 ease-out
                   hover:bg-black hover:text-white hover:-translate-y-1"
            >
              Book session
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col rounded-2xl overflow-hidden m-1 mt-5 w-full
                h-auto md:h-140"
      >
        {/* Tabs */}
        <div className="flex flex-row h-auto md:h-2/18">
          {services1.map((service1) => (
            <button
              key={service1.id}
              onClick={() => setActiveID1(service1.id)}
              className={`border border-black rounded-t-2xl flex-1 font-bold
          text-sm md:text-lg
          py-2 md:py-0
          ${
            ActiveID1 === service1.id
              ? "border-b-0 text-[#5900cc]"
              : "text-black"
          }`}
            >
              {service1.title}
            </button>
          ))}
        </div>

        {/* Content box */}
        <div
          className="w-full border border-black border-t-0 rounded-b-2xl
               p-3 md:p-4
               h-auto md:h-16/18
               text-xl md:text-7xl lobster
               indent-0 md:indent-[45px]"
        >
          {/* Description */}
          <div className="mb-6 md:mb-0">
            {
              services1.find((service1) => service1.id === ActiveID1)
                ?.description
            }
          </div>

          {/* Button */}
          <div className="flex justify-center md:h-5/10 md:justify-center items-center">
            <button
              className="border border-[#5900cc]
                   text-[#5900cc]
                   rounded-full
                   px-4 py-2
                   text-sm md:text-2xl
                   transform transition-transform duration-500 ease-out
                   hover:bg-black hover:text-white hover:-translate-y-1"
            >
              Book session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
