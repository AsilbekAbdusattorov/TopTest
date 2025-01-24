import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { subjects } from "../data";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-16 p-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent text-cyan-600 text-center mb-12">
          Fanlar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`/class/${subject.name}`}
              className="flex flex-col items-center justify-center text-black bg-white bg-opacity-70 rounded-xl p-6 text-center text-lg font-semibold shadow-lg hover:bg-gradient-to-br hover:from-teal-900 hover:bg-cyan-500 hover:scale-105 transform transition-all duration-300 ease-in-out w-full h-[320px]"
            >
              <div className="p-6 rounded-full mb-6 shadow-xl transition-transform duration-300 ease-in-out hover:scale-110">
                <img
                  src={subject.logo}
                  alt={`${subject.name} logo`}
                  className="w-24 h-24 mx-auto"
                />
              </div>
              <p className="text-2xl font-bold text-black">{subject.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
