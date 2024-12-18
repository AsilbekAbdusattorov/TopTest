import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../Login-baza";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email va parol shartlarini tekshirish
    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email manzilingiz noto‘g‘ri!");
      return;
    }

    // Nickname yoki email mavjudligini tekshirish
    const existingUser = users.find(
      (user) => user.nickname === nickname || user.email === email
    );

    if (existingUser) {
      setError("Bu nickname yoki email allaqachon ishlatilgan!");
      return;
    }

    // Yangi foydalanuvchini qo'shish
    users.push({ nickname, email, password });
    console.log("Yangi foydalanuvchi qo'shildi:", users);

    // Xabar ko'rsatish va formani tozalash
    setSuccess("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    setNickname("");
    setEmail("");
    setPassword("");
    setError("");

    // 3 soniyadan keyin yo'naltirish
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Ro'yxatdan o'tish
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className={`w-full p-3 border ${
                error && nickname === "" ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="Nickname kiriting"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-3 border ${
                error && !email.includes("@") ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="Email kiriting"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full p-3 border ${
                error && password.length < 6 ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              placeholder="Parol kiriting"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Ro'yxatdan o'tish
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Akkauntingiz bormi?
          <span
            onClick={() => navigate("/Login")}
            className="text-green-500 cursor-pointer hover:underline ml-2"
          >
            Tizimga kirish
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
