"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavbarProps {
  links: string[];
}

export default function MobileNavbar({ links }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden relative flex flex-col items-end">
      <button
        aria-label="navigation menu"
        className="z-24"
        onClick={handleOpenMenu}
        type="button"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menu Wrapper */}
      <div
        className={
          isOpen
            ? "fixed z-20 top-[70px] left-0 bg-slate-900 w-full min-h-[calc(100vh-70px)] transition-in"
            : "fixed z-20 top-[70px] left-0 bg-slate-900 w-full min-h-[calc(100vh-70px)] transition-out"
        }
      >
        {/* Menu List */}
        <ul className="flex flex-col gap-2 font-semibold w-full h-full pt-4 text-3xl">
          {links.map((link) => (
            <li className="flex w-full px-7" key={link}>
              <a
                onClick={handleOpenMenu}
                className="py-1 uppercase duration-200 ease-linear hover:text-orange-400 hover:-translate-y-0.5"
                href={`#${link}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
