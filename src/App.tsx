/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryHighlights } from './components/CategoryHighlights';
import { AboutSection } from './components/AboutSection';
import { CateringMenuSection } from './components/CateringMenuSection';
import { ReservationSection } from './components/ReservationSection';
import { SeatingPlanSection } from './components/SeatingPlanSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';

export default function App() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [menuModalCategory, setMenuModalCategory] = useState<string | undefined>(undefined);

  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenMenuWithCategory = (category?: string) => {
    setMenuModalCategory(category);
    setMenuModalOpen(true);
  };

  const handleTableSelect = (tableId: string) => {
    setSelectedTable(tableId);
  };

  return (
    <div className="min-h-screen bg-[#12281D] font-sans-ui text-slate-100 flex flex-col selection:bg-[#d88f4c] selection:text-neutral-900">
      {/* Fixed/Sticky Navigation Header */}
      <Navbar onBookClick={scrollToReservation} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={scrollToReservation} />

        {/* 3 Categories Section (Asian Delights, Western, Drinks) */}
        <CategoryHighlights onCategorySelect={handleOpenMenuWithCategory} />

        {/* About Section */}
        <AboutSection />

        {/* Best Catering Menus Section */}
        <CateringMenuSection onViewMenuClick={() => handleOpenMenuWithCategory('all')} />

        {/* Reservation Section */}
        <ReservationSection
          selectedTable={selectedTable}
          onClearTable={() => setSelectedTable(null)}
        />

        {/* Interactive Seating Plan */}
        <SeatingPlanSection
          selectedTable={selectedTable}
          onSelectTable={handleTableSelect}
        />

        {/* Testimonials / Guest Stories */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Menu Modal */}
      <MenuModal
        isOpen={menuModalOpen}
        initialCategory={menuModalCategory}
        onClose={() => setMenuModalOpen(false)}
        onBookClick={() => {
          setMenuModalOpen(false);
          scrollToReservation();
        }}
      />
    </div>
  );
}
