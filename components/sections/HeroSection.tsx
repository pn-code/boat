import React from "react";

export default function HeroSection() {
  return (
    <div id="hero">
      <div className="w-full min-h-[80vh] lg:min-h-[100vh] md:pb-[300px] flex flex-col items-center relative bg-gradient-to-b from-[#01142b]/[30%] to-[#01142b]">
        <div className="w-full flex flex-col items-center gap-4 z-10 mt-24 md:mt-[14%]">
          <p className="text-center text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-orange-400">
            California State University, Fullerton
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white my-0 py-0">
            The Hydrogen-Based Boat
          </h1>
          <p className="text-[16px] md:text-lg max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] text-center text-slate-300 font-semibold tracking-wide z-10 my-2">
            Revolutionizing Water Travel: Innovative Hydrogen-Powered Boat
            Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
