import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-500 tracking-widest">404</h1>
      <div className="bg-teal-500 px-2 text-sm rounded rotate-12 absolute">
        Sahifa topilmadi
      </div>
      <div className="mt-5 text-center">
        <p className="text-lg font-semibold mb-4">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas.
        </p>
        <Link
          to="/"
          className="px-6 py-2 text-sm font-semibold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
