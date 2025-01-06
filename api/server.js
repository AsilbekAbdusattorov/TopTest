import express from 'express';
import cors from 'cors';
import { handleSignUp, handleVerifyCode, handleLogin } from '../src/AuthHandler.js';

const app = express();

// CORS ruxsatini berish
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Ro'yxatdan o'tish API
app.post('/api/signup', handleSignUp);

// Tasdiqlash kodi tekshirish API
app.post('/api/verify-code', handleVerifyCode);

// Login API
app.post('/api/login', handleLogin);

// Serverni ishga tushurish
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
