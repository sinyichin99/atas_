import React, { useState } from 'react';
import { X, Sparkles, Utensils, Coffee, Wine, ChefHat } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  initialCategory?: string;
  onClose: () => void;
  onBookClick: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  initialCategory,
  onClose,
  onBookClick,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'asian' | 'western' | 'drinks' | 'catering'>(
    initialCategory === 'Asian Delights'
      ? 'asian'
      : initialCategory === 'Western'
      ? 'western'
      : initialCategory === 'Drinks'
      ? 'drinks'
      : 'all'
  );

  if (!isOpen) return null;

  const fullMenu = [
    // Asian Delights
    {
      category: 'asian',
      title: 'Atas Heritage Nasi Lemak Royale',
      price: '$38.00',
      tag: 'Chef Signature',
      description: 'Fragrant coconut santan rice, sunny side up egg, slow-braised beef rendang, crisp anchovies, roasted peanuts, house sambal.',
    },
    {
      category: 'asian',
      title: 'Melaka Nyonya Laksa Lemak',
      price: '$42.00',
      tag: 'Popular',
      description: 'Silky rice noodles in rich aromatic coconut broth, tiger prawns, shredded chicken, quail eggs, tofu puffs, and laksa leaves.',
    },
    {
      category: 'asian',
      title: 'Wok-Breath Char Kway Teow',
      price: '$36.00',
      tag: 'Local Favorite',
      description: 'Flat rice noodles flash-seared with fresh sea cockles, duck egg, crunchy bean sprouts, and chives.',
    },
    {
      category: 'asian',
      title: 'Peranakan Ayam Pongteh',
      price: '$45.00',
      tag: 'Heritage',
      description: 'Succulent chicken thighs slow-stewed with fermented soybean paste, shiitake mushrooms, and sweet winter bamboo shoots.',
    },

    // Western
    {
      category: 'western',
      title: 'Garlic Butter Grilled Salmon',
      price: '$95.00',
      tag: 'Signature Main',
      description: 'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens and lemon emulsion.',
    },
    {
      category: 'western',
      title: 'Crispy Herb Chicken Supreme',
      price: '$48.00',
      tag: 'Bistro Classic',
      description: 'Golden roasted chicken with crispy skin, served over prosciutto salad and red wine glaze.',
    },
    {
      category: 'western',
      title: 'Summer Garden Pesto Pasta',
      price: '$50.00',
      tag: 'Vegetarian',
      description: 'Al dente pasta tossed with basil pesto, cherry tomatoes, and parmesan shavings.',
    },
    {
      category: 'western',
      title: 'Prime Angus Ribeye Steak (250g)',
      price: '$120.00',
      tag: 'Prime Cut',
      description: 'Charcoal-grilled grain-fed Angus ribeye, truffle potato puree, glazed Dutch carrots, and Madagascar green peppercorn jus.',
    },

    // Drinks
    {
      category: 'drinks',
      title: 'Cold Brew Cascara Tonic',
      price: '$22.00',
      tag: 'House Brew',
      description: 'Slow-dripped dark roast coffee infused with coffee cherry cascara, sparkling Mediterranean tonic, and burnt orange peel.',
    },
    {
      category: 'drinks',
      title: 'Wild Berry Botanical Iced Tea',
      price: '$18.00',
      tag: 'Refreshing',
      description: 'Handcrafted iced crimson hibiscus infusion with crushed mountain berries, mint, and clover honey.',
    },
    {
      category: 'drinks',
      title: 'Malacca Gula Melaka Latte',
      price: '$19.00',
      tag: 'Specialty',
      description: 'Espresso with steamed oat milk, pure smoky Melaka palm nectar, and sea salt foam.',
    },
    {
      category: 'drinks',
      title: 'Riverside Calamansi Fizz',
      price: '$16.00',
      tag: 'Mocktail',
      description: 'Tangy local calamansi lime, smashed kaffir lime leaves, fresh ginger reduction, and soda water.',
    },

    // Catering Menus
    {
      category: 'catering',
      title: 'Tropical Coconut Chia Parfait',
      price: '$58.00',
      tag: 'Catering Dessert',
      description: 'Layers of chia pudding, fresh mango, toasted coconut flakes, and a drizzle of honey.',
    },
    {
      category: 'catering',
      title: 'Heritage Banquet Platter (Min 4 Pax)',
      price: '$188.00',
      tag: 'Party Platter',
      description: 'Assortment of grilled wagyu skewers, crispy spiced chicken, artisanal sambal prawns, and organic sides.',
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? fullMenu
      : fullMenu.filter((item) => item.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#142e22] text-white max-w-4xl w-full rounded-lg shadow-2xl border border-[#214736] max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#214736] flex items-center justify-between bg-[#11261c]">
          <div>
            <span className="font-cormorant italic text-sm text-[#d88f4c] tracking-widest">
              Flavors of Heritage
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white">
              Atas Complete Dining Menu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 border-b border-[#1c3e2f] bg-[#0e2118] flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'all'
                ? 'bg-[#d88f4c] text-neutral-900 rounded-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            All Dishes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('asian')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'asian'
                ? 'bg-[#d88f4c] text-neutral-900 rounded-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            Asian Delights
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('western')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'western'
                ? 'bg-[#d88f4c] text-neutral-900 rounded-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            Western Favorites
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('drinks')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'drinks'
                ? 'bg-[#d88f4c] text-neutral-900 rounded-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            Drinks & Brews
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('catering')}
            className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'catering'
                ? 'bg-[#d88f4c] text-neutral-900 rounded-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            Catering Sets
          </button>
        </div>

        {/* Menu Items Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0e2118]/80 p-5 rounded border border-[#1b3d2e] hover:border-[#d88f4c]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-serif-display text-lg text-white font-medium">
                        {item.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider text-[#55B5A6] font-medium">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-serif-display text-lg text-[#d88f4c] font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-stone-300/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#1c3e2f] bg-[#11261c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400 font-light text-center sm:text-left">
            All prices subject to 10% service charge & 6% SST. Halal-sourced poultry & beef.
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="w-full sm:w-auto bg-[#ea8037] hover:bg-[#d6722d] text-neutral-900 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xs shrink-0"
          >
            Book Table to Dine
          </button>
        </div>
      </div>
    </div>
  );
};
