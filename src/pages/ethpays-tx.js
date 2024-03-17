import React from "react";

import NavBarHero from "../components/NavBarHero";
import TreeMap from "../components/TreeMap";

export default function EthPaysTx() {
  return (
    <div>
      <NavBarHero />
      <div className="flex flex-col items-center mt-12 text-ethpays_white illustration-section-01 w-full">
        <TreeMap />
      </div>
    </div>
  );
}