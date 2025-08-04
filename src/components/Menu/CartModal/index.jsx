export default function CartModal({
  cart,
  t,
  formData,
  totalPrice,
  setShowCartModal,
  setShowOrderModal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-[oklch(95%_0.1_30)] text-[oklch(25%_0.1_20)] rounded-xl p-6 w-full max-w-md shadow-xl relative">
        <button onClick={() => setShowCartModal(false)} className="absolute top-2 right-3 text-xl font-bold">✕</button>
        <h3 className="text-2xl font-bold mb-4">🛒 {t.cart}</h3>
        {cart.length === 0 ? (
          <p>{t.emptyCart}</p>
        ) : (
          <>
            <ul className="space-y-3 mb-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <div className="text-sm">{item.quantity} × {item.price.toFixed(2)} ₼</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQuantity(index)} className="px-2 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(index)} className="px-2 bg-gray-200 rounded">+</button>
                    <button onClick={() => removeFromCart(index)} className="text-red-500">✕</button>
                  </div>
                </li>
              ))}
            </ul>
            {formData.delivery === 'delivery' && (
              <div className="flex justify-between mb-2">
                <span>{t.delivery}</span>
                <span>+2.00 ₼</span>
              </div>
            )}
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">{t.total}</span>
              <span className="text-lg font-semibold">{totalPrice.toFixed(2)} ₼</span>
            </div>
          </>
        )}
        <div className="flex justify-between">
          <button onClick={() => setShowCartModal(false)} className="px-4 py-2 bg-gray-300 rounded">{t.continue}</button>
          <button
            onClick={() => { setShowCartModal(false); setShowOrderModal(true); }}
            className="px-4 py-2 bg-green-600 text-white rounded"
            disabled={cart.length === 0}
          >
            {t.order}
          </button>
        </div>
      </div>
    </div>
  );
}
