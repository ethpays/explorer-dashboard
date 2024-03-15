import React from "react";

export default function VerticalDivider({ height = 'h-5' }) {
  return (
    <div className={`w-0.5 ${height} bg-ethpays_white-50 ml-4 mr-4 rounded-full`}></div>
  );
}