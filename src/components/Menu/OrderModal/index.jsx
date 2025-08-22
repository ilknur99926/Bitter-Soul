'use client';

import { useState } from 'react';

export default function OrderModal({
  t,
  formData,
  setFormData,
  setShowOrderModal,
  setShowCartModal,
  cart,
  setCart,
  setOrderPlaced,
}) {
  const validateEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone) =>
    /^\+?[0-9\s-]{7,15}$/.test(phone);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !validateEmail(email) ||
      !validatePhone(phone)
    ) {
      alert('Zəhmət olmasa bütün sahələri düzgün doldurun.');
      return;
    }

    try {
      const res = await fetch(
        'https://bitter-soul-backend.onrender.com/api/order',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, cart }),
        }
      );

      if (!res.ok) {
        alert('Sifarişi göndərmək alınmadı. Server cavabı: ' + res.status);
        return;
      }
    } catch (err) {
      alert('Sifarişi göndərmək zamanı xəta baş verdi.');
      return;
    }

    setShowOrderModal(false);
    setTimeout(() => {
      setOrderPlaced(true);
      setTimeout(() => setOrderPlaced(false), 3000);
    }, 300);

    setCart([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
      delivery: 'pickup',
      payment: 'cash',
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
     <form
    onSubmit={handleOrderSubmit}
    className="relative bg-gradient-to-br from-[#3b2f2f] to-[#2a1f1f] 
               text-amber-100 w-[500px] h-[600px]
               rounded-2xl shadow-2xl p-6 flex flex-col"
  >
    <button
      type="button"
      onClick={() => setShowOrderModal(false)}
      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 hover:bg-black/40
                 flex items-center justify-center text-amber-100 text-xl transition"
      aria-label="Close"
    >
      ✕
    </button>

    <h3 className="text-2xl font-extrabold mb-6 text-center border-b border-amber-700 pb-2">
      📋 {t.orderForm}
    </h3>
        <input
          required
          placeholder={t.namePlaceholder}
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="mb-3 w-full px-4 py-2 rounded-lg bg-[#2d2420] border border-amber-700
                     focus:ring-2 focus:ring-amber-400 focus:outline-none"
        />

        <input
          required
          type="email"
          placeholder={t.emailPlaceholder}
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="mb-3 w-full px-4 py-2 rounded-lg bg-[#2d2420] border border-amber-700
                     focus:ring-2 focus:ring-amber-400 focus:outline-none"
        />

        <input
          required
          placeholder={t.phonePlaceholder}
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="mb-3 w-full px-4 py-2 rounded-lg bg-[#2d2420] border border-amber-700
                     focus:ring-2 focus:ring-amber-400 focus:outline-none"
        />

        <input
          required
          placeholder={t.addressPlaceholder}
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="mb-3 w-full px-4 py-2 rounded-lg bg-[#2d2420] border border-amber-700
                     focus:ring-2 focus:ring-amber-400 focus:outline-none"
        />
        <div className="mb-5">
          <p className="font-semibold mb-2">{t.deliveryType}:</p>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={formData.delivery === 'pickup'}
              onChange={(e) =>
                setFormData({ ...formData, delivery: e.target.value })
              }
            />
            {t.pickup}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="delivery"
              checked={formData.delivery === 'delivery'}
              onChange={(e) =>
                setFormData({ ...formData, delivery: e.target.value })
              }
            />
            {t.delivery}
          </label>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">{t.paymentMethod}:</p>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={formData.payment === 'cash'}
              onChange={(e) =>
                setFormData({ ...formData, payment: e.target.value })
              }
            />
            {t.cash}
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={formData.payment === 'card'}
              onChange={(e) =>
                setFormData({ ...formData, payment: e.target.value })
              }
            />
            {t.card}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={formData.payment === 'online'}
              onChange={(e) =>
                setFormData({ ...formData, payment: e.target.value })
              }
            />
            {t.online}
          </label>
        </div>
        <div className="flex justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              setShowOrderModal(false);
              setShowCartModal(true);
            }}
            className="flex-1 py-2 bg-stone-600 hover:bg-stone-500 rounded-lg shadow text-white transition"
          >
            {t.cancel}
          </button>
          <button
            type="submit"
            className="flex-1 py-2 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-lg shadow transition"
          >
            {t.submitOrder}
          </button>
        </div>
      </form>
    </div>
  );
}