import Image from "next/image";
import React from "react";
import TeamImg from "@/public/assets/team.png";
import FacultyAdvisor from "@/public/assets/faculty_01.png";
import EventImg1 from "@/public/assets/event_01.png";
import EventImg2 from "@/public/assets/event_02.png";
import EventImg3 from "@/public/assets/event_03.png";
import EventImg4 from "@/public/assets/event_04.png";

export default function CreditsSection() {
  return (
    <div id="credits" className="mt-4 lg:mt-[12%] pt-[100px] lg:pt-[200px]">
      <header className="text-center">
        <h2>Our Team</h2>
      </header>

      <div className="flex flex-col items-center mt-4 md:mt-8">
        <Image src={TeamImg} alt="team" />
        <span className="mt-3 font-semibold text-slate-600 text-sm">
          Starting from Left to Right / Top to Bottom :
        </span>
        <p className="font-semibold my-4 px-5 text-[15px]">
          Bryan Garcia, Matt Lindwall, Alex Garcia, Andrea Minero, Jose Reyes,
          Jerry Pratanavanich, Christian Dominquez, Davis Tran, and Bruno Gamboa
        </p>
      </div>

      <h2 className="text-center mt-16 mb-8">Our Faculty Members</h2>

      <div className="flex gap-4 items-center flex-col sm:flex-row sm:justify-center sm:items-start">
        {/* Individual Image with caption */}
        <div className="flex flex-col text-center">
          <Image src={FacultyAdvisor} alt="Faculty Advisor" />
          <span className="text-sm font-semibold mt-2">Faculty Advisor</span>
          <span className="text-sm font-semibold">Name here.</span>
        </div>
      </div>

      <h2 className="text-center mt-16 mb-8">
        Events that Titan Green has Attended
      </h2>

      <div className="flex flex-col gap-8 md:gap-16 items-center justify-center">
        {/* Individual Image with caption */}
        <div className="flex flex-col text-center items-center">
          <Image src={EventImg1} alt="Energy and Sustainability Summit" />
          <span className="font-semibold mt-2">
            Energy and Sustainability Summit - CSUF - Conference
          </span>
          <span className="text-sm font-semibold">October 27th</span>
        </div>

        <div className="flex flex-col text-center items-center">
          <Image
            src={EventImg2}
            alt="Students Learn Green Manufacturing Methods for a
            Sustainable Future"
          />
          <span className="font-semibold mt-2 max-w-[460px]">
            CSUF Titan News - Students Learn Green Manufacturing Methods for a
            Sustainable Future - CSUF - News Event
          </span>
          <span className="text-sm font-semibold">November 8th</span>
        </div>

        <div className="flex flex-col text-center items-center">
          <Image src={EventImg3} alt="SCCUR Conference" />
          <span className="font-semibold mt-2">
            SCCUR Conference - CSUF - Conference
          </span>
          <span className="text-sm font-semibold">November 18th</span>
        </div>

        <div className="flex flex-col text-center items-center">
          <Image
            src={EventImg4}
            alt="ECS Donors, Advisors, and Scholars Event"
          />
          <span className="font-semibold mt-2 max-w-[400px]">
            ECS Donors, Advisors, and Scholars Event - CSUF - Fundraising Effort
          </span>
          <span className="text-sm font-semibold">December 7th</span>
        </div>
      </div>
    </div>
  );
}
