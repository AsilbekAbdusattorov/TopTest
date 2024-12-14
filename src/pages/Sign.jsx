import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // Xatolik xabarini ko'rsatish uchun
  const [suggestedNicknames, setSuggestedNicknames] = useState([]); // Tavsiya etilgan nickname'lar
  const [isNicknameTaken, setIsNicknameTaken] = useState(false); // Nickname ishlatilganligini tekshirish
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "nickname") {
      checkNickname(value);
    }
  };

  const checkNickname = (nickname) => {
    // Nickname faqat raqamlar, _ va . belgilardan iborat bo'lishi kerak va kamida 5 belgidan iborat bo'lishi kerak
    const validNicknameRegex = /^[a-zA-Z0-9._]+$/;
    if (nickname.length < 5) {
      setError("Nickname kamida 5 belgidan iborat bo'lishi kerak!");
      setIsNicknameTaken(false);
      setSuggestedNicknames([]);
      return;
    }

    if (!validNicknameRegex.test(nickname)) {
      setError("Nickname faqat raqamlar, _ va . belgilaridan iborat bo'lishi kerak!");
      setIsNicknameTaken(false);
      setSuggestedNicknames([]);
      return;
    }

    setError(""); // Xatolikni tozalash

    // localStorage'dagi foydalanuvchilarni tekshirish
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const takenNicknames = allUsers.map((user) => user.nickname);

    if (takenNicknames.includes(nickname)) {
      setError("Bu nickname allaqachon ishlatilgan!");
      setIsNicknameTaken(true); // Nickname ishlatilganligini belgilash
      setSuggestedNicknames(generateSuggestedNicknames(nickname, takenNicknames));
    } else {
      setIsNicknameTaken(false); // Nickname ishlatilmagan
      setSuggestedNicknames([]);
    }
  };

  const generateSuggestedNicknames = (nickname, takenNicknames) => {
    const suggestions = [];
    for (let i = 1; suggestions.length < 4; i++) {
      // Nicknamega raqam qo'shib yangi nomlar yaratish
      const newNickname = `${nickname}${i}`;
      if (!takenNicknames.includes(newNickname)) {
        suggestions.push(newNickname);
      }
    }
    return suggestions;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parolni tekshirish (kamida 8 ta belgidan iborat bo'lishi kerak)
    if (formData.password.length < 8) {
      setError("Parol kamida 8 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    // Foydalanuvchi ma'lumotlarini localStorage'ga saqlash
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    allUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(allUsers));

    // Tizimga muvaffaqiyatli ro'yxatdan o'tganlik haqida xabar
    alert("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");

    // Bosh sahifaga yo'naltirish
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-500 via-blue-400 to-teal-300">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Ro'yxatdan o'tish
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nickname */}
          <div>
            <label htmlFor="nickname" className="block text-gray-700 font-semibold">
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Nickname kiriting"
            />
            {suggestedNicknames.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">Tavsiya etilgan nickname'lar:</p>
                <ul className="space-y-2">
                  {suggestedNicknames.map((nickname, index) => (
                    <li key={index} className="text-indigo-600 cursor-pointer hover:underline">
                      {nickname}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Email manzilingizni kiriting"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Parol
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Parolni kiriting"
            />
          </div>
          {error && <p className="text-red-600 text-center">{error}</p>}
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isNicknameTaken} // Nickname ishlatilgan bo'lsa, tugma disable bo'ladi
            className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ${isNicknameTaken ? "bg-gray-400 cursor-not-allowed" : ""}`}
          >
            Ro'yxatdan o'tish
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Tizimda allaqachon ro'yxatdan o'tganmisiz?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Tizimga kiring
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sign;
