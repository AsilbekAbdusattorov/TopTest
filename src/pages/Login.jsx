// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Email va parolni tekshirish
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email manzilingiz noto‘g‘ri!");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      setIsLoading(false);
      return;
    }

    try {
      // Login so'rovi
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setError("");  // Xatolikni tozalash
        // Tokenni va foydalanuvchi ma'lumotlarini saqlash
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        navigate("/home"); // Kirishdan keyin bosh sahifaga o'tish
      } else {
        setError(data.error || "Xatolik yuz berdi");
      }
    } catch (err) {
      setError("Tarmoq xatosi: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-indigo-900 to-black text-white">
      <div className="bg-black bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-6">
          Kirish
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              placeholder="Email kiriting"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              placeholder="Parol kiriting"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium ${
              isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-800"
            } text-white`}
          >
            {isLoading ? "Yuklanmoqda..." : "Kirish"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-300">
            Hali ro'yxatdan o'tmaganmisiz?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:text-blue-800"
            >
              Ro'yxatdan o'ting
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
