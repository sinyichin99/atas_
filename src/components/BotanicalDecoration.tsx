import React from 'react';

interface BotanicalProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const BotanicalLeaf: React.FC<BotanicalProps> = ({
  className = '',
  position = 'top-left',
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-x-[-1] scale-y-[-1]';
      default:
        return '';
    }
  };

  return (
    <div
      className={`pointer-events-none select-none z-10 opacity-75 ${getTransform()} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 sm:w-36 md:w-48 lg:w-56 h-auto drop-shadow-md"
      >
        {/* Palm frond stem */}
        <path
          d="M10 10 C 60 70, 110 140, 180 200"
          stroke="#47624B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Frond leaves */}
        <path
          d="M25 35 Q 50 20, 85 28 C 65 38, 45 42, 25 35 Z"
          fill="#5C7A5E"
          opacity="0.9"
        />
        <path
          d="M45 60 Q 90 40, 135 55 C 105 70, 75 75, 45 60 Z"
          fill="#47624B"
          opacity="0.95"
        />
        <path
          d="M70 90 Q 125 75, 175 95 C 140 115, 100 115, 70 90 Z"
          fill="#3B553F"
          opacity="0.9"
        />
        <path
          d="M95 125 Q 155 115, 195 140 C 160 160, 125 155, 95 125 Z"
          fill="#5C7A5E"
          opacity="0.95"
        />
        <path
          d="M125 160 Q 175 160, 200 190 C 175 198, 145 190, 125 160 Z"
          fill="#47624B"
        />

        {/* Opposite side leaflets */}
        <path
          d="M30 42 Q 25 80, 48 95 C 45 75, 40 55, 30 42 Z"
          fill="#334B36"
        />
        <path
          d="M55 70 Q 55 115, 80 135 C 75 110, 68 85, 55 70 Z"
          fill="#547155"
        />
        <path
          d="M85 105 Q 90 155, 118 175 C 110 145, 100 120, 85 105 Z"
          fill="#3D5941"
        />
        <path
          d="M120 145 Q 130 185, 155 205 C 145 180, 135 160, 120 145 Z"
          fill="#5C7A5E"
        />
      </svg>
    </div>
  );
};
