'use client';

import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

export default function DrinkPreviewModal({ item, onClose, addToCart, t }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 sm:p-6 animate-fade-in">

        {/* X çıxış düyməsi */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl bg-white/80 rounded-full w-9 h-9 flex items-center justify-center z-10"
        >
          <FaXmark />
        </button>

        {/* Şəkil */}
        <div className="relative w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden mb-4">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Mətn və məlumat */}
        <h2 className="text-2xl font-bold mb-1">{item.name}</h2>
        <p className="italic text-sm mb-3">"{item.quote}"</p>

        <p className="text-base mb-2">{item.description}</p>
        <ul className="text-sm mb-4 list-disc list-inside">
          {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{item.price.toFixed(2)} ₼</span>
          <button
            onClick={() => {
              addToCart(item);
              onClose();
            }}
            className="px-4 py-2 rounded-full bg-[oklch(60%_0.15_40)] text-white font-medium hover:scale-105 transition-all"
          >
            {t.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
}
