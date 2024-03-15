import React from 'react';

import NavBarHero from '../components/NavBarHero';
import SearchHero from '../components/SearchHero';

export default function Home() {
  return (
    <div>
      <NavBarHero />
      <div className="flex flex-col items-start mt-12 text-ethpays_white illustration-section-01">
        <SearchHero />
      </div>
    </div>
  )
}