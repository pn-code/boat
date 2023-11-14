import React from "react";

export default function Main() {
  return (
    <div className="w-full min-h-[60vh] lg:min-h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center gap-1">
        <h2 className="text-lg lg:text-2xl tracking-wide font-semibold text-orange-600">
          California State University, Fullerton
        </h2>
        <h1 className="text-xl lg:text-5xl font-bold tracking-wide">
          The Hydrogen Boat Project
        </h1>
      </div>
      <p className="text-sm lg:text-[16px] lg:max-w-[600px] text-center mt-2 lg:mt-6 text-slate-800 tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
