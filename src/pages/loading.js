import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <CircularProgress />
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Loading...</h1>
      </div>
    </div>
  );
}