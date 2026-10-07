import React from 'react';
import asianImg from '../assets/images/asian_delights_1790389785737.jpg';
import westernImg from '../assets/images/western_delights_1790389804947.jpg';
import drinksImg from '../assets/images/drinks_iced_1790389821597.jpg';

interface CategoryHighlightsProps {
  onCategorySelect?: (category: string) => void;
}

export const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({ onCategorySelect }) => {
  const categories = [
    {
      title: 'Asian Delights',
      image: asianImg,
      alt: 'Atas Asian Delights traditional Nasi Lemak platter with sambal and fried egg',
      description: 'Savor our main dishes, crafted with fresh ingredients and bold flavors.',
    },
    {
      title: 'Western',
      image: westernImg,
      alt: 'Atas hearty Western favorites roasted chicken, sausages and potatoes',
      description: 'Savour our hearty Western favourites, perfectly crafted to satisfy every craving.',
    },
    {
      title: 'Drinks',
      image: drinksImg,
      alt: 'Atas handcrafted iced berry cold brew cocktail in crystal glass',
      description: 'Refresh with our handcrafted drinks, perfectly paired to complement meal.',
    },
  ];

  return (
    <section id="categories" className="bg-[#153226] text-white py-12 sm:py-16 border-t border-b border-[#1f4535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata Header Row */}
        <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-stone-300/80 pb-8 sm:pb-12 border-b border-[#214a37]">
          <span className="font-medium">Atas Restaurant</span>
          <span className="font-normal text-stone-400">Flavors of Heritage</span>
          <span className="font-light">©2026</span>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => onCategorySelect?.(cat.title)}
              className="flex flex-col group cursor-pointer"
            >
              {/* Category Title */}
              <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-white mb-5 transition-colors group-hover:text-[#d88f4c]">
                {cat.title}
              </h2>

              {/* Square Dish Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#0e2118] border border-white/10 shadow-lg group-hover:border-[#d88f4c]/40 transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-stone-300/85 leading-relaxed font-light">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
