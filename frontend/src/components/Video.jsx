import React from "react";
import { motion } from "framer-motion";

const points = [
  "Courses and Students",
  "Learning in the Right Direction",
  "Coming Soon with Exciting Content",
];

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        📽️ Courses Videos – Coming Soon!
      </motion.h1>

      <div className="space-y-4">
        {points.map((point, index) => (
          <motion.p
            key={index}
            className="text-lg md:text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 * index }}
          >
            👉 {point}
          </motion.p>
        ))}
      </div>

      <motion.p
        className="mt-10 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Stay tuned! Amazing learning videos are on the way. 🚀
      </motion.p>
    </div>
  );
};

export default Videos;

