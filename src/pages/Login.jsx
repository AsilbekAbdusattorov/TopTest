import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [nickname, setNickname] = useState(""); // Foydalanuvchi nickname'ini saqlash
  const [password, setPassword] = useState(""); // Foydalanuvchi parolini saqlash
  const [error, setError] = useState(""); // Xato xabarini ko'rsatish uchun
  const [loading, setLoading] = useState(false); // Yuklanish holati
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // LocalStorage'dan foydalanuvchi ma'lumotlarini olish
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Foydalanuvchini nickname orqali topish
    const user = allUsers.find((user) => user.nickname === nickname);

    // Kirish ma'lumotlarini tekshirish
    if (user && user.password === password) {
      localStorage.setItem("authToken", "dummy-auth-token"); // Auth tokenni saqlash
      alert("Tizimga muvaffaqiyatli kirdingiz!");
      navigate("/"); // Muvaffaqiyatli kirganidan so'ng bosh sahifaga yo'naltirish
    } else {
      setError("Nickname yoki parol noto'g'ri!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 via-green-300 to-green-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Tizimga kirish
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

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
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Yuklanmoqda..." : "Tizimga kirish"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Hali tizimda ro'yxatdan o'tmaganmisiz?{' '}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
