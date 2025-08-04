'use client';

import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

export default function DrinkPreviewModal({ item, onClose, addToCart, t }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fade-in">


        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          <FaXmark />
        </button>


        <div className="relative w-full h-60 rounded-lg overflow-hidden mb-4">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </div>


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
