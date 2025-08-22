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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-gradient-to-br from-[#3b2f2f] to-[#2a1f1f] text-amber-100 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={() => setShowCartModal(false)}
          className="absolute top-3 right-3 text-xl font-bold text-amber-300 hover:text-red-400 transition"
        >
          ✕
        </button>

        <h3 className="text-2xl font-extrabold mb-6 text-center">🛒 {t.cart}</h3>

        {cart.length === 0 ? (
          <p className="text-center italic">{t.emptyCart}</p>
        ) : (
          <>
            {/* Cart items */}
            <ul className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-amber-800 pb-3"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <div className="text-sm text-amber-300">
                      {item.quantity} × {item.price.toFixed(2)} ₼
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="w-8 h-8 flex items-center justify-center bg-amber-700 hover:bg-amber-600 text-white rounded-full transition"
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="w-8 h-8 flex items-center justify-center bg-amber-700 hover:bg-amber-600 text-white rounded-full transition"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="ml-2 text-red-400 hover:text-red-600 transition"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Delivery info */}
            {formData.delivery === "delivery" && (
              <div className="flex justify-between mb-3 text-amber-200">
                <span>{t.delivery}</span>
                <span>+2.00 ₼</span>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between items-center mb-6 text-lg">
              <span className="font-bold">{t.total}</span>
              <span className="text-xl font-extrabold text-amber-400">
                {totalPrice.toFixed(2)} ₼
              </span>
            </div>
          </>
        )}

        {/* Action buttons */}
        <div className="flex justify-between gap-3">
          <button
            onClick={() => setShowCartModal(false)}
            className="flex-1 py-2 bg-stone-600 hover:bg-stone-500 text-white rounded-lg shadow transition"
          >
            {t.continue}
          </button>
          <button
            onClick={() => {
              setShowCartModal(false);
              setShowOrderModal(true);
            }}
            className="flex-1 py-2 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-lg shadow transition disabled:opacity-50"
            disabled={cart.length === 0}
          >
            {t.order}
          </button>
        </div>
      </div>
    </div>
  );
}
