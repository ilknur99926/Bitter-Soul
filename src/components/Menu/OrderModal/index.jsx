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
  setOrderPlaced
}) {
  const validateEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone) => /^\+?[0-9\s-]{7,15}$/.test(phone);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;

if (!name || !email || !phone || !address || !validateEmail(email) || !validatePhone(phone)) {
  console.log('Validation failed:', { name, email, phone, address });
  alert('Zəhmət olmasa bütün sahələri düzgün doldurun.');
  return;
}


 try {
  const res = await fetch('https://bitter-soul-backend.onrender.com/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...formData, cart })
  });

  if (!res.ok) {
    console.error('Server error:', res.status);
    alert('Sifarişi göndərmək alınmadı. Server cavabı: ' + res.status);
    return;
  }
} catch (err) {
  console.error('Sifariş göndərilə bilmədi:', err);
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
      payment: 'cash'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form onSubmit={handleOrderSubmit} className="bg-[oklch(97%_0.08_30)] text-[oklch(30%_0.1_20)] w-full max-w-sm rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">📋 {t.orderForm}</h3>

        <input required placeholder={t.namePlaceholder} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="mb-2 w-full px-3 py-2 border rounded" />
        <input required type="email" placeholder={t.emailPlaceholder} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="mb-2 w-full px-3 py-2 border rounded" />
        <input required placeholder={t.phonePlaceholder} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="mb-2 w-full px-3 py-2 border rounded" />
        <input required placeholder={t.addressPlaceholder} value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className="mb-2 w-full px-3 py-2 border rounded" />
        <textarea placeholder={t.notesPlaceholder} value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} className="mb-2 w-full px-3 py-2 border rounded" />

        <div className="mb-3">
          <label className="block mb-1 font-medium">{t.deliveryType}:</label>
          <label className="block"><input type="radio" name="delivery" value="pickup" checked={formData.delivery === 'pickup'} onChange={e => setFormData({ ...formData, delivery: e.target.value })} /> {t.pickup}</label>
          <label className="block"><input type="radio" name="delivery" value="delivery" checked={formData.delivery === 'delivery'} onChange={e => setFormData({ ...formData, delivery: e.target.value })} /> {t.delivery}</label>
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">{t.paymentMethod}:</label>
          <label className="block"><input type="radio" name="payment" value="cash" checked={formData.payment === 'cash'} onChange={e => setFormData({ ...formData, payment: e.target.value })} /> {t.cash}</label>
          <label className="block"><input type="radio" name="payment" value="card" checked={formData.payment === 'card'} onChange={e => setFormData({ ...formData, payment: e.target.value })} /> {t.card}</label>
          <label className="block"><input type="radio" name="payment" value="online" checked={formData.payment === 'online'} onChange={e => setFormData({ ...formData, payment: e.target.value })} /> {t.online}</label>
        </div>

        <div className="flex justify-between mt-4">
          <button type="button" onClick={() => { setShowOrderModal(false); setShowCartModal(true); }} className="px-4 py-2 bg-gray-300 rounded">{t.cancel}</button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">{t.submitOrder}</button>
        </div>
      </form>
    </div>
  );
}
