import React from 'react';

import NavBarHero from '../components/NavBarHero';
import SearchHero from '../components/SearchHero';
import BlockHero from '../components/BlockHero-1';
import BlockHero2 from '../components/BlockHero-2';

export default function Home() {
  return (
    <div>
      <NavBarHero />
      <div className="flex flex-col items-start mt-12 text-ethpays_white illustration-section-01 w-full">
        <div className="px-72 w-full">
          <SearchHero />
          <BlockHero/>
          <div className="flex justify-center">
            <BlockHero2/>
          </div>
        </div>
      </div>
    </div>
  )
}