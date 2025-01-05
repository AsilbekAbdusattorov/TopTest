import React from "react";
import telegram from "../img/telegram.png";
import instagram from "../img/instagram.png";
import { useNavigate } from "react-router-dom";

const LoginHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-indigo-900 to-black text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col min-h-screen shadow-xl rounded-lg bg-opacity-90 backdrop-blur-md">
        {/* Header */}
        <header className="w-full py-6 px-8 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 shadow-2xl rounded-lg sticky top-0 z-10 flex justify-between items-center transform transition-all hover:scale-105">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
            Top Tests
          </h1>
          <nav className="flex space-x-6">
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-2xl"
              onClick={() => navigate("/Signup")}
            >
              Ro‘yxatdan o‘tish
            </button>
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:scale-110 hover:shadow-2xl"
              onClick={() => navigate("/login")}
            >
              Kirish
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-300 to-purple-500 text-transparent bg-clip-text drop-shadow-lg mt-6">
            Top Tests saytiga Xush Kelibsiz
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mt-4 text-gray-300">
            <span className="font-bold text-white">200,000+</span> testlar bilan
            barcha fanlardan bilimlaringizni sinang!
          </p>
          <p className="text-base sm:text-lg max-w-3xl mt-4 text-gray-400">
            <span className="font-extrabold text-white">Bu</span> sayt orqali
            siz nafaqat bilimlaringizni sinashingiz, balki eng yaxshi
            natijalarga erishish uchun mutaxassislar tomonidan tayyorlangan
            testlarni ham o‘rganishingiz mumkin.
          </p>
          <div className="flex flex-col items-center space-y-5 mt-5">
            <button
              className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-lg hover:bg-indigo-800 transition-all transform hover:scale-110 hover:shadow-2xl"
              onClick={() => navigate("/login")}
            >
              Kirish
            </button>
            <a
              href="https://t.me/TopTests_bot"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-2xl"
            >
              <img src={telegram} alt="Telegram Bot" className="w-6 h-6 mr-2" />
              Telegram Bot
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-gray-300 border-t border-gray-700 text-center rounded-b-lg shadow-2xl">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-semibold text-white">
                Top-Tests.uz
              </h1>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                Sizning bilimlaringizni baholash va rivojlantirish uchun eng
                yaxshi test platformasi.
              </p>
            </div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-300 mt-4 lg:mt-0">
              Created by Abdusattorov
            </h2>
            <div className="flex space-x-4 mt-6 lg:mt-0">
              <a
                href="https://t.me/Abdusattorov_Asilbek"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition transform hover:rotate-6 shadow-lg hover:shadow-2xl"
              >
                <img className="w-5 h-5 sm:w-6 sm:h-6" src={telegram} alt="telegram-logo" />
              </a>
              <a
                href="https://www.instagram.com/abdusattorov_1307/"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-125 transition transform hover:rotate-6 shadow-lg hover:shadow-2xl"
              >
                <img className="w-5 h-5 sm:w-6 sm:h-6" src={instagram} alt="instagram-logo" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginHome;
