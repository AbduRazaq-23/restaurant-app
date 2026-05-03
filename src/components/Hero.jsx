import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center bg-black/40 p-8 rounded-xl backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Delicious Food, Delivered Fast 🍔
        </motion.h1>

        <p className="mt-4 text-gray-200">Order now or reserve your table</p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition">
            Order Now
          </button>

          <button
            onClick={() =>
              document
                .getElementById("reservation")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Book Table
          </button>
        </div>
      </div>
    </div>
  );
}
