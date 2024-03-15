import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/favicon.png";

export default function NotFound({ type }) {
  const navigate = useNavigate();
  const errorTitle = type === "crypto-futures" ? "Crypto Pair not found" : "Page not found";
  const errorMessage = type === "crypto-futures" ? "The crypto pair you are looking for doesn't exist." : "The page you are looking for doesn't exist.";
  const redirectUrl = type === "crypto-futures" ? "/trade/BTC-USDT/perpetual" : "/";

  const handleRedirect = () => {
    navigate(redirectUrl);
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
      <div class="flex flex-col items-center max-w-sm mx-auto text-center">
        <p class="p-3 text-sm font-medium text-ethpays_white rounded-full bg-ethpays-50 dark:bg-ethpays">
          <img src={Logo} alt="EthPays" class="w-16 h-16 inline-block" />
        </p>
        <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">{errorTitle}</h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400">{errorMessage}</p>
        <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <button onClick={handleGoBack} class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Go back</span>
          </button>
          <button onClick={handleRedirect} class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
            Take me home
          </button>
        </div>
      </div>
  </div>
  );
}