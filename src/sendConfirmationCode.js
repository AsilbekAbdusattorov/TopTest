const nodemailer = require("nodemailer");
const express = require("express");
const dotenv = require("dotenv"); // .env faylidan o'qish
const app = express();
dotenv.config(); // .env faylini o'qish

app.use(express.json()); // JSON formatida so'rovlarni qabul qilish

// Nodemailer konfiguratsiyasi
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // .env faylidan emailni olish
    pass: process.env.EMAIL_PASSWORD, // .env faylidan parolni olish
  },
});

// Email yuborish uchun endpoint
app.post("/sendConfirmationCode", async (req, res) => {
  const { email } = req.body;

  // Tasdiqlash kodi yaratish
  const confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6 xonali tasdiqlash kodi

  const mailOptions = {
    from: "Abdusattorovasilbek278@gmail.com", // O'zingizning email manzilingiz
    to: email,
    subject: "Ro'yxatdan o'tish uchun tasdiqlash kodi",
    text: `Sizning tasdiqlash kodingiz: ${confirmationCode}`,
  };

  try {
    // Email yuborish
    await transporter.sendMail(mailOptions);

    // Kodni saqlash (istalgan ma'lumotlar bazasiga yoki sessiyada)
    // Misol uchun:
    // req.session.confirmationCode = confirmationCode;

    res.status(200).send({ message: "Tasdiqlash kodi yuborildi." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Email yuborishda xato yuz berdi." });
  }
});

// Serverni ishga tushirish
app.listen(5000, () => {
  console.log("Server 5000-portda ishlamoqda");
});
