'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import drinks from './drinksData';
import DrinkCard from './DrinkCard';
import CartModal from './CartModal';
import OrderModal from './OrderModal';
import OrderSuccess from './OrderSuccess';
import DrinkPreviewModal from './DrinkPreviewModal';

export default function Menu() {
  const { language: lang } = useLanguage();

  const [filter, setFilter] = useState(drinks[lang].categories[0]);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestion, setSuggestion] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    delivery: 'pickup',
    payment: 'cash'
  });

  const suggestionsList = {
    az: [
      'Karamelli Latte – həyatın şirin tərəfini unutma!',
      'Espresso – sadə və güclü seçim!',
      'Türk Qəhvəsi – köklərinə qayıt!',
      'Americano – günə enerjili başla!',
      'Macchiato – fərqli olmağın dadı burada!'
    ],
    en: [
      'Caramel Latte – don’t forget the sweet side of life!',
      'Espresso – a simple and strong choice!',
      'Turkish Coffee – return to your roots!',
      'Americano – start your day full of energy!',
      'Macchiato – the taste of being different!'
    ]
  };

  useEffect(() => {
    const langSuggestions = suggestionsList[lang];
    const randomIndex = Math.floor(Math.random() * langSuggestions.length);
    setSuggestion(langSuggestions[randomIndex]);
    setFilter(drinks[lang].categories[0]);
  }, [lang]);

  const translations = {
    az: {
      menuTitle: 'Menyu',
      cart: 'Səbət',
      addToCart: 'Səbətə əlavə et',
      emptyCart: 'Səbət boşdur',
      total: 'Cəm:',
      continue: 'Alış-verişə davam et',
      order: 'Sifariş et',
      orderForm: 'Sifariş Formu',
      namePlaceholder: 'Ad və soyad',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Telefon',
      addressPlaceholder: 'Ünvan',
      notesPlaceholder: 'Əlavə qeydlər',
      deliveryType: 'Sifariş növü',
      pickup: '🏃‍♂️ Özüm götürəcəm',
      delivery: '🚚 Çatdırılma (+2₼)',
      paymentMethod: 'Ödəmə üsulu',
      cash: '💵 Nəğd',
      card: '💳 Kart',
      online: '🌐 Online',
      cancel: '❌ Ləğv et',
      submitOrder: '✅ Sifariş et',
      orderSuccess: 'Sifarişiniz uğurla qəbul edildi!',
      orderThanks: 'Tezliklə sizinlə əlaqə saxlanacaq. Təşəkkür edirik!',
      suggestion: 'Bugünkü tövsiyəmiz:'
    },
    en: {
      menuTitle: 'Menu',
      cart: 'Cart',
      addToCart: 'Add to Cart',
      emptyCart: 'Cart is empty',
      total: 'Total:',
      continue: 'Continue',
      order: 'Order',
      orderForm: 'Order Form',
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone',
      addressPlaceholder: 'Address',
      notesPlaceholder: 'Additional notes',
      deliveryType: 'Delivery Type',
      pickup: '🏃‍♂️ Pickup',
      delivery: '🚚 Delivery (+2₼)',
      paymentMethod: 'Payment Method',
      cash: '💵 Cash',
      card: '💳 Card',
      online: '🌐 Online',
      cancel: '❌ Cancel',
      submitOrder: '✅ Submit Order',
      orderSuccess: 'Your order has been received!',
      orderThanks: 'We will contact you shortly. Thank you!',
      suggestion: "Today's suggestion:"
    }
  };

  const t = translations[lang];
  const items = drinks[lang].items;

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === drinks[lang].categories[0] || item.type === filter)
  );

  const validateEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone) => /^\+?[0-9\s-]{7,15}$/.test(phone);

  const addToCart = (item) => {
    const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    } else {
      removeFromCart(index);
    }
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => favorites.includes(id);
  const getRating = (id) => ratings[id] || 0;
  const onRate = (id, value) => setRatings({ ...ratings, [id]: value });

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + (formData.delivery === 'delivery' ? 2 : 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;
    if (!name || !email || !phone || !address || !validateEmail(email) || !validatePhone(phone)) return;
    setShowOrderModal(false);
    setTimeout(() => {
      setOrderPlaced(true);
      setTimeout(() => setOrderPlaced(false), 3000);
    }, 300);
    setCart([]);
    setFormData({ name: '', email: '', phone: '', address: '', notes: '', delivery: 'pickup', payment: 'cash' });
  };

  return (
    <section id="menu" className="py-20 px-4 bg-[oklch(95%_0.05_66.29)] text-[oklch(30%_0.05_66.29)] font-serif">
      <h2 className="text-4xl font-bold text-center mb-8">{t.menuTitle}</h2>
      <div className="text-center italic text-sm mb-4">
        {t.suggestion} <span className="font-semibold">{suggestion}</span>
      </div>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="🔍 Axtar..."
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {drinks[lang].categories.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full font-medium transition duration-300 shadow-md ${filter === type
              ? 'bg-[oklch(60%_0.15_40)] text-white scale-105'
              : 'bg-[oklch(40%_0.1_30)] text-white hover:bg-[oklch(60%_0.15_40)] hover:scale-105'}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <DrinkCard
            key={item.id}
            item={item}
            t={t}
            addToCart={addToCart}
            setSelectedItem={setSelectedItem}
            toggleFavorite={() => toggleFavorite(item.id)}
            isFavorite={isFavorite(item.id)}
            rating={getRating(item.id)}
            onRate={(val) => onRate(item.id, val)}
          />
        ))}
      </div>
      <button
        onClick={() => setShowCartModal(true)}
        className="fixed bottom-6 right-6 z-40 bg-[oklch(70%_0.15_40)] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        🛒 {t.cart} ({cart.reduce((acc, item) => acc + item.quantity, 0)}) - {totalPrice.toFixed(2)} ₼
      </button>
      {showCartModal && (
        <CartModal
          cart={cart}
          t={t}
          formData={formData}
          totalPrice={totalPrice}
          setShowCartModal={setShowCartModal}
          setShowOrderModal={setShowOrderModal}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      )}
      {selectedItem && (
        <DrinkPreviewModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          addToCart={addToCart}
          t={t}
        />
      )}
      {showOrderModal && (
        <OrderModal
          t={t}
          formData={formData}
          setFormData={setFormData}
          handleOrderSubmit={handleOrderSubmit}
          setShowOrderModal={setShowOrderModal}
          setShowCartModal={setShowCartModal}
        />
      )}
      {orderPlaced && <OrderSuccess t={t} />}
    </section>
  );
}
