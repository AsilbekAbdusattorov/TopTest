import dotenv from 'dotenv';
dotenv.config({ path: './src/.env' }); // .env faylini src papkasidan o'qish

import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

// Fayl manzilini to'g'ri ko'rsatish (src papkasida UserData.json)
const usersFilePath = path.join(process.cwd(), 'src', 'UserData.json');  // src papkasida saqlanadi
const secretKey = process.env.SECRET_KEY || "your_default_secret_key"; // .env faylidan olingan kalit

// Tasdiqlash kodi va uning amal qilish muddati
const generateVerificationCodeWithExpiry = () => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiryTime = Date.now() + 10 * 60 * 1000; // 10 daqiqa
  return { code, expiryTime };
};

// Tasdiqlash emailini yuborish
const sendVerificationEmail = async (email, code) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
    port: 465,
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Tasdiqlash kodi",
    text: `Sizning tasdiqlash kodingiz: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Tasdiqlash kodi yuborildi: ${email}`);
  } catch (error) {
    console.error("Email yuborishda xatolik yuz berdi:", error);
  }
};

// Foydalanuvchi ro'yxatdan o'tishi
const handleSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email va parol kiritilishi shart" });
  }

  // 'UserData.json' faylini o'qish
  let users = [];
  try {
    users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  } catch (error) {
    console.log('UserData.json fayli topilmadi, yangi fayl yaratiladi.');
  }

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({ error: "Bu email bilan foydalanuvchi mavjud" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const { code, expiryTime } = generateVerificationCodeWithExpiry();

  const user = {
    email,
    password: hashedPassword,
    verificationCode: code,
    codeExpiry: expiryTime,
    isVerified: false,
    id: users.length + 1  // Avtomatik ID qo'shish
  };

  // Foydalanuvchini JSON faylga qo'shish
  users.push(user);

  // Foydalanuvchilar ro'yxatini saqlash
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Faylni saqlashda xatolik yuz berdi:", error);
    return res.status(500).json({ error: "Faylni saqlashda xatolik yuz berdi" });
  }

  await sendVerificationEmail(email, code);

  res.status(201).json({ message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi, emailga tasdiqlash kodi yuborildi" });
};

// Tasdiqlash kodini tekshirish
const handleVerifyCode = (req, res) => {
  const { email, code } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({ error: "Foydalanuvchi topilmadi" });
  }

  if (Date.now() > user.codeExpiry) {
    return res.status(400).json({ error: "Tasdiqlash kodi amal qilish muddatidan o'tgan" });
  }

  if (user.verificationCode === code) {
    user.isVerified = true;
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));  // JSON faylga yangilangan foydalanuvchi ma'lumotlarini saqlash
    res.status(200).json({ message: "Tasdiqlash muvaffaqiyatli o'tdi" });
  } else {
    res.status(400).json({ error: "Noto'g'ri tasdiqlash kodi" });
  }
};

// Login API
const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(400).json({ error: "Foydalanuvchi topilmadi" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ error: "Noto'g'ri parol" });
  }

  // JWT token yaratish
  const token = jwt.sign(
    { email: user.email, userId: user.id },
    secretKey,
    { expiresIn: '1h' } // Token 1 soatlik amal qiladi
  );

  res.status(200).json({
    message: "Tizimga kirish muvaffaqiyatli",
    token: token,
    user: {
      email: user.email,
      isVerified: user.isVerified,
      id: user.id
    }
  });
};

export { handleSignUp, handleVerifyCode, handleLogin };
