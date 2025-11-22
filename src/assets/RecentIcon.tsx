import React from "react";

export const RecentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {/* Círculo externo */}
        <circle
            cx="24"
            cy="24"
            r="16"
            stroke="red"
            strokeWidth="2"
        />

        {/* Ponteiro das horas */}
        <line
            x1="24"
            y1="24"
            x2="24"
            y2="14"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
        />

        {/* Ponteiro dos minutos */}
        <line
            x1="24"
            y1="24"
            x2="32"
            y2="24"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);
