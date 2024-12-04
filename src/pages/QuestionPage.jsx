import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Import all the questions for different subjects
import {
  onaTili1SinfQuestions,
  onaTili2SinfQuestions,
  onaTili3SinfQuestions,
  onaTili4SinfQuestions,
  onaTili5SinfQuestions,
  onaTili6SinfQuestions,
  onaTili7SinfQuestions,
  onaTili8SinfQuestions,
  onaTili9SinfQuestions,
  onaTili10SinfQuestions,
  onaTili11SinfQuestions,
} from "../questions"; // Import all the questions for "Ona tili" subject

import {
  matematika1SinfQuestions,
  matematika2SinfQuestions,
  matematika3SinfQuestions,
  matematika4SinfQuestions,
  matematika5SinfQuestions,
  matematika6SinfQuestions,
  matematika7SinfQuestions,
  matematika8SinfQuestions,
  matematika9SinfQuestions,
  matematika10SinfQuestions,
  matematika11SinfQuestions,
} from "../mathQuestions"; // Import all the questions for "Matematika" subject

import {
  tarix5SinfQuestions,
  tarix6SinfQuestions,
  tarix7SinfQuestions,
  tarix8SinfQuestions,
  tarix9SinfQuestions,
  tarix10SinfQuestions,
  tarix11SinfQuestions,
} from "../historyQuestions"; // Import all the questions for "Tarix" subject

// Import Geography questions
import {
  geografiya5SinfQuestions,
  geografiya6SinfQuestions,
  geografiya7SinfQuestions,
  geografiya8SinfQuestions,
  geografiya9SinfQuestions,
  geografiya10SinfQuestions,
  geografiya11SinfQuestions,
} from "../geographyQuestions"; // Import all the questions for "Geografiya" subject

// Import Biologiya questions
import {
  biologiya5SinfQuestions,
  biologiya6SinfQuestions,
  biologiya7SinfQuestions,
  biologiya8SinfQuestions,
  biologiya9SinfQuestions,
  biologiya10SinfQuestions,
  biologiya11SinfQuestions,
} from "../biologiyaQuestions"; // Import all the questions for "Biologiya" subject

// Import Fizika questions
import {
  fizika6SinfQuestions,
  fizika7SinfQuestions,
  fizika8SinfQuestions,
  fizika9SinfQuestions,
  fizika10SinfQuestions,
  fizika11SinfQuestions,
} from "../fizikaQuestions"; // Import Fizika questions

import {
  kimyo6SinfQuestions,
  kimyo7SinfQuestions,
  kimyo8SinfQuestions,
  kimyo9SinfQuestions,
  kimyo10SinfQuestions,
  kimyo11SinfQuestions,
} from "../kimyoQuestions";

import {
  informatika6SinfQuestions,
  informatika7SinfQuestions,
  informatika8SinfQuestions,
  informatika9SinfQuestions,
  informatika10SinfQuestions,
  informatika11SinfQuestions,
} from "../informatikaQuestions"; // Import Informatika questions

import {
  inglizTili1SinfQuestions,
  inglizTili2SinfQuestions,
  inglizTili3SinfQuestions,
  inglizTili4SinfQuestions,
  inglizTili5SinfQuestions,
  inglizTili6SinfQuestions,
  inglizTili7SinfQuestions,
  inglizTili8SinfQuestions,
  inglizTili9SinfQuestions,
  inglizTili10SinfQuestions,
  inglizTili11SinfQuestions,
} from "../inglizTiliQuestions.js"; // Import all the questions for "Ingliz tili" subject

import {
  jismoniyTarbiya1SinfQuestions,
  jismoniyTarbiya2SinfQuestions,
  jismoniyTarbiya3SinfQuestions,
  jismoniyTarbiya4SinfQuestions,
  jismoniyTarbiya5SinfQuestions,
  jismoniyTarbiya6SinfQuestions,
  jismoniyTarbiya7SinfQuestions,
  jismoniyTarbiya8SinfQuestions,
  jismoniyTarbiya9SinfQuestions,
  jismoniyTarbiya10SinfQuestions,
  jismoniyTarbiya11SinfQuestions,
} from "../jismoniyTarbiyaQuestions.js"; // Import Jismoniy Tarbiya questions

