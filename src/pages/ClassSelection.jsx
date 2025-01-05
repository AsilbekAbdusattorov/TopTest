import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { subjects } from '../data';

// Fan uchun mavjud sinflar
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
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 flex justify-center items-center p-6">
      <div className="text-center bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 rounded-xl shadow-2xl p-10 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200 mb-8">
          {selectedSubject ? `${selectedSubject.name} fanida sinfni tanlang:` : 'Fan topilmadi'}
        </h1>
        
        {/* Fan logotipini ko'rsatish */}
        {selectedSubject && (
          <img
            src={selectedSubject.logo}
            alt={`${selectedSubject.name} logotipi`}
            className="mx-auto mb-8 w-28 h-28 object-contain transition-transform transform hover:scale-110"
          />
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredGrades.length ? (
            filteredGrades.map((grade) => (
              <Link
                key={grade}
                to={`/questions/${subject}/${grade}`}
                className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 shadow-2xl rounded-lg p-8 text-center text-xl font-semibold text-white transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-gray-800 hover:to-indigo-800 duration-300"
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
