export default function OrderSuccess({ t }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[oklch(96%_0.08_30)] text-[oklch(30%_0.15_25)] rounded-xl p-6 text-center shadow-2xl animate-bounce scale-95">
        <div className="text-5xl mb-4">☕😊</div>
        <p className="text-xl font-semibold">{t.orderSuccess}</p>
        <p className="mt-2 text-sm italic">{t.orderThanks}</p>
      </div>
    </div>
  );
}