"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

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
      <button className="z-24" onClick={handleOpenMenu} type="button">
        <Menu />
      </button>

      {/* Menu Wrapper */}
      {isOpen && (
        <div className="absolute z-12 top-10 bg-slate-900/60 w-screen min-h-[100vh] translate-x-4">
          {/* Menu List */}
          <ul className="flex flex-col gap-6 text-lg font-semibold bg-slate-900 w-[60%] h-screen pt-6 pl-[6%]">
            {links.map((link) => (
              <a
                onClick={handleOpenMenu}
                className="pt-1 uppercase duration-200 ease-linear"
                key={link}
                href={`#${link}`}
              >
                {link}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
