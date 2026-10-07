import React, { useState } from 'react';
import { AtasLogo } from './AtasLogo';
import { Sparkles, Users, Compass, Check, Info } from 'lucide-react';

interface TableInfo {
  id: string;
  name: string;
  zone: string;
  capacity: string;
  vibe: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  shape?: 'round' | 'rect' | 'parasol' | 'bar';
}

interface SeatingPlanSectionProps {
  selectedTable: string | null;
  onSelectTable: (tableId: string) => void;
}

export const SeatingPlanSection: React.FC<SeatingPlanSectionProps> = ({
  selectedTable,
  onSelectTable,
}) => {
  const [hoveredTable, setHoveredTable] = useState<string | null>(null);

  const tables: Record<string, TableInfo> = {
    T14: { id: 'T14', name: 'Table T14', zone: 'Malacca Riverfront', capacity: '2 - 4 Guests', vibe: 'Romantic riverside breeze & historic river view', x: 475, y: 75, shape: 'parasol' },
    T15: { id: 'T15', name: 'Table T15', zone: 'Malacca Riverfront', capacity: '2 - 4 Guests', vibe: 'Prime sunset water reflections & outdoor dining', x: 545, y: 75, shape: 'parasol' },
    T16: { id: 'T16', name: 'Table T16', zone: 'Malacca Riverfront', capacity: '2 - 4 Guests', vibe: 'Scenic waterfront patio with shaded scalloped awning', x: 615, y: 75, shape: 'parasol' },
    T17: { id: 'T17', name: 'Table T17', zone: 'Malacca Riverfront', capacity: '2 - 4 Guests', vibe: 'Cozy river edge table near main promenade entrance', x: 685, y: 75, shape: 'parasol' },

    T1: { id: 'T1', name: 'Table T1', zone: 'West Veranda Deck', capacity: '2 - 4 Guests', vibe: 'Intimate corner with warm teak wood ambiance', x: 195, y: 380, shape: 'rect' },
    T2: { id: 'T2', name: 'Table T2', zone: 'West Veranda Deck', capacity: '2 - 4 Guests', vibe: 'Relaxed deck seating with garden view', x: 280, y: 380, shape: 'rect' },
    T3: { id: 'T3', name: 'Table T3', zone: 'West Veranda Deck', capacity: '2 - 4 Guests', vibe: 'Near artisanal cocktail bar with ambient lighting', x: 195, y: 475, shape: 'rect' },
    T4: { id: 'T4', name: 'Table T4', zone: 'West Veranda Deck', capacity: '2 - 4 Guests', vibe: 'Spacious dining setup close to hotel entrance', x: 280, y: 475, shape: 'rect' },

    T5: { id: 'T5', name: 'Table T5', zone: 'Central Courtyard', capacity: '4 - 6 Guests', vibe: 'Lush greenery courtyard view & comfortable spacing', x: 360, y: 260, shape: 'rect' },
    T6: { id: 'T6', name: 'Table T6', zone: 'Central Courtyard', capacity: '4 - 6 Guests', vibe: 'Center terrace perfect for celebrations and family dining', x: 465, y: 260, shape: 'rect' },

    T11: { id: 'T11', name: 'Table T11', zone: 'Garden Walkway', capacity: '6 Guests', vibe: 'Surrounded by tropical plants & glasshouse roof', x: 645, y: 200, shape: 'rect' },
    T10: { id: 'T10', name: 'Table T10', zone: 'Garden Walkway', capacity: '6 Guests', vibe: 'Shaded garden dining with fragrant orchids & foliage', x: 645, y: 335, shape: 'rect' },

    T13: { id: 'T13', name: 'Table T13', zone: 'East Promenade', capacity: '4 Guests', vibe: 'Direct view of the grand entrance garden', x: 820, y: 255, shape: 'rect' },
    T12: { id: 'T12', name: 'Table T12', zone: 'East Promenade', capacity: '4 Guests', vibe: 'Quiet alcove setting near heritage brick walls', x: 820, y: 365, shape: 'rect' },
    T9: { id: 'T9', name: 'Table T9', zone: 'East Promenade', capacity: '4 - 6 Guests', vibe: 'Warm bistro atmosphere with view of high table lounge', x: 820, y: 480, shape: 'rect' },

    T7: { id: 'T7', name: 'Table T7', zone: 'High Table Lounge', capacity: '2 - 3 Guests', vibe: 'High bar stools, wine & craft cocktails lounge', x: 655, y: 550, shape: 'round' },
    T8: { id: 'T8', name: 'Table T8', zone: 'High Table Lounge', capacity: '2 - 3 Guests', vibe: 'Elevated seating ideal for drinks and tapas', x: 740, y: 550, shape: 'round' },
  };

  const activeTable = selectedTable ? tables[selectedTable] : hoveredTable ? tables[hoveredTable] : null;

  const handleTableClick = (id: string) => {
    onSelectTable(id);
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="seating" className="bg-[#F5EFE6] text-[#153226] py-20 sm:py-28 border-t border-[#ded3c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#787265] uppercase">
            // Seating Plan
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-[#153226] mt-3">
            Find Your Perfect Spot
          </h2>
          <p className="mt-3 text-sm text-[#4e554b] max-w-xl font-light">
            Explore our architectural layout. Click on any table to select your preferred dining spot
            by the Malacca River, within our garden courtyard, or at the cocktail bar.
          </p>
        </div>

        {/* The Floor Plan Architectural Graphic Canvas / SVG */}
        <div className="relative bg-[#09150E] rounded-xl overflow-hidden shadow-2xl border-4 border-[#163527] max-w-5xl mx-auto">
          {/* SVG Seating Map */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 960 620"
              className="w-full min-w-[700px] h-auto select-none"
              style={{ background: '#09150F' }}
            >
              <defs>
                {/* Wood plank texture pattern */}
                <pattern id="woodDeck" width="60" height="24" patternUnits="userSpaceOnUse">
                  <rect width="60" height="24" fill="#6d543e" />
                  <line x1="0" y1="24" x2="60" y2="24" stroke="#4d3b2b" strokeWidth="1.5" />
                  <line x1="30" y1="0" x2="30" y2="24" stroke="#564230" strokeWidth="1" />
                </pattern>

                {/* Darker wood pattern */}
                <pattern id="woodDeckDark" width="50" height="20" patternUnits="userSpaceOnUse">
                  <rect width="50" height="20" fill="#5a4533" />
                  <line x1="0" y1="20" x2="50" y2="20" stroke="#3b2d21" strokeWidth="1.2" />
                </pattern>

                {/* High Table area pattern */}
                <pattern id="slateFloor" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="#13231a" />
                  <path d="M 0 40 L 40 0 M 0 0 L 40 40" stroke="#1d3427" strokeWidth="0.8" />
                </pattern>
              </defs>

              {/* TOP: Malacca River Water Section */}
              <rect x="0" y="0" width="960" height="60" fill="#0c2324" />
              {/* Animated wave lines */}
              <path
                d="M 0 25 Q 60 10, 120 25 T 240 25 T 360 25 T 480 25 T 600 25 T 720 25 T 840 25 T 960 25"
                fill="none"
                stroke="#00E5C9"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M 0 38 Q 60 50, 120 38 T 240 38 T 360 38 T 480 38 T 600 38 T 720 38 T 840 38 T 960 38"
                fill="none"
                stroke="#00B4D8"
                strokeWidth="2"
                opacity="0.6"
              />
              <path
                d="M 0 12 Q 60 2, 120 12 T 240 12 T 360 12 T 480 12 T 600 12 T 720 12 T 840 12 T 960 12"
                fill="none"
                stroke="#48CAE4"
                strokeWidth="1.5"
                opacity="0.5"
              />

              {/* Malacca River Label */}
              <text
                x="500"
                y="30"
                fill="#ffffff"
                fontSize="12"
                fontWeight="bold"
                letterSpacing="0.25em"
                textAnchor="middle"
                opacity="0.9"
              >
                MALACCA RIVER
              </text>

              {/* Logo in Top Left */}
              <g transform="translate(30, 75)">
                <text
                  x="50"
                  y="28"
                  fill="#55B5A6"
                  fontFamily="'Alex Brush', cursive"
                  fontSize="42"
                  textAnchor="middle"
                >
                  atas
                </text>
                <text
                  x="50"
                  y="42"
                  fill="#55B5A6"
                  fontSize="8"
                  fontWeight="600"
                  letterSpacing="0.3em"
                  textAnchor="middle"
                >
                  RESTAURANT
                </text>
              </g>

              {/* MAIN ENTRANCE (Cyan button at Top Right) */}
              <g transform="translate(670, 70)">
                <rect
                  x="0"
                  y="0"
                  width="70"
                  height="26"
                  rx="3"
                  fill="#00E5C9"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
                />
                <text
                  x="35"
                  y="11"
                  fill="#062e26"
                  fontSize="7.5"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="0.08em"
                >
                  MAIN
                </text>
                <text
                  x="35"
                  y="20"
                  fill="#062e26"
                  fontSize="7.5"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="0.08em"
                >
                  ENTRANCE
                </text>
              </g>

              {/* Wooden Flooring Sections */}
              {/* Left deck (T1, T2, T3, T4) */}
              <rect x="150" y="330" width="180" height="200" fill="url(#woodDeck)" rx="4" stroke="#3b2b1d" strokeWidth="2" />

              {/* Center Veranda deck (T5, T6) */}
              <rect x="330" y="220" width="220" height="150" fill="url(#woodDeck)" rx="4" stroke="#3b2b1d" strokeWidth="2" />

              {/* Central garden walkway (T11, T10) */}
              <rect x="580" y="140" width="130" height="280" fill="url(#woodDeckDark)" rx="4" stroke="#3b2b1d" strokeWidth="2" />

              {/* East Dining Deck (T13, T12, T9) */}
              <rect x="760" y="180" width="120" height="340" fill="url(#woodDeck)" rx="4" stroke="#3b2b1d" strokeWidth="2" />

              {/* Riverside Boardwalk (T14-T17) */}
              <rect x="430" y="60" width="310" height="60" fill="url(#woodDeckDark)" rx="2" stroke="#332418" strokeWidth="1.5" />

              {/* High Table Area (Bottom Right) */}
              <rect x="600" y="490" width="280" height="110" fill="url(#slateFloor)" rx="4" stroke="#1d3427" strokeWidth="2" />
              <text x="740" y="515" fill="#e8d8c3" fontSize="9" fontWeight="bold" letterSpacing="0.15em" textAnchor="middle">
                HIGH TABLE AREA
              </text>

              {/* Lush Tropical Garden Plants / Foliage Illustrations */}
              {/* Plants between center and left */}
              <g fill="#245133" stroke="#183622" strokeWidth="1">
                <circle cx="340" cy="180" r="14" />
                <circle cx="345" cy="195" r="10" />
                <circle cx="330" cy="190" r="12" />
                <circle cx="340" cy="390" r="16" />
                <circle cx="350" cy="410" r="12" />
                <circle cx="335" cy="425" r="14" />
                {/* Garden between walkway and east deck */}
                <circle cx="730" cy="200" r="16" />
                <circle cx="740" cy="225" r="14" />
                <circle cx="725" cy="250" r="15" />
                <circle cx="735" cy="300" r="18" fill="#1b4228" />
                <circle cx="725" cy="335" r="16" />
                <circle cx="740" cy="370" r="15" fill="#2d643e" />
                <circle cx="730" cy="410" r="16" />
              </g>

              {/* Bottom Elements: BAR AREA, ENTRANCE VIA 1825 HOTEL */}
              {/* BAR AREA Button at bottom left */}
              <g transform="translate(300, 560)">
                <rect
                  x="0"
                  y="0"
                  width="145"
                  height="34"
                  rx="4"
                  fill="#00E5C9"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
                />
                <text
                  x="72"
                  y="22"
                  fill="#062e26"
                  fontSize="11"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="0.12em"
                >
                  BAR AREA
                </text>
              </g>

              {/* ENTRANCE VIA 1825 HOTEL (bottom center) */}
              <g transform="translate(465, 564)">
                <rect
                  x="0"
                  y="0"
                  width="110"
                  height="26"
                  rx="3"
                  fill="#00E5C9"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
                />
                <text
                  x="55"
                  y="17"
                  fill="#062e26"
                  fontSize="7.5"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="0.06em"
                >
                  ENTRANCE VIA 1825 HOTEL
                </text>
              </g>

              {/* TABLES RENDERING */}
              {/* Helper for rendering interactive tables */}
              {Object.entries(tables).map(([id, t]) => {
                const isSelected = selectedTable === id;
                const isHovered = hoveredTable === id;
                const strokeColor = isSelected ? '#ea8037' : isHovered ? '#00E5C9' : '#ffffff';
                const fillColor = isSelected ? '#ea8037' : isHovered ? '#1e4835' : '#142f22';

                if (t.shape === 'parasol') {
                  // Riverside scalloped awning table (T14 - T17)
                  return (
                    <g
                      key={id}
                      transform={`translate(${t.x}, ${t.y})`}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => handleTableClick(id)}
                      onMouseEnter={() => setHoveredTable(id)}
                      onMouseLeave={() => setHoveredTable(null)}
                    >
                      {/* Parasol Scalloped Top */}
                      <path
                        d="M -22 -15 C -20 -25, 20 -25, 22 -15 C 24 -10, 20 0, 18 5 C 10 3, 5 6, 0 4 C -5 6, -10 3, -18 5 C -20 0, -24 -10, -22 -15 Z"
                        fill={isSelected ? '#ea8037' : '#ffffff'}
                        stroke={strokeColor}
                        strokeWidth={isSelected || isHovered ? '2' : '1'}
                      />
                      {/* Table base */}
                      <rect
                        x="-18"
                        y="-12"
                        width="36"
                        height="26"
                        rx="4"
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={isSelected || isHovered ? '2.5' : '1.2'}
                      />
                      <text
                        x="0"
                        y="5"
                        fill={isSelected ? '#000000' : '#ffffff'}
                        fontSize="9.5"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {id}
                      </text>
                    </g>
                  );
                }

                if (t.shape === 'round') {
                  // High Table Round (T7, T8)
                  return (
                    <g
                      key={id}
                      transform={`translate(${t.x}, ${t.y})`}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => handleTableClick(id)}
                      onMouseEnter={() => setHoveredTable(id)}
                      onMouseLeave={() => setHoveredTable(null)}
                    >
                      {/* Bar Stool Rings */}
                      <circle cx="-18" cy="-14" r="8" fill="#2d4234" stroke="#486953" strokeWidth="1" />
                      <circle cx="18" cy="-14" r="8" fill="#2d4234" stroke="#486953" strokeWidth="1" />
                      <circle cx="0" cy="20" r="8" fill="#2d4234" stroke="#486953" strokeWidth="1" />
                      {/* Center Table */}
                      <circle
                        cx="0"
                        cy="0"
                        r="18"
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={isSelected || isHovered ? '3' : '1.5'}
                      />
                      <text
                        x="0"
                        y="4"
                        fill={isSelected ? '#000000' : '#ffffff'}
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {id}
                      </text>
                    </g>
                  );
                }

                // Default Rectangular Tables (T1, T2, T3, T4, T5, T6, T10, T11, T12, T13, T9)
                const isWide = id === 'T11' || id === 'T10' || id === 'T5' || id === 'T6' || id === 'T9';
                const rectW = isWide ? 58 : 46;
                const rectH = isWide ? 34 : 32;

                return (
                  <g
                    key={id}
                    transform={`translate(${t.x}, ${t.y})`}
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => handleTableClick(id)}
                    onMouseEnter={() => setHoveredTable(id)}
                    onMouseLeave={() => setHoveredTable(null)}
                  >
                    {/* Surrounding Chairs */}
                    {/* Top chairs */}
                    <rect x={-rectW / 2 + 6} y={-rectH / 2 - 6} width="12" height="5" rx="1.5" fill="#3a4f40" />
                    {isWide && (
                      <rect x={-6} y={-rectH / 2 - 6} width="12" height="5" rx="1.5" fill="#3a4f40" />
                    )}
                    <rect x={rectW / 2 - 18} y={-rectH / 2 - 6} width="12" height="5" rx="1.5" fill="#3a4f40" />

                    {/* Bottom chairs */}
                    <rect x={-rectW / 2 + 6} y={rectH / 2 + 1} width="12" height="5" rx="1.5" fill="#3a4f40" />
                    {isWide && (
                      <rect x={-6} y={rectH / 2 + 1} width="12" height="5" rx="1.5" fill="#3a4f40" />
                    )}
                    <rect x={rectW / 2 - 18} y={rectH / 2 + 1} width="12" height="5" rx="1.5" fill="#3a4f40" />

                    {/* Table Surface */}
                    <rect
                      x={-rectW / 2}
                      y={-rectH / 2}
                      width={rectW}
                      height={rectH}
                      rx="4"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isSelected || isHovered ? '2.5' : '1.5'}
                    />
                    <text
                      x="0"
                      y="4"
                      fill={isSelected ? '#000000' : '#ffffff'}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Table Detail Banner below map */}
          {activeTable && (
            <div className="bg-[#12281D] border-t border-[#26533d] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ea8037] text-neutral-950 font-bold flex items-center justify-center font-serif text-base shrink-0">
                  {activeTable.id}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">{activeTable.name}</span>
                    <span className="text-xs bg-[#1f4735] text-[#55B5A6] px-2 py-0.5 rounded">
                      {activeTable.zone}
                    </span>
                    <span className="text-xs text-stone-400">({activeTable.capacity})</span>
                  </div>
                  <p className="text-xs text-stone-300 font-light mt-0.5">
                    {activeTable.vibe}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleTableClick(activeTable.id)}
                className="cursor-pointer bg-[#ea8037] hover:bg-[#d6722d] text-neutral-900 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xs shrink-0 flex items-center gap-2"
              >
                <span>{selectedTable === activeTable.id ? 'Table Selected' : 'Select This Table'}</span>
                {selectedTable === activeTable.id && <Check size={14} />}
              </button>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#52594f]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#ffffff] border border-stone-400 inline-block" />
            <span>Riverside Parasol Tables (T14-T17)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#142f22] border border-white inline-block" />
            <span>Veranda & Garden Dining (T1-T6, T10-T13)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#142f22] border border-white inline-block" />
            <span>High Table Lounge (T7, T8)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#00E5C9] inline-block" />
            <span>Entrances & Bar Area</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#ea8037] inline-block" />
            <span>Selected Table</span>
          </div>
        </div>
      </div>
    </section>
  );
};
