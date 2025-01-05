import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyCode = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const receivedEmail = location.state?.email || "";

  useEffect(() => {
    if (receivedEmail) {
      setEmail(receivedEmail);
    }
  }, [receivedEmail]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Tasdiqlash muvaffaqiyatli o'tdi!");
        navigate("/login");
      } else {
        setError(data.error || "Tasdiqlashda xatolik yuz berdi");
      }
    } catch (err) {
      setError("Tarmoq xatosi: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-indigo-900 to-black text-white">
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-6">
          Tasdiqlash
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Emailingizga tasdiqlash kodi yuborildi. Quyidagi kodni kiritishingiz kerak.
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
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
            <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-1">
              Tasdiqlash kodi
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              placeholder="Tasdiqlash kodini kiriting"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-800"} text-white`}
          >
            {isLoading ? "Tasdiqlanmoqda..." : "Tasdiqlash"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
