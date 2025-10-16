import React from 'react';

export const SealIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g>
            <circle cx="50" cy="50" r="48" fill="#f0f0f0" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M50 5 L53.5 15 L62 12 L62 22 L72 23 L68 31 L78 35 L70 40 L75 50 L65 50 L65 60 L75 60 L70 70 L78 75 L68 79 L72 87 L62 88 L62 98 L53.5 95 L50 105 L46.5 95 L38 98 L38 88 L28 87 L32 79 L22 75 L30 70 L25 60 L35 60 L35 50 L25 50 L30 40 L22 35 L32 31 L28 23 L38 22 L38 12 L46.5 15 Z"
                  fill="currentColor"
                  transform-origin="center"
                  style={{ transform: 'scale(0.85)' }}
            />
            <circle cx="50" cy="50" r="28" fill="#ffffff" stroke="currentColor" strokeWidth="1" />
            <text x="50" y="55" fontFamily="serif" fontSize="10" textAnchor="middle" fill="currentColor">SEAL OF</text>
            <text x="50" y="68" fontFamily="serif" fontSize="10" textAnchor="middle" fill="currentColor">EXCELLENCE</text>
        </g>
    </svg>
);
