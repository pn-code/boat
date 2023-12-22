import React from "react";
import { ChevronsUp } from "lucide-react";

export default function ScrollUpButton() {
  return (
    <div className="hidden md:flex fixed right-0 bottom-0 p-2 md:m-2">
      <div className="flex items-end gap-4 group">
        <a
          className="p-2 bg-slate-200 group rounded-md hover:bg-blue-900/60 hover:-translate-y-0.5 duration-150 ease-in border-slate-400 border-2"
          href="#main"
        >
          <ChevronsUp className="group-hover:text-slate-200"/>
        </a>
      </div>
    </div>
  );
}
