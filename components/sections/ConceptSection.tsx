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

        <div className="w-full flex flex-col justify-center items-center mt-8">
          <AnimateOnScrollContainer>
            <p>
              The Hydrogen-Powered RC Boat concept envisions a cutting-edge
              remote-controlled watercraft that operates using hydrogen fuel
              cells as a clean and efficient power source. The design integrates
              advanced technology to harness the potential of hydrogen, a
              renewable energy carrier, for propulsion. The key components
              include a compact hydrogen fuel cell system, lightweight materials
              for the hull, and a sophisticated control system.
            </p>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <p>
              The hydrogen fuel cell system comprises a proton exchange membrane
              (PEM) fuel cell stack, a hydrogen storage tank, and an onboard
              converter to generate electricity. The fuel cell stack efficiently
              converts hydrogen into electrical energy, emitting only water as a
              byproduct. The lightweight hull is constructed from durable and
              eco-friendly materials to enhance buoyancy and speed.
              Additionally, the boat features a streamlined and aerodynamic
              design to optimize energy efficiency.
            </p>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <p>
              The control system is equipped with a user-friendly remote
              interface, allowing enthusiasts to navigate the RC boat with
              precision. Real-time data feedback on hydrogen levels, battery
              status, and performance metrics enhances the user experience.
              Safety measures, including automatic shut-off in the event of
              malfunctions or low hydrogen levels, are integrated to ensure a
              secure and reliable operation.
            </p>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <p>
              This Hydrogen-Powered RC Boat concept not only offers a thrilling
              recreational experience but also promotes environmentally
              conscious practices by showcasing the potential of hydrogen as a
              clean energy solution for marine applications.
            </p>
          </AnimateOnScrollContainer>
        </div>
      </div>
    </>
  );
}
