'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  az: {
    title: 'Divardan Qəhvə',
    description: 'Yapon fəlsəfəsindən ilhamlanaraq yaradılan bu xidmət paylaşmaq və sosial məsuliyyəti artırmaq məqsədi daşıyır. Siz bir qəhvə alırsınız, ehtiyacı olan digər şəxs onu götürür.',
    give: '☕ Qəhvə Hədiyyə Et',
    take: '🎁 Qəhvə Götür',
    available: 'Mövcud Qəhvələr',
    taken: 'Götürülən Qəhvələr',
    total: 'Ümumi Paylaşım',
    heading: 'Mövcud Qəhvələr',
    takeBtn: 'Bu qəhvəni götür',
    selectCoffee: 'Qəhvə növünü seçin',
    writeMessage: 'Mesajınızı yazın',
    writeName: 'Adınızı yazın',
    submit: 'Təsdiqlə',
    thankYou: 'Təşəkkür edirik!',
    modalGiftTitle: '☕ Qəhvə Hədiyyə Et',
    modalTakeTitle: '🎁 Qəhvəni Götür',
    thanksMsg: 'Qəhvə uğurla götürüldü!',
    noCoffee: 'Hazırda götürülə biləcək qəhvə yoxdur.'
  },
  en: {
    title: 'Coffee from the Wall',
    description: 'Inspired by Japanese philosophy, this service aims to promote sharing and social responsibility. You buy a coffee, someone in need takes it.',
    give: '☕ Gift a Coffee',
    take: '🎁 Take a Coffee',
    available: 'Available Coffees',
    taken: 'Taken Coffees',
    total: 'Total Shared',
    heading: 'Available Coffees',
    takeBtn: 'Take this coffee',
    selectCoffee: 'Select coffee type',
    writeMessage: 'Write your message',
    writeName: 'Enter your name',
    submit: 'Submit',
    thankYou: 'Thank you!',
    modalGiftTitle: '☕ Gift a Coffee',
    modalTakeTitle: '🎁 Take a Coffee',
    thanksMsg: 'Coffee taken successfully!',
    noCoffee: 'No coffee available to take at the moment.'
  }
};

const coffeeTypes = ['Espresso', 'Cappuccino', 'Latte', 'Americano'];

export default function WallCoffee() {
  const { language } = useLanguage(); // Kontekstdən dili alırıq
  const t = translations[language];

  const [coffeeData, setCoffeeData] = useState([
    {
      name: 'Aynur',
      date: '2025-07-06',
      type: 'Espresso',
      message: 'Kiməsə xoş bir gün arzulayıram ☕'
    },
    {
      name: 'Rəşad',
      date: '2025-07-06',
      type: 'Cappuccino',
      message: 'Paylaşmaq xoşbəxtlik gətirir'
    }
  ]);

  const [giftMode, setGiftMode] = useState(false);
  const [takeMode, setTakeMode] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState('Espresso');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const totalGiven = coffeeData.length;
  const totalTaken = 1;
  const totalShared = totalGiven + totalTaken;

  const handleGift = () => {
    if (!name || !message) return;
    setCoffeeData([
      ...coffeeData,
      {
        name,
        date: new Date().toISOString().split('T')[0],
        type: selectedCoffee,
        message
      }
    ]);
    setName('');
    setMessage('');
    setGiftMode(false);
  };

  const handleTake = () => {
    if (!name || !message || coffeeData.length === 0) return;
    const updated = [...coffeeData];
    updated.shift();
    setCoffeeData(updated);
    setThankYouMessage(t.thanksMsg);
    setName('');
    setMessage('');
    setTakeMode(false);
    setTimeout(() => setThankYouMessage(''), 2000);
  };

  return (
    <section className="bg-green-50 min-h-screen py-20 px-4 text-center font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-3">🏯 {t.title}</h2>
      <p className="text-md md:text-lg max-w-2xl mx-auto text-green-700 mb-8">{t.description}</p>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        <button onClick={() => setGiftMode(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded shadow">{t.give}</button>
        <button onClick={() => setTakeMode(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow">{t.take}</button>
      </div>

      {(giftMode || takeMode) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{giftMode ? t.modalGiftTitle : t.modalTakeTitle}</h3>
            <input type="text" placeholder={t.writeName} value={name} onChange={e => setName(e.target.value)} className="w-full mb-3 p-2 border rounded" />
            {giftMode && (
              <select onChange={e => setSelectedCoffee(e.target.value)} className="w-full mb-3 p-2 border rounded">
                {coffeeTypes.map(type => <option key={type}>{type}</option>)}
              </select>
            )}
            <textarea placeholder={t.writeMessage} value={message} onChange={e => setMessage(e.target.value)} className="w-full mb-3 p-2 border rounded"></textarea>
            <div className="flex justify-between">
              <button onClick={() => { setGiftMode(false); setTakeMode(false); setName(''); setMessage(''); }} className="bg-gray-300 px-4 py-2 rounded">❌</button>
              <button onClick={giftMode ? handleGift : handleTake} className="bg-green-600 text-white px-4 py-2 rounded">✅ {t.submit}</button>
            </div>
          </div>
        </div>
      )}

      {thankYouMessage && (
        <div className="mb-10 text-green-800 font-semibold text-lg animate-bounce">{thankYouMessage}</div>
      )}

      <div className="flex justify-center flex-wrap gap-6 mb-12">
        <StatCard title={t.available} value={totalGiven} emoji="🍫" />
        <StatCard title={t.taken} value={totalTaken} emoji="🎉" />
        <StatCard title={t.total} value={totalShared} emoji="❤️" />
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6">{t.heading}</h3>

      <div className="flex flex-wrap justify-center gap-6">
        {coffeeData.length === 0 ? (
          <div className="bg-white p-6 rounded shadow text-gray-600 text-lg animate-pulse">
            <p>☕ {t.noCoffee}</p>
          </div>
        ) : (
          coffeeData.map((coffee, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg p-5 w-[300px] text-left border-t-4 border-emerald-400">
              <p className="text-lg font-bold text-emerald-600 mb-1">{coffee.name}</p>
              <p className="text-sm text-gray-500 mb-2">{coffee.date}</p>
              <p className="italic mb-4">“{coffee.message}”</p>
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full mb-3">{coffee.type}</span>
              <button onClick={() => setTakeMode(true)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-all duration-300">{t.takeBtn}</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function StatCard({ title, value, emoji }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 w-[180px]">
      <div className="text-2xl font-bold text-emerald-700 mb-1">{emoji} {value}</div>
      <div className="text-sm text-gray-700">{title}</div>
    </div>
  );
}
