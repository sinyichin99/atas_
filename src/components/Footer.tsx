import React from 'react';
import { AtasLogo } from './AtasLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12281D] text-white pt-16 pb-12 border-t border-[#1d4131]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#1c3f30]">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <AtasLogo size="md" />
            <p className="mt-5 text-xs sm:text-sm text-stone-300/80 leading-relaxed font-light max-w-sm">
              Where culinary excellence meets warm hospitality. Exceptional tastes crafted dynamically by masters.
            </p>
          </div>

          {/* Column 2: Opening Hours */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white mb-4">
              Opening Hours
            </h4>
            <p className="text-xs sm:text-sm text-stone-300/80 font-light">
              Mon - Sun: 7:30AM – 11PM
            </p>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white mb-4">
              Contact us
            </h4>
            <p className="text-xs sm:text-sm text-stone-300/80 font-light leading-relaxed">
              29, Jln. Bunga Raya, Kampung Jawa, 75100 Melaka
            </p>
            <p className="text-xs sm:text-sm text-[#d88f4c] font-medium mt-2">
              <a href="tel:60126093690" className="hover:underline">
                60126093690
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <p>
            © 2026 Copyright - Atas Restaurant. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-stone-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d88f4c] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d88f4c] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d88f4c] transition-colors"
            >
              TripAdvisor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
