import React from "react";

export default function OverviewSection() {
  return (
    <div id="concept" className="mt-4 lg:mt-[8%]">
      <header className="text-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold lg:font-bold tracking-wider">
          Concept and Purpose
        </h2>
      </header>

      <p className="text-sm md:text-[16px] text-center mt-4 sm:mt-6 lg:mt-10">
        Briefly introduce the concept and purpose of the hydrogen-based boat.
      </p>

      <p className="text-sm md:text-[16px] text-center mt-4 sm:mt-6 lg:mt-10">
        Include key features, such as sustainability benefits, technological
        innovations, and any unique aspects of the design.
      </p>
    </div>
  );
}
