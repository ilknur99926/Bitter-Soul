import { motion } from "framer-motion";

export default function OrderSuccess({ t }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-sm w-full"
      >
        <motion.div
          initial={{ rotate: -30, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 10 }}
          className="text-6xl mb-4"
        >
          ☕✨
        </motion.div>
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {t.orderSuccess}
        </h2>
        <p className="text-gray-600 italic">{t.orderThanks}</p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-[2px] bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400 mt-6 rounded-full"
        />
      </motion.div>
    </div>
  );
}
