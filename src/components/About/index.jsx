'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const content = {
    az: {
      title: 'Haqqımızda',
      creator: {
        name: 'İlknur',
        role: 'Bitter Soul-un qurucusu',
        message: `Bitter Soul – mənim üçün təkcə kafe deyil, bir ruh halıdır. Bəzən sözlə deyil, səssizliklə danışmaq istədiyimiz yerlər olur. Bu sayt və bu məkan, o səssizliyin içində toxunan cümlələr kimidir.`
      },
      sections: [
        {
          heading: 'Kimik?',
          text: 'Biz – Bitter Soul, qəhvəni hisslərlə, səssizliklə və düşüncə ilə birləşdirən məkandayıq. Hər fincanda bir hal, hər küncdə bir sükut var.'
        },
        {
          heading: 'Niyə "Bitter Soul"?',
          text: 'Çünki həyat həmişə şirin olmur. Bəzən acı, bəzən sərt, bəzən isə dərin olur. Biz o dərinliyə toxunuruq.'
        }
      ],
      quote: '“Bəzən bir fincan qəhvə bir insanın daxilini danışdırar.”'
    },
    en: {
      title: 'About',
      creator: {
        name: 'İlknur',
        role: 'Founder of Bitter Soul',
        message: `For me, Bitter Soul is not just a café – it's a state of being. Sometimes we wish to speak, not with words, but with silence.`
      },
      sections: [
        {
          heading: 'Who are we?',
          text: 'We are Bitter Soul – a space where coffee blends with emotion, silence, and reflection. Each cup holds a state of mind.'
        },
        {
          heading: 'Why "Bitter Soul"?',
          text: "Because life isn't always sweet. Sometimes it's bitter, intense, or deep. We gently touch that depth."
        }
      ],
      quote: '“Sometimes a cup of coffee speaks what the soul cannot.”'
    }
  };

  const { title, creator, sections, quote } = content[language];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <Image
          src="/cofee/cafe-interior-dark.jpg"
          alt={language === 'az' ? 'Bitter Soul interyeri' : 'Bitter Soul Interior'}
          fill
          className="object-cover opacity-90"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-50 tracking-wider px-4 text-center">
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-stone-200 shadow-xl">
            <Image
              src="/cofee/founder-portrait.jpg"
              alt={creator.name}
              fill
              className="object-cover grayscale-[15%]"
              sizes="(max-width: 640px) 280px, 360px"
            />
          </div>
          <div className="flex-1">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs tracking-widest text-stone-500">
                {language === 'az' ? 'QURUCUNUN QEYDİ' : 'FOUNDER\'S NOTE'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2 text-stone-800">{creator.name}</h2>
              <p className="text-sm italic text-stone-600">{creator.role}</p>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-stone-700 border-l-4 border-amber-800 pl-4 sm:pl-6 py-2 bg-amber-50/50">
              {creator.message}
            </p>
          </div>
        </div>
        <div className="space-y-16 sm:space-y-28">
          {sections.map((section, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-start">
                <div className="w-full md:w-1/3">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900/90">
                    {section.heading}
                  </h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-base sm:text-lg leading-relaxed text-stone-700">{section.text}</p>
                </div>
              </div>
              {idx < sections.length - 1 && (
                <div className="mt-12 sm:mt-16 border-t border-stone-200 group-last:hidden"></div>
              )}
            </div>
          ))}
        </div>
        <div className="relative w-full h-[200px] sm:h-[300px] my-12 sm:my-20">
          <Image
            src="/cofee/coffee-6467644_1280.jpg"
            alt={language === 'az' ? 'Qəhvə görüntüsü' : 'Coffee image'}
            fill
            className="object-cover opacity-90"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <div className="text-center py-12 sm:py-16">
          <div className="text-5xl sm:text-6xl text-amber-900/20 mb-4 sm:mb-6 font-serif">"</div>
          <p className="text-xl sm:text-2xl font-serif italic max-w-2xl mx-auto text-stone-700 px-4">
            {quote}
          </p>
          <div className="mt-8 sm:mt-10">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-amber-800/70 w-8 h-8 sm:w-12 sm:h-12"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}