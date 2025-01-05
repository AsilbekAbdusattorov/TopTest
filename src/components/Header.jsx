import React, { useState } from "react";
import telegram from "../img/telegram.png";

const Header = () => {
  // Modal states
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorType, setErrorType] = useState("");
  const [isCritical, setIsCritical] = useState(false);

  // Open/close modal functions
  const openDonateModal = () => setIsDonateModalOpen(true);
  const closeDonateModal = () => setIsDonateModalOpen(false);
  const openErrorModal = () => setIsErrorModalOpen(true);
  const closeErrorModal = () => setIsErrorModalOpen(false);

  // Handle error submission
  const handleErrorSubmit = async () => {
    const botToken = "7997507405:AAEiwz3KiO5QvxqQ9zxCt-6z7pbyPeH2NnY";
    const chatId = "-1002340580956";
    const message = `
📢 *Xatolik*:
🔖 *Fan*: ${errorTitle || "Noma'lum"}
🛠 *Xatolik turi*: ${errorType || "Noma'lum"}
📋 *Batafsil Malumot*: ${errorDescription || "Noma'lum"}
⚠️ *Bu muammo muhummi*: ${isCritical ? "Ha" : "y'q"}
    `;

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          message
        )}&parse_mode=Markdown`
      );
      alert("Malumot muvaffaqiyatli yuborildi!");
      closeErrorModal();
    } catch (err) {
      alert("Malumot yuborishda xato yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Donate Button */}
        <button
          className="flex items-center px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white text-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-gray-700 hover:shadow-xl transform hover:scale-105 group"
          onClick={openDonateModal}
        >
          {/* Tugma yuragi */}
          <span className="w-8 h-8 flex justify-center items-center">
            <svg
              className="w-6 h-6 text-white group-hover:text-red-500 transition-transform duration-500 group-hover:rotate-[360deg]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
          <span className="hidden sm:inline-block ml-3">Chin ko'ngildan</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Error Button */}
          <button
            className="flex items-center justify-center md:justify-start w-14 h-14 md:w-auto md:h-auto md:px-6 py-3 rounded-full bg-red-600 text-white text-lg font-medium shadow-lg transition-all duration-300 hover:bg-red-900 hover:shadow-xl transform hover:scale-105"
            onClick={openErrorModal}
          >
            <span>⚠️</span>
            <span className="hidden md:inline ml-2">Xatolik</span>
          </button>

          {/* Telegram Link */}
          <a
            href="https://t.me/Abdusattorov_Asilbek"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center mx-auto md:mx-0 w-14 h-14 md:w-14 md:h-14 md:hover:w-52 rounded-full bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900x shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 group"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900x">
              <img
                className="w-8 h-8 shadow-sm transition-transform duration-300 group-hover:scale-110"
                src={telegram}
                alt="Telegram Icon"
              />
            </div>
            <span className="absolute inset-y-0 left-16 flex items-center ml-10 opacity-0 text-white font-semibold text-lg transition-opacity duration-300 group-hover:opacity-100 md:opacity-0 md:pointer-events-none">
              Aloqa
            </span>
          </a>
        </div>
      </div>

      {/* Donate Modal */}
      {isDonateModalOpen && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="card-container relative p-6 rounded-lg shadow-lg">
            <button className="close-btn" onClick={closeDonateModal}>
              X
            </button>
            {/* Card */}
            <div className="card">
              {/* Front */}
              <div className="front relative bg-teal-900 text-white rounded-xl p-6 mb-4">
                <span className="block text-right font-bold text-xl">
                  Hamkorbank
                </span>
                <div className="set"></div>
                <p className="text-3xl font-mono text-yellow-400 mb-2">
                  9860 1606 0253 6759
                </p>
                <p className="text-xl text-yellow-400">XX / XX</p>
                <p className="text-xl text-yellow-400 mt-4">
                  Asilbek Abdusattorov
                </p>
                <span className="absolute bottom-4 right-4 px-3 py-1 text-yellow-400 bg-blue-900 rounded-md uppercase font-semibold">
                  Humo
                </span>
              </div>

              {/* Back */}
              <div className="back relative bg-teal-900 text-white rounded-xl p-6">
                <p className="text-xs uppercase mb-2">
                  Milliy banklararo protsessing markazi
                </p>
                <p className="text-xs mb-6">www.humocard.uz</p>
                <div className="w-40 h-8 bg-white mb-8"></div>
                <p className="text-xs uppercase">
                  Ushbu karta bankning mulkidir. Bank kartasi topilganida bankga
                  qaytarib berishingizni so'raymiz.
                </p>
                <p className="text-xs mt-2 uppercase">
                  Murojaat uchun <strong>(+998) 71 200 0888</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {isErrorModalOpen && (
  <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg w-96">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        onClick={closeErrorModal}
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        Test Xatosini Yuborish
      </h2>

      {/* Error Subject */}
      <div className="mb-4">
        <label
          className="block text-gray-300 font-medium mb-2"
          htmlFor="error-title"
        >
          Xatolik bo'lgan fan
        </label>
        <input
          type="text"
          id="error-title"
          className="w-full p-2 border border-gray-500 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-600"
          value={errorTitle}
          onChange={(e) => setErrorTitle(e.target.value)}
          placeholder="Fan nomini kiriting"
        />
      </div>

      {/* Error Type */}
      <div className="mb-4">
        <label
          className="block text-gray-300 font-medium mb-2"
          htmlFor="error-type"
        >
          Xatolik turi
        </label>
        <input
          type="text"
          id="error-type"
          className="w-full p-2 border border-gray-500 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-600"
          value={errorType}
          onChange={(e) => setErrorType(e.target.value)}
          placeholder="Xatolik turini kiriting"
        />
      </div>

      {/* Detailed Information */}
      <div className="mb-4">
        <label
          className="block text-gray-300 font-medium mb-2"
          htmlFor="error-description"
        >
          Batafsil malumot
        </label>
        <textarea
          id="error-description"
          rows="4"
          className="w-full p-2 border border-gray-500 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-600"
          value={errorDescription}
          onChange={(e) => setErrorDescription(e.target.value)}
          placeholder="Xatolik haqida batafsil ma'lumot kiriting"
        />
      </div>

      {/* Critical Checkbox */}
      <div className="mb-6">
        <label className="flex items-center text-gray-300">
          <input
            type="checkbox"
            checked={isCritical}
            onChange={() => setIsCritical(!isCritical)}
            className="mr-2 focus:ring-indigo-600"
          />
          <span>Xatolik muhimmi?</span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleErrorSubmit}
          className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 transition-all"
        >
          Yuborish
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Header;
