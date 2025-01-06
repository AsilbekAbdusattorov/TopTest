// // src/server.js
// import express from 'express';
// import cors from 'cors';
// import { handleSignUp, handleVerifyCode, handleLogin } from '../src/AuthHandler.js';

// const app = express();

// // CORS ruxsatini berish
// app.use(cors());  // Barcha domenlardan kelgan so'rovlarni ruxsat berish
// app.use(express.json());  // JSON formatdagi so'rovlarni o'qish

// const PORT = process.env.PORT || 5000;

// // Ro'yxatdan o'tish API
// app.post('/api/signup', handleSignUp);

// // Tasdiqlash kodi tekshirish API
// app.post('/api/verify-code', handleVerifyCode);

// // Login API
// app.post('/api/login', handleLogin);

// // Serverni ishga tushurish
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import { handleSignUp, handleVerifyCode, handleLogin } from '../src/AuthHandler.js';

// Serverless API funksiyasi
export default async function handler(req, res) {
  if (req.method === 'POST' && req.url === '/api/signup') {
    await handleSignUp(req, res);
  } else if (req.method === 'POST' && req.url === '/api/verify-code') {
    await handleVerifyCode(req, res);
  } else if (req.method === 'POST' && req.url === '/api/login') {
    await handleLogin(req, res);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
}
