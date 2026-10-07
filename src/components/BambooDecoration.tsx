import React from 'react';

interface BambooProps {
  position: 'top-left' | 'bottom-right';
  className?: string;
}

export const BambooFoliage: React.FC<BambooProps> = ({ position, className = '' }) => {
  if (position === 'top-left') {
    return (
      <div
        className={`pointer-events-none select-none z-10 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 240 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          {/* Bamboo Stems */}
          <path d="M-10 0 C 30 50, 70 120, 95 200" stroke="#1E3E22" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 -10 C 60 40, 110 100, 140 170" stroke="#254D2B" strokeWidth="2.5" strokeLinecap="round" />

          {/* Bamboo Leaves - Deep Lush Greens matching screenshot */}
          {/* Cluster 1 */}
          <path d="M15 20 Q 55 25, 90 40 Q 60 55, 15 20 Z" fill="#2E5A33" opacity="0.95" />
          <path d="M25 35 Q 75 55, 115 80 Q 75 85, 25 35 Z" fill="#1F4225" />
          <path d="M40 15 Q 85 10, 130 25 Q 90 40, 40 15 Z" fill="#3B6F40" opacity="0.9" />

          {/* Cluster 2 */}
          <path d="M50 65 Q 110 80, 155 110 Q 110 120, 50 65 Z" fill="#2B562F" />
          <path d="M60 85 Q 120 115, 165 155 Q 115 150, 60 85 Z" fill="#1C3C20" opacity="0.95" />
          <path d="M75 50 Q 135 55, 185 80 Q 135 90, 75 50 Z" fill="#36683B" />

          {/* Cluster 3 - Hanging tips */}
          <path d="M85 130 Q 140 165, 175 210 Q 130 200, 85 130 Z" fill="#234927" />
          <path d="M95 160 Q 145 205, 170 255 Q 135 240, 95 160 Z" fill="#19371D" />
          <path d="M105 110 Q 165 130, 210 160 Q 165 170, 105 110 Z" fill="#305F35" opacity="0.9" />

          {/* Outer Highlights */}
          <path d="M120 90 Q 175 100, 220 125 Q 180 135, 120 90 Z" fill="#447D4A" opacity="0.85" />
          <path d="M70 190 Q 110 235, 130 280 Q 105 260, 70 190 Z" fill="#29522D" />
        </svg>
      </div>
    );
  }

  // bottom-right position
  return (
    <div
      className={`pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
      >
        {/* Bamboo Stems */}
        <path d="M250 250 C 200 200, 150 140, 110 90" stroke="#1E3E22" strokeWidth="3" strokeLinecap="round" />
        
        {/* Bamboo Leaves pointing inwards */}
        <path d="M220 220 Q 170 190, 120 170 Q 160 160, 220 220 Z" fill="#2B562F" />
        <path d="M200 240 Q 150 200, 100 190 Q 140 180, 200 240 Z" fill="#1C3C20" opacity="0.95" />
        <path d="M180 170 Q 130 130, 80 110 Q 120 110, 180 170 Z" fill="#36683B" />
        <path d="M160 140 Q 110 95, 60 70 Q 100 80, 160 140 Z" fill="#264F2A" />
        <path d="M190 120 Q 140 80, 85 60 Q 125 70, 190 120 Z" fill="#3F7544" opacity="0.9" />
        <path d="M230 160 Q 180 130, 130 120 Q 170 110, 230 160 Z" fill="#1E3E22" />
      </svg>
    </div>
  );
};
