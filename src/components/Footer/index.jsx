'use client';

import { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa6';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const footerRef = useRef();

  const isEnglish = language === 'en';

  const content = {
    az: {
      brand: 'Bitter Soul',
      slogan: 'Hər fincanda bir həqiqət, hər yudumda bir fəlsəfə. Qəhvə içmək sadəcə içmək deyil, düşünmək və hiss etməkdir.',
      links: ['Günün Düşüncəsi', 'Divardan Qəhvə', 'Menyu', 'Haqqımızda'],
      contact: {
        title: 'Əlaqə',
        address: '📍 Nizami küçəsi 123, Bakı, Azərbaycan',
        phone: '📞 +994 12 345 67 89',
        email: '✉️ info@soulcafe.az',
        hours: '⏰ 08:00 – 22:00 (Hər gün)'
      },
      newsletter: {
        title: 'Xəbər Bülleteni',
        desc: 'Yeni məhsullar və fəlsəfi düşüncələr üçün qeydiyyatdan keçin',
        placeholder: 'E-mail ünvanınız',
        button: 'Qeydiyyat',
        emptyError: 'Zəhmət olmasa e-mail ünvanınızı yazın.',
        success: 'Qeydiyyat üçün təşəkkür edirik!'
      },
      quote: '“Qəhvə sadəcə içki deyil, düşüncənin və ruhun qidası”',
      legal: 'Bütün hüquqlar qorunur.',
      privacy: 'Məxfilik Siyasəti',
      terms: 'İstifadə Şərtləri',
      backToTop: 'Yuxarı qalx'
    },
    en: {
      brand: 'Bitter Soul',
      slogan: 'In every cup, there is truth; in every sip, a philosophy. Coffee is not just a drink — it’s a reflection and a feeling.',
      links: ['Daily Thought', 'Wall Coffee', 'Menu', 'About'],
      contact: {
        title: 'Contact',
        address: '📍 Nizami Street 123, Baku, Azerbaijan',
        phone: '📞 +994 12 345 67 89',
        email: '✉️ info@soulcafe.az',
        hours: '⏰ 08:00 – 22:00 (Every day)'
      },
      newsletter: {
        title: 'Newsletter',
        desc: 'Sign up for new releases and philosophical reflections',
        placeholder: 'Your email address',
        button: 'Subscribe',
        emptyError: 'Please enter your email.',
        success: 'Thank you for subscribing!'
      },
      quote: '“Coffee is not just a drink, it’s food for thought and soul”',
      legal: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      backToTop: 'Back to top'
    }
  };

  const t = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollBtn(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#733900] text-yellow-200 px-6 pt-12 pb-6 text-sm font-serif relative fade-in transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Slogan */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-yellow-100">{t.brand}</span>
          </div>
          <p className="mb-4">{t.slogan}</p>
          <div className="flex gap-4 text-xl text-yellow-300">
            <FaTwitter className="hover:text-yellow-100 cursor-pointer" />
            <FaPinterest className="hover:text-yellow-100 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-100 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4 text-yellow-100">
            {isEnglish ? 'Quick Links' : 'Sürətli Keçidlər'}
          </h4>
          <ul className="space-y-2">
            <li><a href="#daily" className="hover:underline">{t.links[0]}</a></li>
            <li><a href="#wall" className="hover:underline">{t.links[1]}</a></li>
            <li><a href="#menu" className="hover:underline">{t.links[2]}</a></li>
            <li><a href="#about" className="hover:underline">{t.links[3]}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-yellow-100">{t.contact.title}</h4>
          <ul className="space-y-2">
            <li>{t.contact.address}</li>
            <li>{t.contact.phone}</li>
            <li>{t.contact.email}</li>
            <li>{t.contact.hours}</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 text-yellow-100">{t.newsletter.title}</h4>
          <p className="mb-3">{t.newsletter.desc}</p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              className="px-3 py-2 rounded-l-md bg-[#9b4700] text-white placeholder-yellow-300 focus:outline-none"
            />
            <button
              onClick={() => {
                if (!email.trim()) {
                  setMessage(t.newsletter.emptyError);
                } else {
                  setMessage(t.newsletter.success);
                  setEmail('');
                }
              }}
              className="px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md"
            >
              {t.newsletter.button}
            </button>
          </div>
          {message && <p className="mt-2 text-xs text-yellow-300">{message}</p>}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-yellow-600 pt-6 text-center">
        <p className="italic mb-2">{t.quote}</p>
        <p className="text-xs text-yellow-400">
          © 2025 {t.brand}. {t.legal} | <a href="#" className="underline">{t.privacy}</a> | <a href="#" className="underline">{t.terms}</a>
        </p>
      </div>

      {showScrollBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition-opacity duration-500 animate-fade-in z-50"
        >
          ⬆ {t.backToTop}
        </button>
      )}
    </footer>
  );
}
