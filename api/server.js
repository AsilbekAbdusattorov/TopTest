import { handleSignUp, handleVerifyCode, handleLogin } from './AuthHandler.js';

export const config = {
  runtime: 'nodejs18.x', // Vercel uchun Node.js versiyasi
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    switch (req.url) {
      case '/api/signup':
        await handleSignUp(req, res); // Ro'yxatdan o'tish
        break;
      case '/api/verify-code':
        await handleVerifyCode(req, res); // Kodni tekshirish
        break;
      case '/api/login':
        await handleLogin(req, res); // Login
        break;
      default:
        res.status(404).json({ message: 'Not Found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

