import React from "react";

export default function HeroSection() {
  return (
    <div id="hero">
      <div className="w-full min-h-[30vh] lg:min-h-[100vh] md:pb-[300px] flex flex-col items-center relative bg-gradient-to-b from-[#01142b]/[20%] to-[#01142b]">
        <div className="w-full flex flex-col items-center gap-1 z-10 mt-20 md:mt-[16%]">
          <p className="text-center sm:text-xl lg:text-2xl tracking-wide font-semibold text-orange-400">
            California State University, Fullerton
          </p>
          <h1 className="text-lg sm:text-2xl lg:text-5xl font-bold tracking-wide text-white">
            The Hydrogen-Based Boat Project
          </h1>
        </div>
        <p className="text-[16px] max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] text-center mt-2 lg:mt-6 text-slate-200 font-semibold tracking-wide z-10">
          Revolutionizing Water Travel: Innovative Hydrogen-Powered Boat
          Engineering
        </p>
      </div>
    </div>
  );
}
