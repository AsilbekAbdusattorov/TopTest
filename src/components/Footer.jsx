import React from "react";
import telegram from "../img/telegram.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-cyan-500 text-center rounded-b-lg shadow-2xl">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-white">Top-Tests.uz</h1>
          <p className="text-sm text-white mt-2">
            Sizning bilimlaringizni baholash va rivojlantirish uchun eng yaxshi
            test platformasi.
          </p>
        </div>
        <h2 className="text-lg font-semibold text-white mt-4 lg:mt-0">
          Created by Abdusattorov
        </h2>
        <div className="flex space-x-4 mt-6 lg:mt-0">
          <a
            href="https://t.me/Abdusattorov_Asilbek"
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition transform hover:rotate-6 shadow-lg hover:shadow-2xl"
          >
            <img className="w-6 h-6" src={telegram} alt="telegram-logo" />
          </a>
          <a
            href="https://www.instagram.com/abdusattorov_1307/"
            className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-125 transition transform hover:rotate-6 shadow-lg hover:shadow-2xl"
          >
            <img className="w-6 h-6" src={instagram} alt="instagram-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
