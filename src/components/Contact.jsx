import React from "react";

function Contact() {
  return (
    <div className="w-full flex flex-col justify-between mt-3">
      <div className="w-full text- text-[10px] md:text-sm rounded-3xl flex justify-between pl-4 pr-4 items-center bg-[#ffff00] m-1 h-10 ">
        <p>You are entering to the Contact Section (110)</p>
        <p className="font-bold flex items-center">
          <span className="mb-[2px] mr-[3px]">●</span> <p>110/000</p>
        </p>
      </div>
      <div className="w-full flex flex-col justify-between p-5 rounded-3xl bg-[#ffff00] m-1 md:h-220 ">
        <p className="h-1/7 font-bold text-2xl md:text-6xl lobster">110</p>
        <p className="h-5/7 flex items-end font-bold text-[20vw] lobster">
          Contact
        </p>
        <div className="h-1/7 w-full flex justify-between items-end text-[#ffff00] p-3 lobster ">
          <p className="text-black">(Contact)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/001
          </p>
        </div>
      </div>
      <div className="md:h-170 border-1 p-5 border-black m-1 rounded-3xl">
        <div className="h-1/12 "></div>
        <div className="h-3/12 border-b-1 border-black md:text-9xl text-5xl p-3 flex justify-Start items-center lobster">
          Let's
        </div>
        <div className="h-3/12 border-b-1 border-black md:text-9xl text-5xl p-3 flex justify-center items-center lobster">
          Execute Your
        </div>
        <div className="h-3/12 border-b-1 border-black md:text-9xl text-5xl p-3 flex justify-end items-center lobster">
          Idea.
        </div>
        <div className="h-2/12 w-full flex justify-between items-end text-[#ffff00] p-3 lobster ">
          <p className="text-black">(Contact)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/010
          </p>
        </div>
      </div>
      <div className="md:h-150 flex-row border-1 p-5 justify-center border-black m-1 rounded-3xl">
        <div className="relative w-full h-9/10 rounded-3xl overflow-hidden border-1 border-black">
          {/* IMAGE */}
          <img
            src="/contact2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center gap-6">
            <a
              href="https://www.linkedin.com/in/vivek-jha-17ba6a306/"
              target="_blank"
              className="w-3/4 flex items-center justify-between border-2 border-dotted border-black
                gap-4 hover:md:w-6/9 bg-white/80 hover:bg-yellow-300/50 transition px-6 py-3 rounded-2xl"
            >
              <img src="/images.png" className="w-10 rounded-full" />
              <span className="lobster  text-sm md:text-xl text-black">
                @Vivek_Jha
              </span>
            </a>

            <a
              href="https://www.instagram.com/vocalist_vivek/"
              target="_blank"
              className="w-3/4 flex items-center justify-between border-2 border-dotted border-black
              gap-4 hover:md:w-6/9 bg-white/80 hover:bg-yellow-300/50 transition px-6 py-3 rounded-2xl"
            >
              <img src="/insta.png" className="w-10 rounded-full" />
              <span className="lobster  text-sm md:text-xl text-black">
                @Vocalist_Vivek
              </span>
            </a>

            <a
              href="https://x.com/web_dev_vivek"
              target="_blank"
              className="w-3/4 flex items-center justify-between border-2 border-dotted border-black
                  gap-4 hover:md:w-6/9 bg-white/80 hover:bg-yellow-300/50 transition px-6 py-3 rounded-2xl"
            >
              <img src="/x.jpg" className="w-10 rounded-full" />
              <span className="lobster  text-sm md:text-xl text-black">
                @Web_Dev_Vivek
              </span>
            </a>
            <a
              href="mailto:progamervivek2020@gmail.com"
              target="_blank"
              className="w-3/4 flex items-center justify-between border-2 border-dotted border-black
                  gap-4 hover:md:w-6/9 bg-white/80 hover:bg-yellow-300/50 transition px-6 py-3 rounded-2xl"
            >
              <img src="/gmail.png" className="w-10 rounded-full" />
              <span className="lobster  text-sm md:text-xl text-black">
                Progamervivek2020@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="h-1/10  w-full flex justify-between items-end text-[#ffff00] p-3 lobster ">
          <p className="text-black">(Contact)</p>
          <p className="text-black">
            <span className="mb-[2px] mr-[3px]">●</span>110/011
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
