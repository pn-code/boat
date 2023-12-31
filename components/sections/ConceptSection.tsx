import React from "react";
import AnimateOnScrollContainer from "../ui/AnimateOnScrollContainer";

export default function ConceptSection() {
  return (
    <>
      <div
        id="concept"
        className="py-[80px] lg:py-[200px] bg-[#01142b] text-slate-100"
      >
        <AnimateOnScrollContainer>
          <header className="text-center">
            <h2>Concept and Purpose</h2>
          </header>
        </AnimateOnScrollContainer>

        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
          <p className="text-xl md:text-2xl tracking-tight">
            <AnimateOnScrollContainer>
              Envision a cutting-edge remote-controlled watercraft that operates
              using
              <span className="text-orange-400 font-semibold">
                {" "}
                hydrogen fuel cells
              </span>{" "}
              as a
              <span className="text-blue-400 font-semibold">
                {" "}
                clean and efficient power source.
              </span>
            </AnimateOnScrollContainer>
          </p>

          <p className="text-xl md:text-2xl tracking-tight">
            <AnimateOnScrollContainer>
              <span className="text-orange-400 font-semibold">
                By integrating advanced technology
              </span>{" "}
              to harness the potential of hydrogen, a renewable energy carrier,{" "}
              <span className="text-blue-400 font-semibold">
                we can create the capacity for propulsion using renewable
                resources.
              </span>
            </AnimateOnScrollContainer>
          </p>

          <p className="text-xl md:text-2xl tracking-tight">
            <AnimateOnScrollContainer>
              The Hydrogen-Powered RC Boat concept not only offers a{" "}
              <span className="text-orange-400 font-semibold">
                thrilling recreational experience
              </span>{" "}
              but also{" "}
              <span className="text-blue-400 font-semibold">
                promotes environmentally conscious practices
              </span>{" "}
              by showcasing the potential of hydrogen as a clean energy solution
              for marine applications.
            </AnimateOnScrollContainer>
          </p>
        </div>
      </div>
    </>
  );
}
