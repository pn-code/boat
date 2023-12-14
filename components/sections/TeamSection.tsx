import Image from "next/image";
import React from "react";
import TeamImg from "@/public/assets/team.jpg";
import FacultyAdvisor from "@/public/assets/faculty_01.png";

export default function TeamSection() {
  return (
    <div id="team">
      <div className="pt-[60px] md:py-[100px] bg-slate-100">
        <header className="text-center md:mb-16">
          <h2>Meet Our Team</h2>
        </header>

        <div className="flex flex-col items-center mt-4 md:mt-12 mb-12">
          <div className="relative w-full h-[280px] md:w-[900px] md:h-[600px]">
            <Image
              className="object-contain rounded-md"
              src={TeamImg}
              alt="team"
              fill={true}
            />
          </div>

          <p className="text-orange-600 tracking-tight font-semibold py-0 text-left md:text-center w-full">
            Starting from Left to Right / Top to Bottom:
          </p>
          <p className="my-4 tracking-tight font-semibold w-full">
            Bryan Garcia, Matt Lindwall, Alex Garcia, Andrea Minero, Jose Reyes,
            Jerry Pratanavanich, Christian Dominquez, Davis Tran, and Bruno
            Gamboa
          </p>
        </div>

        <h2 className="text-center md:mt-[120px] mt-[60px] mb-8 md:mb-20">Our Faculty Members</h2>
        <div className="flex gap-4 items-center flex-col sm:flex-row sm:justify-center sm:items-start pb-8">
          {/* Individual Image with caption */}
          <div className="flex flex-col text-center">
            <Image
              className="rounded-md"
              src={FacultyAdvisor}
              alt="Faculty Advisor"
            />
            <span className="font-semibold mt-2 text-orange-600">Faculty Advisor</span>
            <span className="font-semibold">Sagil James</span>
          </div>
        </div>
      </div>
    </div>
  );
}
