'use client';

import React, { useEffect, useState } from 'react';
import quotes from '@/data/quotes';
import { useLanguage } from '@/context/LanguageContext';

export default function DailyThought() {
  const { language } = useLanguage();
  const now = new Date();
  const currentKey = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const todaysQuotes = quotes[currentKey]?.[language] || ["Sitat tapılmadı."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % todaysQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [todaysQuotes.length]);

  const quote = todaysQuotes[index];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#fff7e6] to-[#fff0cc] text-[#5b3a1a] text-center font-serif relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-2">📖 {language === 'az' ? "Günün Düşüncəsi" : "Thought of the Day"}</h2>
      <p className="text-lg text-orange-500 mb-10">
        {language === 'az'
          ? "Hər gün yeni bir perspektiv, hər fincan qəhvə ilə yeni bir düşüncə"
          : "A new perspective each day, a new thought with every cup of coffee"}
      </p>
      <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-2xl shadow-lg relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md">
          ☁️
        </div>
        <blockquote className="italic text-xl mb-6 leading-relaxed transition-opacity duration-500">
          “{quote}”
        </blockquote>
        <p className="text-sm text-gray-500">{currentKey}</p>
        <div className="mt-6 flex justify-center gap-4 text-yellow-700 text-xl">
          <span>💡</span>
          <span>🤔</span>
          <span>📚</span>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-2">
        {todaysQuotes.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-orange-500' : 'bg-yellow-300'
              } transition-all duration-300`}
          />
        ))}
      </div>
      <div className="absolute w-32 h-32 bg-yellow-100 rounded-full top-10 left-10 opacity-50" />
      <div className="absolute w-36 h-36 bg-orange-100 rounded-full bottom-10 right-10 opacity-30" />
    </section>
  );
}
