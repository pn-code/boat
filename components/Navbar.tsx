import Link from "next/link";
import React from "react";

const links: string[] = ["main", "about", "features", "more"];

export default function Navbar() {
  return (
    <nav className="flex items-center gap-10 md:gap-16 md:px-8 md:py-4 bg-slate-900 text-gray-50">
      {/* Logo */}
      <header>
        <h1 className="text-xl font-semibold text-blue-400">LOGO</h1>
      </header>

      {/* Navigation Links */}
      <ul className="flex gap-4 md:gap-12 text-[13px] tracking-widest font-semibold py-1.5">
        {links.map((link) => (
          <a className="pt-1 uppercase border-b-2 border-transparent hover:border-blue-200 duration-200 ease-linear" key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </ul>
    </nav>
  );
}
