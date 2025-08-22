import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaHeart, FaFire } from "react-icons/fa6";

export default function DrinkCard({
  item,
  addToCart,
  setSelectedItem,
  t,
  rating = 0,
  onRate,
  isFavorite,
  toggleFavorite
}) {
  return (
    <div
      onClick={() => setSelectedItem(item)}
      className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]"
    >
      {item.bestseller && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
          <FaFire className="text-yellow-300" /> Ən çox satılan
        </div>
      )}
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
        }}
        className="absolute top-3 right-3 text-xl z-10"
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-400 hover:text-red-500 transition-colors" />
        )}
      </div>
      <div className="relative w-full h-60">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
        <p className="text-sm italic mb-3">"{item.quote}"</p>
        <p className="text-base mb-2">{item.description}</p>
        <ul className="text-sm mb-3 list-disc list-inside">
          {item.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        {/* Reytinq */}
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((val) => (
            <FaStar
              key={val}
              onClick={(e) => {
                e.stopPropagation();
                onRate(val);
              }}
              className={`cursor-pointer text-lg ${
                val <= rating ? "text-yellow-400" : "text-gray-300"
              } hover:scale-110 transition-all`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">
            {item.price.toFixed(2)} ₼
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="px-4 py-1 rounded-full bg-[oklch(60%_0.15_40)] text-white font-medium hover:scale-105 transition-all duration-200"
          >
            {t.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
}
