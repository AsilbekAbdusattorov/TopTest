const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB ulanish
mongoose.connect("mongodb://localhost:27017/toptest", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB ulanishi muvaffaqiyatli"))
  .catch(err => console.log("MongoDB ulanishi xatolik: ", err));

// Foydalanuvchi schema va modeli
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// SignUp endpoint
app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Parolni shifrlash
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi" });
  } catch (err) {
    res.status(500).json({ error: "Xatolik yuz berdi" });
  }
});

// Listen server
app.listen(port, () => {
  console.log(`Server ${port} portida ishlamoqda`);
});
