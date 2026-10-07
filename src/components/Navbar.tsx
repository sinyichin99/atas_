import React, { useState, useEffect } from 'react';
import { AtasLogo } from './AtasLogo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'WHY CHOOSE', href: '#categories' },
    { label: 'BOOK A TABLE', href: '#reservation' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? 'bg-[#12281D]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#153226]/80 backdrop-blur-sm py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
          <AtasLogo size="md" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold tracking-[0.2em] text-white/90 hover:text-[#DE7B35] transition-colors relative py-1 focus:outline-none focus-visible:text-[#DE7B35]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Your Table CTA */}
        <div className="hidden md:block">
          <button
            onClick={onBookClick}
            type="button"
            className="cursor-pointer bg-[#BF8D49] hover:bg-[#ad7e3e] active:bg-[#9c7035] text-white font-semibold text-xs uppercase tracking-[0.16em] px-6 py-2.5 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BF8D49] rounded-[2px] border border-white/10"
          >
            BOOK YOUR TABLE
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onBookClick}
            type="button"
            className="bg-[#BF8D49] text-white font-semibold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-[2px]"
          >
            BOOK
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12281D]/98 border-t border-[#1F4532] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-widest text-slate-200 hover:text-[#d88f4c] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              type="button"
              className="w-full mt-3 bg-[#d88f4c] hover:bg-[#c37a37] text-neutral-900 font-bold text-xs uppercase tracking-widest py-3 text-center rounded-xs"
            >
              BOOK YOUR TABLE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
