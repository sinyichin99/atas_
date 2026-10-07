import React from 'react';
import heroDishImg from '../assets/images/atas_hero_exact_1791387328279.jpg';
import { BambooFoliage } from './BambooDecoration';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-[#153226]">
      {/* 1. Selected Element 1: Hero Background Image Container & Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDishImg}
          alt="Atas Restaurant signature medium-rare steak, garden salad and roasted potatoes"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] select-none scale-[1.01]"
        />
        {/* Left Side Reading Gradient Shadow (matching Figma's dark left third for text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 via-40% to-black/35" />
        {/* Seamless bottom transition to the dark green #153226 Categories Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#153226] via-[#153226]/40 via-15% to-transparent" />
        {/* Top subtle vignette for header */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      {/* 2. Top-Left & Bottom-Right Bamboo Leaf Decorations (matching Figma design) */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <BambooFoliage position="top-left" />
      </div>
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <BambooFoliage position="bottom-right" />
      </div>

      {/* 3. Selected Element 2: Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-28 sm:py-36 w-full">
        <div className="max-w-xl text-left">
          {/* Main Headline - exact font, casing, leading, and dual-tone color */}
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.5rem] font-bold uppercase tracking-tight text-white leading-[1.06] drop-shadow-lg">
            SAVOR EVERY <br />
            MOMENT WITH <br />
            <span className="text-[#DE7B35] font-bold">EVERY BITE</span>
          </h1>

          {/* Subtitle - matching Figma copy, font weight, line break and cream tone */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-[14px] text-[#EDE6D8]/95 font-light max-w-[430px] leading-[1.65] drop-shadow-sm">
            Delight in flavors crafted to bring joy, comfort, and unforgettable dining experiences every time.
          </p>

          {/* Call to Action Button - matching golden ochre #BF8D49, white text, corner radius 2px */}
          <div className="mt-7 sm:mt-8">
            <button
              onClick={onBookClick}
              type="button"
              className="cursor-pointer inline-flex items-center justify-center bg-[#BF8D49] hover:bg-[#ad7e3e] active:bg-[#9c7035] text-white font-semibold text-xs uppercase tracking-[0.16em] px-8 py-3.5 transition-all duration-200 shadow-md hover:shadow-lg rounded-[2px] border border-white/10"
            >
              BOOK YOUR TABLE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