// Tarbiya darsi savollarini import qilish
import {
  tarbiyaDarsi1SinfQuestions,
  tarbiyaDarsi2SinfQuestions,
  tarbiyaDarsi3SinfQuestions,
  tarbiyaDarsi4SinfQuestions,
  tarbiyaDarsi5SinfQuestions,
  tarbiyaDarsi6SinfQuestions,
  tarbiyaDarsi7SinfQuestions,
  tarbiyaDarsi8SinfQuestions,
  tarbiyaDarsi9SinfQuestions,
  tarbiyaDarsi10SinfQuestions,
  tarbiyaDarsi11SinfQuestions,
} from "../tarbiyaDarsiQuestions";

import {
  texnologiya5SinfQuestions,
  texnologiya6SinfQuestions,
  texnologiya7SinfQuestions,
  texnologiya8SinfQuestions,
  texnologiya9SinfQuestions,
  texnologiya10SinfQuestions,
  texnologiya11SinfQuestions,
} from "../texnologiyaQuestions";

import {
  tasviriySanat1SinfQuestions,
  tasviriySanat2SinfQuestions,
  tasviriySanat3SinfQuestions,
  tasviriySanat4SinfQuestions,
  tasviriySanat5SinfQuestions,
  tasviriySanat6SinfQuestions,
  tasviriySanat7SinfQuestions,
  tasviriySanat8SinfQuestions,
  tasviriySanat9SinfQuestions,
  tasviriySanat10SinfQuestions,
  tasviriySanat11SinfQuestions,
} from "../tasviriySanatQuestions"; // Tasviriy san'at fanining savollari

import {
  musiqaMadaniyati1SinfQuestions,
  musiqaMadaniyati2SinfQuestions,
  musiqaMadaniyati3SinfQuestions,
  musiqaMadaniyati4SinfQuestions,
  musiqaMadaniyati5SinfQuestions,
  musiqaMadaniyati6SinfQuestions,
  musiqaMadaniyati7SinfQuestions,
  musiqaMadaniyati8SinfQuestions,
  musiqaMadaniyati9SinfQuestions,
  musiqaMadaniyati10SinfQuestions,
  musiqaMadaniyati11SinfQuestions,
} from "../musiqaMadaniyatiQuestions"; // Musiqa madaniyati savollarini import qilish
import {
  astronomiya6SinfQuestions,
  astronomiya7SinfQuestions,
  astronomiya8SinfQuestions,
  astronomiya9SinfQuestions,
  astronomiya10SinfQuestions,
  astronomiya11SinfQuestions,
} from "../AstronomiyaQuestions"; // Astronomiya savollarini import qilamiz

// Ekologiya asoslari savollarini import qilish
import {
  ekologiya6SinfQuestions,
  ekologiya7SinfQuestions,
  ekologiya8SinfQuestions,
  ekologiya9SinfQuestions,
  ekologiya10SinfQuestions,
  ekologiya11SinfQuestions,
} from "../ekologiyaQuestions";
import {
  davlatHuquq9SinfQuestions,
  davlatHuquq10SinfQuestions,
  davlatHuquq11SinfQuestions,
} from "../davlatHuquqQuestions";

import {
  jahonIqtisodiyotiHuquqAsoslari9SinfQuestions,
  jahonIqtisodiyotiHuquqAsoslari10SinfQuestions,
  jahonIqtisodiyotiHuquqAsoslari11SinfQuestions,
} from "../jahonIqtisodiyotiHuquqAsoslariQuestions";

