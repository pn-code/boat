import React from "react";

export default function CreditsSection() {
  return (
    <div id="credits" className="mt-4 lg:mt-[8%]">
      <header className="text-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold lg:font-bold tracking-wider">
          Our Team
        </h2>
      </header>

      <p className="text-sm md:text-[16px] text-center mt-4 sm:mt-6 lg:mt-10">
        Highlight the team members involved in the project along with their
        roles and contributions. If applicable, acknowledge any collaborating
        organizations or partners.
      </p>
    </div>
  );
}
