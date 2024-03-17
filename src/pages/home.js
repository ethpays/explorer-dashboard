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
        <div className="w-full 2xl:px-72 lg:px-24 sm:px-12 md:px-12">
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