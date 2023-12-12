import React from "react";

export default function HowSection() {
  return (
    <div id="how" className="py-[100px] lg:py-[200px] bg-[#0d3057] text-white">
      <header className="text-center">
        <h2>How Does It Work?</h2>
      </header>

      <div className="flex flex-col items-center">
        <p>
          Our boat design integrates an electrolysis setup to produce green
          hydrogen, utilizing a cutting-edge PEM (Proton Exchange Membrane)
          electrolyzer system.
        </p>

        <ul>
          <li className="my-16">
            <article className="flex flex-col items-center">
              <header>
                <h3>1. Electrolysis Setup: </h3>
              </header>
              <ul>
                <li>
                  <p className="mt-5">
                    <span className="font-semibold tracking-wide">
                      Electrolyzer:{" "}
                    </span>
                    The core component is the electrolyzer, which consists of
                    two electrodes (anode and cathode) separated by a solid
                    electrolyte membrane. The membrane is typically made of a
                    proton-conducting polymer, hence the name PEM electrolysis.
                  </p>
                </li>
              </ul>
            </article>
          </li>
          <li className="my-16">
            <article className="flex flex-col items-center">
              <header>
                <h3>2. Electrochemical Reactions: </h3>
              </header>
              <ul>
                <li>
                  <p className="mt-5">
                    <span className="font-semibold tracking-wide">
                      Anode Reaction:{" "}
                    </span>
                    At the anode (negative electrode), water (H₂O) is oxidized
                    into oxygen gas (O₂), releasing electrons and protons.
                  </p>
                </li>
                <li>
                  <p className="mt-5">
                    <span className="font-semibold tracking-wide">
                      Cathode Reaction:{" "}
                    </span>
                    At the cathode (positive electrode), protons (H⁺) and
                    electrons combine to form hydrogen gas (H₂).
                  </p>
                </li>
              </ul>
            </article>
          </li>

          <li className="my-16">
            <article className="flex flex-col items-center">
              <header>
                <h3>3. Proton Exchange Membrane:</h3>
              </header>
              <ul>
                <li>
                  <p className="mt-5">
                    The
                    <span className="font-semibold tracking-wide"> PEM </span>
                    plays a crucial role in this process. It allows only protons
                    (H⁺) to pass through while blocking the passage of
                    electrons. This separation of charge maintains an electric
                    potential across the cell.
                  </p>
                </li>
              </ul>
            </article>
          </li>
          <li className="my-16">
            <article className="flex flex-col items-center">
              <header>
                <h3>4. Electrical Energy Input:</h3>
              </header>
              <ul>
                <li>
                  <p className="mt-5">
                    <span className="font-semibold tracking-wide">
                      An external power source{" "}
                    </span>
                    (usually a DC power supply) provides the necessary
                    electrical energy to drive the electrolysis reactions.
                  </p>
                </li>
              </ul>
            </article>
          </li>
          <li className="my-16">
            <article className="flex flex-col items-center">
              <header>
                <h3>5. Hydrogen and Oxygen Production: </h3>
              </header>
              <ul>
                <li>
                  <p className="mt-5">
                    <span className="font-semibold tracking-wide">
                      Hydrogen gas{" "}
                    </span>
                    is produced at the cathode, and{" "}
                    <span className="font-semibold tracking-wide">
                      oxygen gas{" "}
                    </span>
                    is produced at the anode.
                  </p>
                </li>
              </ul>
            </article>
          </li>
        </ul>

        <div>
          <h3>Overall Reaction: </h3>
          <p className="mt-6">
            The overall chemical reaction that occurs during PEM (Proton
            Exchange Membrane) electrolysis involves the splitting of water
            molecules (H2O) into hydrogen gas (H2) and oxygen gas (O2). The
            reaction at the anode and cathode can be represented as follows:
          </p>

          <p>
            At the anode (negative electrode): 2H2O(l) → O2(g) + 4H+(aq) + 4e-
          </p>

          <p>At the cathode (positive electrode): 4H+(aq) + 4e- → 2H2(g)</p>

          <p>Overall reaction of PEM electrolysis: 2H2O(l) → 2H2(g) + O2(g)</p>

          <p>
            This reaction demonstrates how water molecules are dissociated into
            hydrogen gas at the cathode and oxygen gas at the anode, facilitated
            by the application of an electric current through the PEM
            electrolyzer system.
          </p>
        </div>

        <div>
          <h3>Key Points: </h3>

          <ul>
            <li>
              <p>
                <span className="font-semibold tracking-wide">
                  Efficiency:{" "}
                </span>
                PEM electrolysis is known for its relatively high efficiency,
                especially at partial loads and rapid response times.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold tracking-wide">
                  High Purity:{" "}
                </span>
                The produced hydrogen is typically of high purity, suitable for
                various applications.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold tracking-wide">
                  Modularity:{" "}
                </span>
                PEM electrolyzers are often designed with modular units,
                allowing for scalability and flexibility in various
                applications.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold tracking-wide">
                  Fast Response:{" "}
                </span>
                PEM electrolyzers can quickly respond to changes in electrical
                demand, making them suitable for intermittent renewable energy
                sources like wind or solar.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
