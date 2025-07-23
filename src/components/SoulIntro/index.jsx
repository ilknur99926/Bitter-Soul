'use client';

import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Navbar from './Navbar';

const emojis = ["🤔", "☕", "📚", "🌅", "🍃"];

const translations = {
  en: {
    title: "Philosophy of Coffee",
    moods: ["Thoughtful", "Calm", "Educational", "Inspirational", "Soothing"],
    quotes: [
      "The soul whispers in silence, coffee amplifies its voice.",
      "Within every cup lies an endless cosmos of untold stories.",
      "Coffee: the alchemist that turns dreams into reality.",
      "Every sip stirs a thought, every thought breathes a story.",
      "Philosophy blooms in wonder, nurtured by the warmth of coffee.",
      "Life’s richness is in deep brews and profound reflections."
    ],
    navbarLinks: [
      { href: "#divardan", label: "Coffee from the Wall" },
      { href: "#menu", label: "Menu" },
      { href: "#design", label: "Coffee Design" },
      { href: "#about", label: "About Us" }
    ]
  },
  az: {
    title: "Qəhvənin Fəlsəfəs",
    moods: ["Düşüncəli", "Sakit", "Təlimatçı", "İlhamverici", "Ruhlandırıcı"],
    quotes: [
      "Ruh səssizcə pıçıldayır, qəhvə onun səsini gücləndirir.",
      "Hər fincanda saysız-hesabsız nağıllar gizlidir.",
      "Qəhvə — yuxuları gerçəyə çevirən sehrbazdır.",
      "Hər yudumda bir düşüncə, hər düşüncədə bir nağıl nəfəs alır.",
      "Fəlsəfə heyranlıqda açar çiçək, qəhvə isə onun istiliyidir.",
      "Həyatın dərinliyi — zəngin dadlarda və ruh dolu fikirlərdədir."
    ],
    navbarLinks: [
      { href: "#divardan", label: "Divardan Qəhvə" },
      { href: "#menu", label: "Menyu" },
      { href: "#design", label: "Qəhvə Dizaynı" },
      { href: "#about", label: "Haqqımızda" }
    ]
  }
};

const carouselImages = [
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",  
  "https://images.unsplash.com/photo-1523475496153-3f37062f9ec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",  
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",  
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"   
];


export default function SoulIntro() {
  const [lang, setLang] = useState('az');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMood, setSelectedMood] = useState("");

  const { title, moods, quotes, navbarLinks } = translations[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function changeLanguage(newLang) {
    setLang(newLang);
    setSelectedMood("");  // mood sıfırla
  }

  return (
    <div className={styles.container}>
      <Navbar lang={lang} links={navbarLinks} changeLanguage={changeLanguage} />

      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselImage} ${index === currentSlide ? styles.carouselImageVisible : styles.carouselImageHidden}`}
        >
          <img src={image} alt={`Slide ${index}`} className={styles.bgImage} />
          <div className={styles.overlay}></div>
        </div>
      ))}

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.quote}>{quotes[currentSlide]}</p>

        <div className={styles.moodButtons}>
          {moods.map((mood, i) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`${styles.moodButton} ${selectedMood === mood ? styles.moodButtonSelected : ''}`}
            >
              <span style={{ marginRight: '8px' }}>{emojis[i]}</span>
              {mood}
            </button>
          ))}
        </div>

        <div
          className={styles.bounceButton}
          onClick={() => document.getElementById('daily-thought')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg className={styles.downIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className={styles.slideIndicators}>
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${styles.slideIndicator} ${index === currentSlide ? styles.slideIndicatorActive : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
