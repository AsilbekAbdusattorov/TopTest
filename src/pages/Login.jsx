import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../Login-baza";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Foydalanuvchini qidirish
    const user = users.find(
      (user) => user.nickname === nickname && user.password === password
    );

    if (user) {
      localStorage.setItem("authToken", "dummy-auth-token");
      alert("Tizimga muvaffaqiyatli kirdingiz!");
      navigate("/"); // Home sahifasiga yo'naltirish
    } else {
      setError("Nickname yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Tizimga kirish
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nickname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Nickname kiriting"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Parolni kiriting"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-300"
          >
            Tizimga kirish
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Akkauntingiz yo'qmi? 
          <span
            onClick={() => navigate("/signup")}
            className="text-green-500 cursor-pointer hover:underline"
          >
            Ro'yxatdan o'tish
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
