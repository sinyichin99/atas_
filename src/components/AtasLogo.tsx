import React from 'react';

interface AtasLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'teal' | 'white' | 'original';
}

export const AtasLogo: React.FC<AtasLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'teal',
}) => {
  // Cyan color from the uploaded "atas logo square.png"
  const cyanColor = '#00F0FF';
  const subtextColor = theme === 'original' ? '#111111' : theme === 'white' ? '#FFFFFF' : '#FFFFFF';

  const sizeDimensions = {
    sm: { width: 95, height: 42, subSize: 'text-[8px] tracking-[0.3em]' },
    md: { width: 125, height: 56, subSize: 'text-[9.5px] sm:text-[10px] tracking-[0.32em]' },
    lg: { width: 160, height: 72, subSize: 'text-[12px] tracking-[0.34em]' },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Exact Vector Path matching the uploaded atas logo script */}
      <svg
        viewBox="0 0 280 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${sizeDimensions.width}px`, height: 'auto' }}
        className="overflow-visible filter drop-shadow-[0_2px_8px_rgba(0,240,255,0.25)]"
      >
        {/* 't' Crossbar */}
        <path
          d="M 74 42 L 140 42"
          stroke={cyanColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Continuous handwritten script for 'atas' */}
        {/* Letter 'a' */}
        <path
          d="M 56 46 C 42 42, 26 54, 25 70 C 24 86, 38 96, 52 92 C 57 90, 60 84, 60 76 L 60 44 L 60 86 C 60 92, 66 96, 74 94 C 82 91, 92 82, 100 70"
          stroke={cyanColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 't' going down and connecting into 2nd 'a' */}
        <path
          d="M 102 24 L 100 84 C 100 92, 106 96, 115 96 C 124 96, 134 86, 142 74"
          stroke={cyanColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 2nd 'a' */}
        <path
          d="M 166 52 C 152 46, 138 56, 137 70 C 136 85, 148 94, 160 92 C 165 90, 168 84, 168 76 L 168 50 L 168 86 C 168 92, 174 96, 182 94 C 190 91, 200 82, 210 70"
          stroke={cyanColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 's' with dynamic tail flourish */}
        <path
          d="M 216 56 C 224 46, 235 48, 235 56 C 235 66, 222 74, 218 82 C 214 90, 220 96, 228 96 C 238 96, 250 88, 258 76 C 263 70, 266 73, 264 77 C 260 85, 248 97, 232 99"
          stroke={cyanColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* RESTAURANT subtitle with clean geometric uppercase spacing */}
      <span
        className={`font-sans font-semibold uppercase ${sizeDimensions.subSize} tracking-[0.32em] mt-1.5 transition-colors`}
        style={{ color: subtextColor }}
      >
        RESTAURANT
      </span>
    </div>
  );
};
