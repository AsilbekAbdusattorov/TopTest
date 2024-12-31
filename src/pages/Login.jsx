// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { users } from "../Login-baza";

// const Login = () => {
//   const [Username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Foydalanuvchini qidirish
//     const user = users.find(
//       (user) => user.Username === Username && user.password === password
//     );

//     if (user) {
//       localStorage.setItem("authToken", "dummy-auth-token");
//       alert("Tizimga muvaffaqiyatli kirdingiz!");
//       navigate("/"); // Home sahifasiga yo'naltirish
//     } else {
//       setError("Username yoki parol noto'g'ri!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
//           Tizimga kirish
//         </h2>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="Username"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="Username"
//               value={Username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               placeholder="Username kiriting"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Parol
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               placeholder="Parolni kiriting"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-300"
//           >
//             Tizimga kirish
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           Akkauntingiz yo'qmi? 
//           <span
//             onClick={() => navigate("/signup")}
//             className="text-green-500 cursor-pointer hover:underline ml-2"
//           >
//             Ro'yxatdan o'tish
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Email validatsiyasi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email manzilingiz noto‘g‘ri!");
      return;
    }

    // Parol uzunligini tekshirish
    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    try {
      // Backendga so'rov yuborish
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setError("");
        // Foydalanuvchini saqlash
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        navigate("/"); // Asosiy sahifaga yo'naltirish
      } else {
        setError(data.error || "Xatolik yuz berdi");
      }
    } catch (error) {
      setError("Tarmoq xatosi: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Kirish</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Parol kiriting"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Kirish
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Hali ro'yxatdan o'tmaganmisiz?{" "}
            <button
              onClick={() => navigate("/signup")} // Sing up sahifasiga yo'naltirish
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
