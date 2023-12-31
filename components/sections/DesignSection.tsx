import React from "react";
import AnimateOnScrollContainer from "../ui/AnimateOnScrollContainer";

export default function DesignSection() {
  return (
    <div id="design">
      <div className="pt-32 pb-20 text-slate-100 bg-gradient-to-b from-[#01142b] to-[#01142b]/90 ">
        <AnimateOnScrollContainer>
          <header className="text-center">
            <h2>Design and Components</h2>
          </header>
        </AnimateOnScrollContainer>

        <div className="flex flex-col items-center justify-center">
          <p>
            The{" "}
            <span className="text-orange-400 font-semibold">
              key components{" "}
            </span>{" "}
            of our design include{" "}
            <span className="italic">
              a compact hydrogen fuel cell system, lightweight materials for the
              hull, and a sophisticated control system.
            </span>
          </p>

          <AnimateOnScrollContainer>
            <p>
              The{" "}
              <span className="text-blue-400 font-semibold">
                hydrogen fuel cell system
              </span>{" "}
              comprises a proton exchange membrane (PEM) fuel cell stack, a
              hydrogen storage tank, and an onboard converter to generate
              electricity.
              <br />
              <br />
              The{" "}
              <span className="text-blue-400 font-semibold">
                fuel cell stack
              </span>{" "}
              efficiently converts hydrogen into electrical energy, emitting
              only water as a byproduct.
              <br />
              <br />
              The{" "}
              <span className="text-blue-400 font-semibold">
                lightweight hull
              </span>{" "}
              is constructed from durable and eco-friendly materials to enhance
              buoyancy and speed. Additionally, the boat features a streamlined
              and aerodynamic design to optimize energy efficiency.
            </p>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <p>
              The{" "}
              <span className="text-blue-400 font-semibold">
                control system
              </span>{" "}
              is equipped with a user-friendly remote interface, allowing
              enthusiasts to navigate the RC boat with precision.
            </p>
          </AnimateOnScrollContainer>
        </div>

        <ul>
          <AnimateOnScrollContainer>
            <li className="mt-8 mb-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>1. Hydrogen Fuel Cell System</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Fuel Cell Stack:{" "}
                      </span>
                      This is the core component that converts hydrogen and
                      oxygen into electricity through an electrochemical
                      process. Polymer electrolyte membrane (PEM) fuel cells are
                      commonly used for mobile applications.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Hydrogen Storage:{" "}
                      </span>
                      You&apos;ll need high-pressure hydrogen storage tanks or a
                      system for storing cryogenic liquid hydrogen on board.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Oxygen Supply (Testing is Required):{" "}
                      </span>
                      The fuel cell requires oxygen, which can be obtained from
                      the air. Ensure proper ventilation and intake for the
                      required amount of oxygen.
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>2. Hydrogen Storage and Handling</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        High-Pressure Hydrogen Tanks:{" "}
                      </span>
                      If you&apos;re using compressed hydrogen gas, you&apos;ll
                      need high-strength, lightweight tanks that can withstand
                      the pressure.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Hydrogen Sensors (Optional):{" "}
                      </span>
                      Install sensors to detect leaks and ensure safety.
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>3. Power Distribution and Control:</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Power Management System:{" "}
                      </span>
                      This system manages the electricity generated by the fuel
                      cell and distributes it to the propulsion system and other
                      onboard systems.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Voltage Regulators and Inverters:{" "}
                      </span>
                      To ensure a stable power supply to the electric motor and
                      other components.
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>4. Electric Propulsion System:</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Electric Motor:{" "}
                      </span>
                      Choose a suitable electric motor for marine applications.
                      Consider factors like power output, efficiency, and size.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Propeller System:{" "}
                      </span>
                      Match the propeller to the motor and boat size for optimal
                      efficiency.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Battery System (Optional):{" "}
                      </span>
                      Include a small battery system to provide additional power
                      during peak loads or for emergency situations.
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>5. Cooling System:</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Fuel Cell Cooling:{" "}
                      </span>
                      Implement a cooling system for the fuel cell stack to
                      maintain optimal operating temperatures.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Electric Motor Cooling:{" "}
                      </span>
                      Ensure the electric motor is properly cooled to prevent
                      overheating.
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>6. Boat Design:</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Hydrodynamic Design:{" "}
                      </span>
                      Consider the boat&apos;s shape and design to optimize
                      hydrodynamics for efficient movement through water
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold tracking-tight text-blue-400">
                        Weight Distribution:{" "}
                      </span>
                      Distribute the weight of the hydrogen storage, fuel cell,
                      and other components to maintain stability
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>7. Infrastructure:</h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Hydrogen Refueling Station:{" "}
                      </span>
                      Consider the availability of hydrogen refueling
                      infrastructure or plan for on-board hydrogen generation
                      (e.g., electrolysis).
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>

          <AnimateOnScrollContainer>
            <li className="my-16">
              <article className="flex flex-col items-center">
                <header>
                  <h3>Other Considerations: </h3>
                </header>
                <ul>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Range and Efficiency:{" "}
                      </span>
                      Evaluate the boat&apos;s range and efficiency based on the
                      hydrogen storage capacity and fuel cell efficiency
                    </p>
                  </li>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Maintenance:{" "}
                      </span>
                      Consider the maintenance requirements for the fuel cell
                      system and other components.
                    </p>
                  </li>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Data Collection:{" "}
                      </span>
                      Incorporate real-time data feedback on hydrogen levels,
                      battery status, and performance metrics enhances the user
                      experience.
                    </p>
                  </li>
                  <li>
                    <p className="mt-5">
                      <span className="font-semibold tracking-tight text-blue-400">
                        Safety Measures:{" "}
                      </span>
                      Integrate an automatic shut-off mechanism to ensure secure and
                      reliable operation, in the event of malfunctions or
                      low hydrogen levels.
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </AnimateOnScrollContainer>
        </ul>
      </div>
    </div>
  );
}
