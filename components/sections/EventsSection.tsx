import React from "react";
import Image from "next/image";
import EventImg1 from "@/public/assets/event_01.jpg";
import EventImg2 from "@/public/assets/event_02.jpg";
import EventImg3 from "@/public/assets/event_03.jpg";
import EventImg4 from "@/public/assets/event_04.jpg";

export default function EventsSection() {
  return (
    <div id="events" className="py-[100px] lg:py-[120px]">
      <header className="text-center">
        <h2>Events Our Team Attended</h2>
      </header>

      <div className="flex flex-col gap-8 md:gap-16 items-center justify-center">
        {/* Individual Image with caption */}
        <div className="flex flex-col text-center items-center mt-8">
          <div className="relative w-full h-[300px] md:w-[900px] md:h-[700px]">
            <Image
              className="object-contain"
              fill
              src={EventImg1}
              alt="Energy and Sustainability Summit"
            />
          </div>
          <span className="text-lg font-semibold mt-2">
            Energy and Sustainability Summit - CSUF - Conference
          </span>
          <span className="font-semibold text-orange-600">October 27th</span>
        </div>

        <div className="flex flex-col text-center items-center">
          <div className="relative w-full h-[300px] md:w-[900px] md:h-[580px]">
            <Image
              className="object-contain"
              fill
              src={EventImg2}
              alt="Students Learn Green Manufacturing Methods for a
        Sustainable Future"
            />
          </div>
          <span className="text-lg font-semibold mt-2 max-w-[700px]">
            CSUF Titan News - Students Learn Green Manufacturing Methods for a
            Sustainable Future - CSUF - News Event
          </span>
          <span className="font-semibold text-orange-600">November 8th</span>
        </div>

        <div className="flex flex-col text-center items-center">
          <div className="relative w-full h-[300px] md:w-[900px] md:h-[700px]">
            <Image
              className="object-contain"
              fill
              src={EventImg3}
              alt="SCCUR Conference"
            />
          </div>
          <span className="text-lg font-semibold mt-2">
            SCCUR Conference - CSUF - Conference
          </span>
          <span className="font-semibold text-orange-600">November 18th</span>
        </div>

        <div className="flex flex-col text-center items-center">
          <div className="relative w-full h-[300px] md:w-[900px] md:h-[630px]">
            <Image
              className="object-contain"
              fill
              src={EventImg4}
              alt="ECS Donors, Advisors, and Scholars Event"
            />
          </div>
          <span className="text-lg font-semibold mt-2 max-w-[700px]">
            ECS Donors, Advisors, and Scholars Event - CSUF - Fundraising Effort
          </span>
          <span className="font-semibold text-orange-600">December 7th</span>
        </div>
      </div>
    </div>
  );
}
