import React from "react";
import IMG from "../assets/VJ.png";

function Section00() {
  return (
    <div className="w-full rounded-3xl overflow-hidden h-full border-1 border-black">
      <div className=" flex justify-between h-2/10 p-5">
        <h1 className="lobster text-3xl ">
          Vivek
          <br /> Jha
        </h1>
        <h1 className="lobster text-3xl ">
          Piece of Paper <br />
          In the Garbage{" "}
        </h1>
      </div>
      <div className="h-8/10 flex justify-center items-center overflow-hidden">
        <img
          src={IMG}
          alt="Decorative"
          className="w-[200%] h-[180%] object-contain rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Section00;
