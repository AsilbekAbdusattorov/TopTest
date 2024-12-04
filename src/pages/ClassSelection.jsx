import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { subjects } from '../data';

// Har bir fan uchun mavjud sinflarni belgilash
const subjectGrades = {
  "Ona tili va adabiyot": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Matematika": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Tarix": [5, 6, 7, 8, 9, 10, 11],
  "Biologiya": [5, 6, 7, 8, 9, 10, 11],
  "Geografiya": [5, 6, 7, 8, 9, 10, 11],
  "Fizika": [6, 7, 8, 9, 10, 11],
  "Kimyo": [6, 7, 8, 9, 10, 11],
  "Informatika": [6, 7, 8, 9, 10, 11],
  "Ingliz tili": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Jismoniy tarbiya": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Tarbiya darsi": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Texnologiya": [5, 6, 7, 8, 9, 10, 11],
  "TasviriySanat": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Musiqa madaniyati": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Astronomiya": [6, 7, 8, 9, 10, 11],
  "Ekologiya asoslari": [6, 7, 8, 9, 10, 11],
  "Davlat va huquq asoslari": [9, 10, 11],
  "Jahon iqtisodiyoti va huquq asoslari": [9, 10, 11],
  "CHQBT" : [9, 10, 11],
  "Rus tili" : [5, 6, 7, 8, 9, 10, 11],
};

const ClassSelection = () => {
  const { subject } = useParams();

  // Tanlangan fanga mos keladigan sinflarni olish
  const availableGrades = subjectGrades[subject] || [];

  // data.js dan tanlangan fan ma'lumotlarini topish
  const selectedSubject = subjects.find((sub) => sub.name === subject);

  // Faqat mavjud sinflarni ko'rsatish
  const filteredGrades = availableGrades.filter((grade) => grade !== undefined);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 flex justify-center items-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-8">
          {selectedSubject ? `${selectedSubject.name} fanida sinfni tanlang:` : 'Fan topilmadi'}
        </h1>
        
        {/* Fan logotipini ko'rsatish */}
        {selectedSubject && (
          <img
            src={selectedSubject.logo}
            alt={`${selectedSubject.name} logotipi`}
            className="mx-auto mb-8 w-24 h-24 object-contain"
          />
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredGrades.length ? (
            filteredGrades.map((grade) => (
              <Link
                key={grade}
                to={`/questions/${subject}/${grade}`}
                className="bg-white shadow-lg rounded-lg p-6 text-center text-2xl font-semibold text-gray-800 transition-transform transform hover:scale-105 hover:bg-blue-400 hover:text-white duration-300"
              >
                {grade}-sinf
              </Link>
            ))
          ) : (
            <p className="text-white">Bu fan uchun sinflar mavjud emas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassSelection;
