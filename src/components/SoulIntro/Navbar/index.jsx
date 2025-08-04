'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-[rgba(30,25,20,0.98)] backdrop-blur-md shadow-lg z-[9999] border-b border-amber-900/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 py-2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16">
              <svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="175" cy="175" r="165" fill="none" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.6" />
                <circle cx="175" cy="175" r="155" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
                <circle cx="175" cy="175" r="145" fill="url(#darkGradient)" stroke="url(#goldGradient)" strokeWidth="3" />
                <circle cx="175" cy="175" r="135" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.3" />
                <path d="M95 200 L95 250 Q95 275 120 275 L230 275 Q255 275 255 250 L255 200 Z" fill="url(#cupGradient)" stroke="#8B4513" strokeWidth="2" />
                <path d="M100 205 L100 245 Q100 265 120 265 L230 265 Q250 265 250 245 L250 205 Z" fill="url(#coffeeGradient)" />
                <ellipse cx="175" cy="205" rx="75" ry="10" fill="#654321" />
                <ellipse cx="175" cy="203" rx="70" ry="8" fill="#8B4513" />
                <ellipse cx="160" cy="201" rx="25" ry="3" fill="#D2691E" opacity="0.6" />
                <path d="M255 220 Q280 220 280 245 Q280 270 255 270" fill="none" stroke="url(#goldGradient)" strokeWidth="8" strokeLinecap="round" />
                <path d="M255 225 Q275 225 275 245 Q275 265 255 265" fill="none" stroke="#D2691E" strokeWidth="4" strokeLinecap="round" />
                <path d="M145 185 Q140 160 145 135 Q150 110 145 85 Q140 60 145 35" fill="none" stroke="url(#steamGradient)" strokeWidth="4" strokeLinecap="round" />
                <path d="M175 185 Q170 160 175 135 Q180 110 175 85 Q170 60 175 35" fill="none" stroke="url(#steamGradient)" strokeWidth="4" strokeLinecap="round" />
                <path d="M205 185 Q200 160 205 135 Q210 110 205 85 Q200 60 205 35" fill="none" stroke="url(#steamGradient)" strokeWidth="4" strokeLinecap="round" />
                <text x="175" y="155" fontFamily="Playfair Display" fontSize="72" fontWeight="900" fill="#2D1810" textAnchor="middle" dominantBaseline="middle">BS</text>
                <text x="175" y="150" fontFamily="Playfair Display" fontSize="72" fontWeight="900" fill="url(#letterGradient)" textAnchor="middle" dominantBaseline="middle">BS</text>
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                    <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
                    <stop offset="100%" stopColor="#B8860B" stopOpacity="1" />
                  </linearGradient>
                  <radialGradient id="darkGradient" cx="50%" cy="30%">
                    <stop offset="0%" stopColor="#3C2415" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1A0F0A" stopOpacity="1" />
                  </radialGradient>
                  <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D2691E" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8B4513" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A0522D" stopOpacity="1" />
                    <stop offset="100%" stopColor="#654321" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F5F5DC" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                    <stop offset="50%" stopColor="#FFA500" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-amber-100 text-2xl font-serif font-bold tracking-tight">
              Bitter <span className="text-amber-400">♥</span> Soul
            </span>
          </div>

          {/* Mobile view flag buttons and burger menu */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setLanguage('az')} 
                className="rounded border border-transparent hover:border-amber-600 transition-colors"
              >
                <Image src="/flags/az.png" alt="Azərbaycan" width={28} height={20} className="rounded" />
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className="rounded border border-transparent hover:border-amber-600 transition-colors"
              >
                <Image src="/flags/en.png" alt="English" width={28} height={20} className="rounded" />
              </button>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-amber-100 focus:outline-none hover:text-amber-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop view nav links and flag buttons */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-amber-100 font-medium no-underline transition-colors hover:text-amber-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <button 
                onClick={() => setLanguage('az')} 
                className="rounded border border-transparent hover:border-amber-600 transition-colors"
              >
                <Image src="/flags/az.png" alt="Azərbaycan" width={28} height={20} className="rounded" />
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className="rounded border border-transparent hover:border-amber-600 transition-colors"
              >
                <Image src="/flags/en.png" alt="English" width={28} height={20} className="rounded" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu links */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="pb-4 space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 px-4 text-amber-100 no-underline hover:text-amber-300 hover:bg-amber-900/30 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}