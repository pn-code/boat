import React from "react";
import { ChevronsUp } from "lucide-react";

export default function ScrollUpButton() {
  return (
    <div className="w-full flex justify-center lg:pt-12 pb-8 bg-[#01142b]">
      <div className="flex flex-col items-center gap-4">
        <a
          className="p-4 bg-slate-200 rounded-full hover:bg-blue-300/80 duration-100 ease-in"
          href="#main"
        >
          <ChevronsUp />
        </a>
        <span className="text-xs text-slate-100">Return to the Top</span>
      </div>
    </div>
  );
}
