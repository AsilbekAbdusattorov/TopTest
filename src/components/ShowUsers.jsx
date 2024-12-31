import React, { useState, useEffect } from "react";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // localStorage'dan foydalanuvchi ma'lumotlarini olish
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Saqlangan Foydalanuvchilar
        </h2>

        <div className="space-y-4">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Hozircha foydalanuvchilar saqlanmagan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;
