import React, {useEffect} from "react";
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
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-green-300 to-green-500 flex flex-col">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
          Fanlar
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 p-8">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`/class/${subject.name}`}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl hover:text-white p-6 text-center text-lg font-semibold hover:bg-gradient-to-br from-blue-500 to-green-500 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out w-[256px] h-[280px]"
            >
              <div className="bg-blue-100 p-6 rounded-full mb-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                <img
                  src={subject.logo}
                  alt={`${subject.name} logo`}
                  className="w-20 h-20 mx-auto"
                />
              </div>
              <p className="text-xl font-bold text-gray-700 hover:text-white">
                {subject.name}
              </p>
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
