import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [nickname, setNickname] = useState(""); // Email o'rniga nickname
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Sahifalarni navigatsiya qilish uchun

  const handleSubmit = (e) => {
    e.preventDefault();

    // LocalStorage'dan foydalanuvchi ma'lumotlarini olish
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Foydalanuvchini nickname orqali topish
    const user = allUsers.find((user) => user.nickname === nickname);

    // Kirish ma'lumotlarini tekshirish
    if (user && user.password === password) {
      alert("Tizimga muvaffaqiyatli kirdingiz!");
      navigate("/"); // Muvaffaqiyatli kirganidan so'ng bosh sahifaga yo'naltirish
    } else {
      alert("Nickname yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 via-green-300 to-green-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Tizimga kirish
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nickname */}
          <div>
            <label htmlFor="nickname" className="block text-gray-700 font-medium">
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nickname kiriting"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Parolni kiriting"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Tizimga kirish
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Hali tizimda ro'yxatdan o'tmaganmisiz?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Ro'yxatdan o'ting
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
