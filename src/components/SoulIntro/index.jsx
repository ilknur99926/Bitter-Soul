'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLanguage } from '@/context/LanguageContext'; // 🔹 Kontekstdən düzgün import

const emojis = ["☕", "🍂", "📖", "🌄", "🌿", "🎨", "🧘"];

const translations = {
  en: {
    title: "Philosophy of Coffee",
    moods: ["Thoughtful", "Calm", "Educational", "Inspirational", "Soothing", "Creative", "Mindful"],
    quotes: [
      "The soul whispers in silence, coffee amplifies its voice.",
      "Within every cup lies an endless cosmos of untold stories.",
      "Coffee: the alchemist that turns dreams into reality.",
      "Every sip stirs a thought, every thought breathes a story.",
      "Philosophy blooms in wonder, nurtured by the warmth of coffee.",
      "Creativity begins with the aroma of a fresh brew.",
      "Mindfulness is sipping slowly and thinking deeply."
    ],
    navbarLinks: [
      { href: "#wall", label: "Wall Coffee" },
      { href: "#menu", label: "Menu" },
      { href: "#about", label: "About Us" }
    ]
  },
  az: {
    title: "Qəhvənin Fəlsəfəsi",
    moods: ["Düşüncəli", "Sakit", "Təlimatçı", "İlhamverici", "Ruhlandırıcı", "Yaradıcı", "Şüurlu"],
    quotes: [
      "Ruh səssizcə pıçıldayır, qəhvə onun səsini gücləndirir.",
      "Hər fincanda saysız-hesabsız nağıllar gizlidir.",
      "Qəhvə — yuxuları gerçəyə çevirən sehrbazdır.",
      "Hər yudumda bir düşüncə, hər düşüncədə bir nağıl nəfəs alır.",
      "Fəlsəfə heyranlıqda açar çiçək, qəhvə isə onun istiliyidir.",
      "Yaradıcılıq təzə dəmlənmiş qəhvədən başlayır.",
      "Şüurluluq, yavaşca yudumlamaq və dərin düşünməkdir."
    ],
    navbarLinks: [
      { href: "#wall", label: "Divardan Qəhvə" },
      { href: "#menu", label: "Menyu" },
      { href: "#about", label: "Haqqımızda" }
    ]
  }
};

const backgroundImages = [
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1600431521340-491eca880813?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
];

export default function SoulIntro() {
  const { language, setLanguage } = useLanguage();
  const [selectedMoodIndex, setSelectedMoodIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const { title, moods, quotes, navbarLinks } = translations[language];

useEffect(() => {
  const interval = setInterval(() => {
    setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    setSelectedMoodIndex((prev) => (prev + 1) % emojis.length); 
  }, 2000); 

  return () => clearInterval(interval); 
}, []);


  return (
    <div className="relative h-screen overflow-hidden bg-black text-white font-serif">
      <Navbar lang={language} links={navbarLinks} changeLanguage={setLanguage} />

      <div
        className="absolute inset-0 bg-cover bg-center brightness-110 contrast-110 transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
      ></div>

      <div className="absolute inset-0 bg-black/20 z-20 flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-extrabold mb-6 drop-shadow-lg select-none">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-8 italic leading-relaxed">
          {selectedMoodIndex !== null ? quotes[selectedMoodIndex] : ""}
        </p>

        <div className="flex gap-4 justify-center flex-wrap px-2 max-w-full">
          {moods.map((mood, i) => (
            <button
              key={mood}
              onClick={() => setSelectedMoodIndex(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center
                ${selectedMoodIndex === i
                  ? 'bg-yellow-400 text-black scale-105 shadow-yellow-500'
                  : 'bg-yellow-600 text-white hover:bg-yellow-400 hover:text-black hover:scale-110 hover:shadow-yellow-500'}`}
              style={{ minWidth: '110px' }}
            >
              <span className="mr-2 text-xl">{emojis[i]}</span>
              {mood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
