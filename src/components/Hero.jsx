import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TopTest</h1>
        <p className="text-lg md:text-xl mb-8">
          TopTest sayti orqali 1-sinfdan 11-sinfgacha bo'lgan testlar bilan
          bilimlaringizni sinab ko'ring va yangi mavzularni o'rganing.
          Platformamiz o'quvchilarga o'ziga xos testlarni taqdim etadi,
          muvaffaqiyatli natijalar olish uchun boshlash juda oson.
        </p>
        <div className="mt-8 p-8 bg-gradient-to-r from-green-500 to-blue-500 bg-opacity-30 hover:from-blue-500 hover:to-green-500 rounded-xl shadow-xl max-w-lg mx-auto">
          <p className="text-3xl font-semibold text-white">
            Tahminiy Testlar Soni:{" "}
            <span className="text-yellow-400 text-4xl font-bold">200,000+</span>
          </p>
          <p className="text-lg mt-4 text-white opacity-80">
            Sizni kutayotgan testlar soni juda ko'p! O'qishni boshlang va
            bilimlaringizni sinab ko'ring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
