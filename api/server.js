import express from 'express';
import cors from 'cors';
import { handleSignUp, handleVerifyCode, handleLogin } from '../src/AuthHandler.js';

const app = express();

// CORS ruxsatini berish
app.use(cors());
app.use(express.json());

// Ro'yxatdan o'tish API
app.post('/api/signup', handleSignUp);

// Tasdiqlash kodi tekshirish API
app.post('/api/verify-code', handleVerifyCode);

// Login API
app.post('/api/login', handleLogin);

// Express serverni serverless funktsiyasi sifatida eksport qilish
export default app;
