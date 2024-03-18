import React from 'react';
import Logo from '../images/favicon.png'
import { Link } from 'react-router-dom';

export default function FootBar() {
  return (
    <footer className="shadow mt-16 bg-gradient-to-b from-[#000000] to-[#121212]">
      <div class="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
              <Link to={"/"} class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={Logo} class="h-6" alt="EthPays Logo" />
                  <span class="self-center text-xl whitespace-nowrap dark:text-white">EthPays</span>
              </Link>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline">Contact</a>
                  </li>
              </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://ethpays.co" class="hover:underline">Ethpays™</a>. All Rights Reserved.</span>
      </div>
  </footer>
  );
}