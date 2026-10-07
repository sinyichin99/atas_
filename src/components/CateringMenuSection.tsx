import React from 'react';
import pastaImg from '../assets/images/catering_pasta_1790389884880.jpg';
import { ArrowRight } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface CateringMenuSectionProps {
  onViewMenuClick: () => void;
}

export const CateringMenuSection: React.FC<CateringMenuSectionProps> = ({ onViewMenuClick }) => {
  const menuItems: MenuItem[] = [
    {
      name: 'Garlic Butter Grilled Salmon',
      price: '$95.00',
      description: 'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
    },
    {
      name: 'Tropical Coconut Chia Parfait',
      price: '$58.00',
      description: 'Layers of chia pudding, fresh mango, toasted coconut flakes, and a drizzle of honey.',
    },
    {
      name: 'Garlic Butter Grilled Salmon',
      price: '$65.00',
      description: 'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
    },
    {
      name: 'Summer Garden Pesto Pasta',
      price: '$50.00',
      description: 'Al dente pasta tossed with basil pesto, cherry tomatoes, and parmesan shavings.',
    },
    {
      name: 'Crispy Herb Chicken Supreme',
      price: '$48.00',
      description: 'Golden roasted chicken with crispy skin, served over prosciutto salad and red wine glaze.',
    },
  ];

  return (
    <section id="menu" className="bg-[#153226] text-white py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="font-cormorant italic text-base sm:text-lg text-[#d88f4c] tracking-widest font-normal mb-2">
            Explore Menu Option
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-wide">
            Best Catering Menus
          </h2>
        </div>

        {/* 2-Column Grid: Dish Photo + Menu Items List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Vertical Food Photography */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-none overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={pastaImg}
                alt="Summer garden pasta and iced coffee drink at Atas Restaurant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Column: Menu Items List */}
          <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-white/10">
            {menuItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 group transition-all duration-200"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif-display text-lg sm:text-xl font-normal text-white group-hover:text-[#d88f4c] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif-display text-lg sm:text-xl text-[#d88f4c] font-medium tracking-wide shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-300/80 leading-relaxed font-light max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Row: Excellence + View Menu Button */}
        <div className="mt-20 pt-10 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-white text-center sm:text-left leading-snug">
            Where Culinary Excellence <br />
            Meets Warm Hospitality.
          </h3>

          <button
            type="button"
            onClick={onViewMenuClick}
            className="cursor-pointer inline-flex items-center gap-3 bg-[#9c7c41] hover:bg-[#866731] active:bg-[#725424] text-white text-xs font-semibold uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200 rounded-xs shadow-md hover:shadow-lg group shrink-0"
          >
            <span>View Menu</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
