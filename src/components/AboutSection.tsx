import React, { useState } from 'react';
import eventImg from '../assets/images/about_event_table_1790389835406.jpg';
import courtyardImg from '../assets/images/about_courtyard_1790389852223.jpg';
import riversideImg from '../assets/images/about_riverside_1790389870004.jpg';
import { BotanicalLeaf } from './BotanicalDecoration';
import { ArrowRight, Sparkles, HeartHandshake, History, Award, X } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="relative bg-[#F5EFE6] text-[#153226] py-20 sm:py-28 overflow-hidden">
      {/* Decorative Botanical Foliage in corners */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <BotanicalLeaf position="top-left" className="opacity-90" />
      </div>
      <div className="absolute bottom-4 right-0 pointer-events-none">
        <BotanicalLeaf position="bottom-right" className="opacity-75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          {/* Left Kicker */}
          <div className="lg:col-span-3">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#787265] uppercase">
              // About Atas
            </span>
          </div>

          {/* Right Main Text & Action */}
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-[#153226] leading-[1.15]">
              Where Culinary Excellence <br />
              Meets Warm Hospitality.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#474e44] leading-relaxed max-w-2xl font-light">
              Enjoy carefully crafted dishes made with fresh ingredients, creating a warm
              and memorable dining experience every time you visit.
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => setShowStoryModal(true)}
                className="cursor-pointer inline-flex items-center gap-3 bg-[#545638] hover:bg-[#434629] active:bg-[#363820] text-white text-xs font-semibold uppercase tracking-[0.18em] px-6 py-3 transition-all duration-200 rounded-xs shadow-md hover:shadow-lg group"
              >
                <span>More About Us</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Featured Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Special Celebrations */}
          <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white/40 border border-[#e3dacd] hover:-translate-y-1">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={eventImg}
                alt="Table setup for private events and celebrations at Atas"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Selected Element: Interactive Animated Overlay Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2018]/95 via-[#153226]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end p-6 sm:p-7 backdrop-blur-[1.5px]">
              <div className="transform translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d88f4c] font-semibold block mb-1">
                  Atas Moments
                </span>
                <p className="text-white text-base sm:text-lg font-serif-display font-medium tracking-wide leading-snug drop-shadow-md">
                  Special Celebrations &amp; Private Dining
                </p>
                <div className="h-0.5 w-8 bg-[#d88f4c] mt-2.5 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:w-12" />
              </div>
            </div>
          </div>

          {/* Card 2: Glasshouse Architecture */}
          <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white/40 border border-[#e3dacd] hover:-translate-y-1">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={courtyardImg}
                alt="Sunlit courtyard and colonial glasshouse dining architecture"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2018]/95 via-[#153226]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end p-6 sm:p-7 backdrop-blur-[1.5px]">
              <div className="transform translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d88f4c] font-semibold block mb-1">
                  Heritage Architecture
                </span>
                <p className="text-white text-base sm:text-lg font-serif-display font-medium tracking-wide leading-snug drop-shadow-md">
                  Heritage Courtyard &amp; Conservatory
                </p>
                <div className="h-0.5 w-8 bg-[#d88f4c] mt-2.5 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:w-12" />
              </div>
            </div>
          </div>

          {/* Card 3: Riverside Terrace */}
          <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white/40 border border-[#e3dacd] hover:-translate-y-1">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={riversideImg}
                alt="Waterfront patio dining deck along Malacca River"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2018]/95 via-[#153226]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end p-6 sm:p-7 backdrop-blur-[1.5px]">
              <div className="transform translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d88f4c] font-semibold block mb-1">
                  Riverside Atmosphere
                </span>
                <p className="text-white text-base sm:text-lg font-serif-display font-medium tracking-wide leading-snug drop-shadow-md">
                  Alfresco Malacca River Dining
                </p>
                <div className="h-0.5 w-8 bg-[#d88f4c] mt-2.5 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 group-hover:w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF6F0] text-[#153226] max-w-2xl w-full p-8 sm:p-10 rounded-xl shadow-2xl relative border border-[#e0d6c7] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 text-stone-500 hover:text-stone-900 p-1"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d88f4c] font-bold">
              Our Story & Heritage
            </span>
            <h3 className="font-serif-display text-3xl font-medium text-[#153226] mt-2 mb-4">
              A Symphony of Peranakan Soul & Global Flavors
            </h3>
            <p className="text-sm text-[#474e44] leading-relaxed mb-6 font-light">
              Nestled on the historic riverbanks of Jalan Bunga Raya in Melaka, Atas Restaurant was born
              from a passion to honor Malaysia&apos;s rich multicultural food tapestry while elevating every recipe with
              modern culinary finesse.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#e5dcd0] py-6 mb-6 text-center">
              <div>
                <Award className="mx-auto text-[#d88f4c] mb-2" size={24} />
                <h4 className="font-serif-display text-base font-medium">Fine Quality</h4>
                <p className="text-xs text-stone-500 mt-1">Farm-fresh herbs & artisan butchery</p>
              </div>
              <div>
                <History className="mx-auto text-[#d88f4c] mb-2" size={24} />
                <h4 className="font-serif-display text-base font-medium">Riverfront Heritage</h4>
                <p className="text-xs text-stone-500 mt-1">Direct view of Malacca historic waterway</p>
              </div>
              <div>
                <HeartHandshake className="mx-auto text-[#d88f4c] mb-2" size={24} />
                <h4 className="font-serif-display text-base font-medium">Bespoke Hospitality</h4>
                <p className="text-xs text-stone-500 mt-1">Intimate celebrations & private catering</p>
              </div>
            </div>
            <button
              onClick={() => setShowStoryModal(false)}
              className="w-full bg-[#153226] hover:bg-[#1d4233] text-white font-medium text-xs uppercase tracking-widest py-3 rounded-xs"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
