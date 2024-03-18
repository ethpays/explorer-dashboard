import React from "react";

import NavBarHero from "../components/NavBarHero";
import TreeMap from "../components/TreeMap";
import FootBar from "../components/FootBar"; // Importa il componente FootBar

export default function EthPaysTx() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarHero />
      <div className="flex flex-col items-center mt-12 text-ethpays_white illustration-section-01 w-full flex-grow">
        <TreeMap />
      </div>
      <FootBar /> {/* Aggiungi il componente FootBar */}
    </div>
  );
}