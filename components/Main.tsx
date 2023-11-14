import React from "react";
import Image from "next/image";
import Boat from "@/public/assets/logo.png";

export default function Main() {
  return (
    <div className="w-full min-h-[30vh] lg:min-h-[72vh] flex flex-col items-center justify-center relative p-2">
      <div className="w-full flex flex-col items-center gap-1">
        <h2 className="lg:text-2xl tracking-wide font-semibold text-orange-600">
          California State University, Fullerton
        </h2>
        <h1 className="text-lg lg:text-5xl font-bold tracking-wide">
          The Hydrogen-Based Boat Project
        </h1>
      </div>
      <p className="text-sm lg:text-[16px] lg:max-w-[600px] text-center mt-2 lg:mt-6 text-slate-800 tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <Image
        className="mt-4 lg:flex lg:absolute -bottom-36 right-16 rounded-full p-4 border-4 border-orange-600 hover:scale-105 duration-200"
        src={Boat}
        alt=""
        height={500}
        width={500}
      />
    </div>
  );
}
