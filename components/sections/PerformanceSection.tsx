import React from "react";

export default function PerformanceSection() {
  return (
    <div id="performance" className="py-[100px] lg:py-[200px]">
      <header className="text-center">
        <h2>
          Performance Goals
        </h2>
      </header>

      <div className="flex flex-col items-center">
        <ul>
          <li className="mt-8">
            <h3 className="font-semibold tracking-wide">Speed:</h3>
            <p className="mt-4 mb-12">
              The speed of an RC boat is often a key factor. Smaller,
              electric-powered boats may have speeds ranging from 15 to 30 miles
              per hour (24 to 48 km/h), while larger gas-powered or
              nitro-powered boats can achieve higher speeds, sometimes exceeding
              50 miles per hour (80 km/h).
            </p>
          </li>
          <li>
            <h3 className="font-semibold tracking-wide">Run Time: </h3>
            <p className="mt-4 mb-12">
              Electric RC boats usually have run times in the range of 10 to 30
              minutes, depending on the battery capacity and the boat&apos;s speed.
              Gas or nitro boats may have longer run times but may require
              refueling.
            </p>
          </li>
          <li>
            <h3 className="font-semibold tracking-wide">Size and Scale: </h3>
            <p className="mt-4 mb-12">
              RC boats come in various sizes, from small models suitable for
              ponds to larger models for use in lakes or even the open sea. The
              size and scale of the boat can impact its stability, handling, and
              performance.
            </p>
          </li>
          <li>
            <h3 className="font-semibold tracking-wide">Hull Design:</h3>
            <p className="mt-4 mb-12">
              The hull design plays a crucial role in the boat&apos;s performance.
              Different hull types, such as monohull, catamaran, or hydroplane,
              affect stability, maneuverability, and speed.
            </p>
          </li>
          <li>
            <h3 className="font-semibold tracking-wide">
              Remote Control System:{" "}
            </h3>
            <p className="mt-4 mb-12">
              The quality and features of the remote control system can impact
              the boat&apos;s responsiveness and control. Higher-end systems may
              offer more channels, allowing for additional functions like
              variable speed control and servo-operated features.
            </p>
          </li>
        </ul>

        <p className="italic font-semibold">
          Ideally, our boat will be able to meet all the requirements of a
          standard gas-powered boat with an adequate response time.
        </p>
      </div>
    </div>
  );
}
