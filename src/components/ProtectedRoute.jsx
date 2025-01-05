import React from "react";
import { Navigate } from "react-router-dom";

const decodeToken = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Token decodingda xatolik:", error);
    return null;
  }
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const decoded = decodeToken(token);

  if (!decoded || decoded.exp * 1000 < Date.now()) {
    localStorage.removeItem("authToken");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
