import Image from "next/image";
import React from "react";
import LogoImage from "@/public/assets/logo.png";

const links: string[] = [
  "main",
  "concept",
  "design",
  "tech",
  "performance",
  "development",
  "credits",
];

export default function Navbar() {
  return (
    <nav className="w-full z-20 fixed top-0 flex items-center gap-10 md:gap-16 px-4 md:px-8 py-4 bg-slate-900 text-gray-50">
      {/* Logo */}
      <header className="flex gap-2 items-center">
        <Image
          className="rounded-full"
          src={LogoImage}
          alt="boat logo"
          height={36}
          width={36}
        />
        <h1 className="text-sm text-center font-semibold text-blue-400 uppercase tracking-tighter">
          HYDROGEN
          <br />
          BASED BOAT
        </h1>
      </header>

      {/* Navigation Links */}
      <ul className="flex gap-4 md:gap-12 text-[13px] tracking-widest font-semibold py-1.5">
        {links.map((link) => (
          <a
            className="pt-1 uppercase border-b-2 border-transparent hover:border-blue-200 duration-200 ease-linear"
            key={link}
            href={`#${link}`}
          >
            {link}
          </a>
        ))}
      </ul>
    </nav>
  );
}
