import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
          TopTests
        </h1>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          TopTests sayti orqali 1-sinfdan 11-sinfgacha bo'lgan testlar bilan
          bilimlaringizni sinab ko'ring va yangi mavzularni o'rganing.
          Platformamiz o'quvchilarga o'ziga xos testlarni taqdim etadi,
          muvaffaqiyatli natijalar olish uchun boshlash juda oson.
        </p>
        <div className="mt-8 p-8 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-opacity-40 hover:from-indigo-900 hover:to-gray-900 rounded-3xl shadow-2xl max-w-lg mx-auto transition-all duration-300 ease-in-out">
          <p className="text-4xl font-semibold text-white">
            Tahminiy Testlar Soni:{" "}
            <span className="text-yellow-400 text-5xl font-bold">200,000+</span>
          </p>
          <p className="text-lg mt-4 text-white opacity-85">
            Sizni kutayotgan testlar soni juda ko'p! O'qishni boshlang va
            bilimlaringizni sinab ko'ring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
