import React from "react";

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    stroke="#1A1A1A"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="34" cy="10" r="5" />
    <circle cx="14" cy="24" r="5" />
    <circle cx="34" cy="38" r="5" />
    <path d="M18 26l12 6" />
    <path d="M30 12l-12 6" />
  </svg>
);
