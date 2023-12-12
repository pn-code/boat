import Image from "next/image";
import React from "react";
import LogoImage from "@/public/assets/logo.png";
import MobileNavbar from "./MobileNavbar";

const links: string[] = [
  "main",
  "concept",
  "design",
  "how",
  "performance",
  "development",
  "team",
  "events",
];

export default function Navbar() {
  return (
    <nav className="w-full z-20 fixed top-0 flex justify-center items-center gap-10 md:gap-16 px-4 md:px-8 py-4 bg-slate-900 text-white">
      {/* Logo */}
      {/* <header className="flex gap-2 items-center">
        <h1 className="text-lg text-center text-blue-400 tracking-wider">
          The Hydrogen Boat
        </h1>
      </header> */}

      {/* Navigation Links on Larger Devices*/}
      <ul className="hidden lg:flex justify-center gap-4 md:gap-12 text-[14px] tracking-widest font-semibold py-1.5 text-white">
        {links.map((link) => (
          <a
            className="pt-1 uppercase border-b-2 border-transparent hover:border-orange-500 duration-200 ease-linear"
            key={link}
            href={`#${link}`}
          >
            {link}
          </a>
        ))}
      </ul>

      {/* Mobile View */}
      <MobileNavbar links={links} />
    </nav>
  );
}
