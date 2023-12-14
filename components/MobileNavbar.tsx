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
      {isOpen && (
        <div className="fixed z-20 top-[70px] left-0 bg-slate-900 w-screen min-h-screen">
          {/* Menu List */}
          <ul className="flex flex-col items-center gap-2 font-semibold w-full h-full pt-4 text-xl">
            {links.map((link) => (
              <li className="flex w-full px-5" key={link}>
                <a
                  onClick={handleOpenMenu}
                  className="py-1 uppercase duration-200 ease-linear"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