import {
  chqbt9SinfQuestions,
  chqbt10SinfQuestions,
  chqbt11SinfQuestions,
} from "../CHQBTQuestions.js";
import {
  rusTili5SinfQuestions,
  rusTili6SinfQuestions,
  rusTili7SinfQuestions,
  rusTili8SinfQuestions,
  rusTili9SinfQuestions,
  rusTili10SinfQuestions,
  rusTili11SinfQuestions,
} from "../RustiliQuestions.js";
// Shuffle function for randomizing questions and options
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuestionPage = () => {
  const { subject, grade } = useParams(); // Get subject and grade from URL params
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    // Get the selected questions based on the subject and grade
    let selectedQuestions = [];

    // Ona Tili Subject
    if (subject === "Ona tili va adabiyot") {
      switch (grade) {
        case "1":
          selectedQuestions = onaTili1SinfQuestions;
          break;
        case "2":
          selectedQuestions = onaTili2SinfQuestions;
          break;
        case "3":
          selectedQuestions = onaTili3SinfQuestions;
          break;
        case "4":
          selectedQuestions = onaTili4SinfQuestions;
          break;
        case "5":
          selectedQuestions = onaTili5SinfQuestions;
          break;
        case "6":
          selectedQuestions = onaTili6SinfQuestions;
          break;
        case "7":
          selectedQuestions = onaTili7SinfQuestions;
          break;
        case "8":
          selectedQuestions = onaTili8SinfQuestions;
          break;
        case "9":
          selectedQuestions = onaTili9SinfQuestions;
          break;
        case "10":
          selectedQuestions = onaTili10SinfQuestions;
          break;
        case "11":
          selectedQuestions = onaTili11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Matematika Subject
    if (subject === "Matematika") {
      switch (grade) {
        case "1":
          selectedQuestions = matematika1SinfQuestions;
          break;
        case "2":
          selectedQuestions = matematika2SinfQuestions;
          break;
        case "3":
          selectedQuestions = matematika3SinfQuestions;
          break;
        case "4":
          selectedQuestions = matematika4SinfQuestions;
          break;
        case "5":
          selectedQuestions = matematika5SinfQuestions;
          break;
        case "6":
          selectedQuestions = matematika6SinfQuestions;
          break;
        case "7":
          selectedQuestions = matematika7SinfQuestions;
          break;
        case "8":
          selectedQuestions = matematika8SinfQuestions;
          break;
        case "9":
          selectedQuestions = matematika9SinfQuestions;
          break;
        case "10":
          selectedQuestions = matematika10SinfQuestions;
          break;
        case "11":
          selectedQuestions = matematika11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Informatika Subject
    if (subject === "Informatika") {
      switch (grade) {
        case "6":
          selectedQuestions = informatika6SinfQuestions;
          break;
        case "7":
          selectedQuestions = informatika7SinfQuestions;
          break;
        case "8":
          selectedQuestions = informatika8SinfQuestions;
          break;
        case "9":
          selectedQuestions = informatika9SinfQuestions;
          break;
        case "10":
          selectedQuestions = informatika10SinfQuestions;
          break;
        case "11":
          selectedQuestions = informatika11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Tarix Subject
    if (subject === "Tarix") {
      switch (grade) {
        case "5":
          selectedQuestions = tarix5SinfQuestions;
          break;
        case "6":
          selectedQuestions = tarix6SinfQuestions;
          break;
        case "7":
          selectedQuestions = tarix7SinfQuestions;
          break;
        case "8":
          selectedQuestions = tarix8SinfQuestions;
          break;
        case "9":
          selectedQuestions = tarix9SinfQuestions;
          break;
        case "10":
          selectedQuestions = tarix10SinfQuestions;
          break;
        case "11":
          selectedQuestions = tarix11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Geografiya Subject
    if (subject === "Geografiya") {
      switch (grade) {
        case "5":
          selectedQuestions = geografiya5SinfQuestions;
          break;
        case "6":
          selectedQuestions = geografiya6SinfQuestions;
          break;
        case "7":
          selectedQuestions = geografiya7SinfQuestions;
          break;
        case "8":
          selectedQuestions = geografiya8SinfQuestions;
          break;
        case "9":
          selectedQuestions = geografiya9SinfQuestions;
          break;
        case "10":
          selectedQuestions = geografiya10SinfQuestions;
          break;
        case "11":
          selectedQuestions = geografiya11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Biologiya Subject
    if (subject === "Biologiya") {
      switch (grade) {
        case "5":
          selectedQuestions = biologiya5SinfQuestions;
          break;
        case "6":
          selectedQuestions = biologiya6SinfQuestions;
          break;
        case "7":
          selectedQuestions = biologiya7SinfQuestions;
          break;
        case "8":
          selectedQuestions = biologiya8SinfQuestions;
          break;
        case "9":
          selectedQuestions = biologiya9SinfQuestions;
          break;
        case "10":
          selectedQuestions = biologiya10SinfQuestions;
          break;
        case "11":
          selectedQuestions = biologiya11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Fizika Subject
    if (subject === "Fizika") {
      switch (grade) {
        case "6":
          selectedQuestions = fizika6SinfQuestions;
          break;
        case "7":
          selectedQuestions = fizika7SinfQuestions;
          break;
        case "8":
          selectedQuestions = fizika8SinfQuestions;
          break;
        case "9":
          selectedQuestions = fizika9SinfQuestions;
          break;
        case "10":
          selectedQuestions = fizika10SinfQuestions;
          break;
        case "11":
          selectedQuestions = fizika11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Kimyo Subject
    if (subject === "Kimyo") {
      switch (grade) {
        case "6":
          selectedQuestions = kimyo6SinfQuestions;
          break;
        case "7":
          selectedQuestions = kimyo7SinfQuestions;
          break;
        case "8":
          selectedQuestions = kimyo8SinfQuestions;
          break;
        case "9":
          selectedQuestions = kimyo9SinfQuestions;
          break;
        case "10":
          selectedQuestions = kimyo10SinfQuestions;
          break;
        case "11":
          selectedQuestions = kimyo11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Ingliz Tili Subject
    if (subject === "Ingliz tili") {
      switch (grade) {
        case "1":
          selectedQuestions = inglizTili1SinfQuestions;
          break;
        case "2":
          selectedQuestions = inglizTili2SinfQuestions;
          break;
        case "3":
          selectedQuestions = inglizTili3SinfQuestions;
          break;
        case "4":
          selectedQuestions = inglizTili4SinfQuestions;
          break;
        case "5":
          selectedQuestions = inglizTili5SinfQuestions;
          break;
        case "6":
          selectedQuestions = inglizTili6SinfQuestions;
          break;
        case "7":
          selectedQuestions = inglizTili7SinfQuestions;
          break;
        case "8":
          selectedQuestions = inglizTili8SinfQuestions;
          break;
        case "9":
          selectedQuestions = inglizTili9SinfQuestions;
          break;
        case "10":
          selectedQuestions = inglizTili10SinfQuestions;
          break;
        case "11":
          selectedQuestions = inglizTili11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Jismoniy Tarbiya Subject
    if (subject === "Jismoniy tarbiya") {
      switch (grade) {
        case "1":
          selectedQuestions = jismoniyTarbiya1SinfQuestions;
          break;
        case "2":
          selectedQuestions = jismoniyTarbiya2SinfQuestions;
          break;
        case "3":
          selectedQuestions = jismoniyTarbiya3SinfQuestions;
          break;
        case "4":
          selectedQuestions = jismoniyTarbiya4SinfQuestions;
          break;
        case "5":
          selectedQuestions = jismoniyTarbiya5SinfQuestions;
          break;
        case "6":
          selectedQuestions = jismoniyTarbiya6SinfQuestions;
          break;
        case "7":
          selectedQuestions = jismoniyTarbiya7SinfQuestions;
          break;
        case "8":
          selectedQuestions = jismoniyTarbiya8SinfQuestions;
          break;
        case "9":
          selectedQuestions = jismoniyTarbiya9SinfQuestions;
          break;
        case "10":
          selectedQuestions = jismoniyTarbiya10SinfQuestions;
          break;
        case "11":
          selectedQuestions = jismoniyTarbiya11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Tarbiya darsi Subject
    if (subject === "Tarbiya darsi") {
      switch (grade) {
        case "1":
          selectedQuestions = tarbiyaDarsi1SinfQuestions;
          break;
        case "2":
          selectedQuestions = tarbiyaDarsi2SinfQuestions;
          break;
        case "3":
          selectedQuestions = tarbiyaDarsi3SinfQuestions;
          break;
        case "4":
          selectedQuestions = tarbiyaDarsi4SinfQuestions;
          break;
        case "5":
          selectedQuestions = tarbiyaDarsi5SinfQuestions;
          break;
          case90;
          selectedQuestions = tarbiyaDarsi6SinfQuestions;
          break;
        case "7":
          selectedQuestions = tarbiyaDarsi7SinfQuestions;
          break;
        case "8":
          selectedQuestions = tarbiyaDarsi8SinfQuestions;
          break;
        case "9":
          selectedQuestions = tarbiyaDarsi9SinfQuestions;
          break;
        case "10":
          selectedQuestions = tarbiyaDarsi10SinfQuestions;
          break;
        case "11":
          selectedQuestions = tarbiyaDarsi11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Texnologiya Subject
    if (subject === "Texnologiya") {
      switch (grade) {
        case "5":
          selectedQuestions = texnologiya5SinfQuestions;
          break;
        case "6":
          selectedQuestions = texnologiya6SinfQuestions;
          break;
        case "7":
          selectedQuestions = texnologiya7SinfQuestions;
          break;
        case "8":
          selectedQuestions = texnologiya8SinfQuestions;
          break;
        case "9":
          selectedQuestions = texnologiya9SinfQuestions;
          break;
        case "10":
          selectedQuestions = texnologiya10SinfQuestions;
          break;
        case "11":
          selectedQuestions = texnologiya11SinfQuestions;
          break;
        default:
          break;
      }
    }
    if (subject === "TasviriySanat") {
      switch (grade) {
        case "1":
          selectedQuestions = tasviriySanat1SinfQuestions;
          break;
        case "2":
          selectedQuestions = tasviriySanat2SinfQuestions;
          break;
        case "3":
          selectedQuestions = tasviriySanat3SinfQuestions;
          break;
        case "4":
          selectedQuestions = tasviriySanat4SinfQuestions;
          break;
        case "5":
          selectedQuestions = tasviriySanat5SinfQuestions;
          break;
        case "6":
          selectedQuestions = tasviriySanat6SinfQuestions;
          break;
        case "7":
          selectedQuestions = tasviriySanat7SinfQuestions;
          break;
        case "8":
          selectedQuestions = tasviriySanat8SinfQuestions;
          break;
        case "9":
          selectedQuestions = tasviriySanat9SinfQuestions;
          break;
        case "10":
          selectedQuestions = tasviriySanat10SinfQuestions;
          break;
        case "11":
          selectedQuestions = tasviriySanat11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Musiqa madaniyati subject
    if (subject === "Musiqa madaniyati") {
      switch (grade) {
        case "1":
          selectedQuestions = musiqaMadaniyati1SinfQuestions;
          break;
        case "2":
          selectedQuestions = musiqaMadaniyati2SinfQuestions;
          break;
        case "3":
          selectedQuestions = musiqaMadaniyati3SinfQuestions;
          break;
        case "4":
          selectedQuestions = musiqaMadaniyati4SinfQuestions;
          break;
        case "5":
          selectedQuestions = musiqaMadaniyati5SinfQuestions;
          break;
        case "6":
          selectedQuestions = musiqaMadaniyati6SinfQuestions;
          break;
        case "7":
          selectedQuestions = musiqaMadaniyati7SinfQuestions;
          break;
        case "8":
          selectedQuestions = musiqaMadaniyati8SinfQuestions;
          break;
        case "9":
          selectedQuestions = musiqaMadaniyati9SinfQuestions;
          break;
        case "10":
          selectedQuestions = musiqaMadaniyati10SinfQuestions;
          break;
        case "11":
          selectedQuestions = musiqaMadaniyati11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Astronomiya Subject
    if (subject === "Astronomiya") {
      switch (grade) {
        case "6":
          selectedQuestions = astronomiya6SinfQuestions;
          break;
        case "7":
          selectedQuestions = astronomiya7SinfQuestions;
          break;
        case "8":
          selectedQuestions = astronomiya8SinfQuestions;
          break;
        case "9":
          selectedQuestions = astronomiya9SinfQuestions;
          break;
        case "10":
          selectedQuestions = astronomiya10SinfQuestions;
          break;
        case "11":
          selectedQuestions = astronomiya11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Ekologiya asoslari Subject
    if (subject === "Ekologiya asoslari") {
      switch (grade) {
        case "6":
          selectedQuestions = ekologiya6SinfQuestions;
          break;
        case "7":
          selectedQuestions = ekologiya7SinfQuestions;
          break;
        case "8":
          selectedQuestions = ekologiya8SinfQuestions;
          break;
        case "9":
          selectedQuestions = ekologiya9SinfQuestions;
          break;
        case "10":
          selectedQuestions = ekologiya10SinfQuestions;
          break;
        case "11":
          selectedQuestions = ekologiya11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Davlat va huquq asoslari Subject
    if (subject === "Davlat va huquq asoslari") {
      switch (grade) {
        case "9":
          selectedQuestions = davlatHuquq9SinfQuestions;
          break;
        case "10":
          selectedQuestions = davlatHuquq10SinfQuestions;
          break;
        case "11":
          selectedQuestions = davlatHuquq11SinfQuestions;
          break;
        default:
          break;
      }
    }
    if (subject === "Jahon iqtisodiyoti va huquq asoslari") {
      switch (grade) {
        case "9":
          selectedQuestions = jahonIqtisodiyotiHuquqAsoslari9SinfQuestions;
          break;
        case "10":
          selectedQuestions = jahonIqtisodiyotiHuquqAsoslari10SinfQuestions;
          break;
        case "11":
          selectedQuestions = jahonIqtisodiyotiHuquqAsoslari11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // Add Rus tili subject
    if (subject === "Rus tili") {
      switch (grade) {
        case "5":
          selectedQuestions = rusTili5SinfQuestions;
          break;
        case "6":
          selectedQuestions = rusTili6SinfQuestions;
          break;
        case "7":
          selectedQuestions = rusTili7SinfQuestions;
          break;
        case "8":
          selectedQuestions = rusTili8SinfQuestions;
          break;
        case "9":
          selectedQuestions = rusTili9SinfQuestions;
          break;
        case "10":
          selectedQuestions = rusTili10SinfQuestions;
          break;
        case "11":
          selectedQuestions = rusTili11SinfQuestions;
          break;
        default:
          break;
      }
    }
    // CHQBT Subject
    if (subject === "CHQBT") {
      switch (grade) {
        case "9":
          selectedQuestions = chqbt9SinfQuestions;
          break;
        case "10":
          selectedQuestions = chqbt10SinfQuestions;
          break;
        case "11":
          selectedQuestions = chqbt11SinfQuestions;
          break;
        default:
          break;
      }
    }

    // Randomize and select the first 10 questions
    const shuffled = selectedQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map((q) => ({
        ...q,
        options: Array.isArray(q.options) ? shuffleArray([...q.options]) : [], // Check if options is an array
      }));

    setQuestions(shuffled);
  }, [subject, grade]);

  const handleAnswer = (option) => {
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[currentQuestion].question,
        selected: option,
        correct: questions[currentQuestion].answer,
      },
    ]);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  if (!completed) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex justify-center items-center">
        {questions.length > 0 && (
          <div className="text-center p-8">
            <h1 className="text-center text-white text-5xl font-semibold mb-10">
              {currentQuestion + 1}-Test
            </h1>
            <h1 className="text-4xl font-bold text-white mb-6 cursor-help">
              {questions[currentQuestion].question}
            </h1>
            <div className="flex flex-col gap-5">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-transparent text-white border-white border hover:text-black font-semibold py-3 px-8 rounded-full text-xl hover:bg-white transform transition-all duration-300 ease-in-out w-full"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-6 flex justify-center items-center">
      <div className="bg-white shadow-2xl p-8 rounded-3xl max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Test tugadi! Sizning natijangiz:
        </h1>
        <p className="text-xl text-gray-700 mb-6 text-center">
          To'g'ri javoblar:{" "}
          <span className="text-green-600 font-semibold">{score}</span> /{" "}
          {questions.length}
        </p>
        <div className="flex flex-col gap-6">
          {userAnswers.map((answer, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                answer.selected === answer.correct
                  ? "bg-green-100 border-l-4 border-green-500"
                  : "bg-red-100 border-l-4 border-red-500"
              } transition-all duration-300 ease-in-out transform hover:scale-105`}
            >
              <h2 className="text-2xl text-black font-semibold mb-4">
                {index + 1}-Test
              </h2>
              <h2 className="font-bold text-xl text-gray-700 mb-3">
                {answer.question}
              </h2>
              <p
                className={`text-lg text-gray-600 mb-2 ${
                  answer.selected === answer.correct
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Sizning javobingiz: {answer.selected}
              </p>
              <p
                className={`text-lg text-gray-600 ${
                  answer.selected === answer.correct
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                To'g'ri javob: {answer.correct}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="mt-6 inline-block ml-4 sm:ml-16 md:ml-52 bg-gradient-to-r to-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gradient-to-l from-green-400 transition-all duration-300 ease-in-out text-lg text-center"
        >
          Yana boshidan boshlash
        </Link>
      </div>
    </div>
  );
};

export default QuestionPage;
