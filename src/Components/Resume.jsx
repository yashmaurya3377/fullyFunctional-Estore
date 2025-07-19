import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarker } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x flex justify-center items-center p-4 md:p-10">
      <div className="w-full max-w-5xl min-h-[1000px] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-3 transform-style-preserve-3d perspective-1000 animate-fade-in-up overflow-hidden">
        {/* Left Side */}
        <div className="bg-blue-900 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          {/* Profile Section */}
          <div className="flex flex-col items-center pb-5 border-b border-white border-opacity-20 animate-fade-in">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 animate-bounce-in hover:scale-105 hover:shadow-blue-400">
              <img 
                src="yash img.jpeg" 
                alt="Yash's profile picture" 
                className=" object-canter transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h2 className="text-white text-xl uppercase mt-5 text-center font-semibold leading-snug transition-colors duration-300 hover:text-blue-400 hover:text-shadow-white">
              Yash Pratap
              <span className="block text-sm font-light">Web Developer</span>
              <span className="block text-sm font-light">Hanumant Technology</span>
            </h2>
          </div>

          {/* Contact Info */}
          <div className="pt-8">
            <h3 className="text-white uppercase font-semibold tracking-wider mb-5 relative animate-slide-in-left after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right">
                <span className="w-8 text-blue-400 text-lg mr-2 transition-all duration-300 hover:text-white hover:scale-110">
                  <FaPhone />
                </span>
                <span className="text-white font-light transition-colors duration-300 hover:text-blue-400">
                  +91 8787256663
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-200">
                <span className="w-8 text-blue-400 text-lg mr-2 transition-all duration-300 hover:text-white hover:scale-110">
                  <FaEnvelope />
                </span>
                <span className="text-white font-light transition-colors duration-300 hover:text-blue-400">
                  yashpratap3377@gmail.com
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-400">
                <span className="w-8 text-blue-400 text-lg mr-2 transition-all duration-300 hover:text-white hover:scale-110">
                  <FaLinkedin />
                </span>
                <span className="text-white font-light transition-colors duration-300 hover:text-blue-400">
                  linkedin.com/
                </span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-600">
                <span className="w-8 text-blue-400 text-lg mr-2 transition-all duration-300 hover:text-white hover:scale-110">
                  <FaMapMarker />
                </span>
                <span className="text-white font-light transition-colors duration-300 hover:text-blue-400">
                  Amethi U.P. India
                </span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="pt-8">
            <h3 className="text-white uppercase font-semibold tracking-wider mb-5 relative animate-slide-in-left after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Education
            </h3>
            <ul className="space-y-4">
              <li className="animate-fade-in-up">
                <h5 className="text-blue-400 font-medium transition-colors duration-300 hover:text-white">
                  2023 - 2025
                </h5>
                <h4 className="text-white font-medium">B-Com</h4>
                <h4 className="text-white font-light">
                  Dr. Rammanohar Lohia Avadh University
                </h4>
              </li>
              <li className="animate-fade-in-up delay-200">
                <h5 className="text-blue-400 font-medium transition-colors duration-300 hover:text-white">
                  2021
                </h5>
                <h4 className="text-white font-medium">Intermediate</h4>
                <h4 className="text-white font-light">
                  Sri Ranveer Inter College
                </h4>
              </li>
              <li className="animate-fade-in-up delay-400">
                <h5 className="text-blue-400 font-medium transition-colors duration-300 hover:text-white">
                  2019
                </h5>
                <h4 className="text-white font-medium">HighSchool</h4>
                <h4 className="text-white font-light">
                  Shiv Pratap Inter College Amethi
                </h4>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div className="pt-8">
            <h3 className="text-white uppercase font-semibold tracking-wider mb-5 relative animate-slide-in-left after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Language
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white">English</span>
                <div className="w-full h-1.5 bg-blue-950 rounded mt-1 overflow-hidden">
                  <div 
                    className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" 
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </li>
              <li>
                <span className="text-white">Hindi</span>
                <div className="w-full h-1.5 bg-blue-950 rounded mt-1 overflow-hidden">
                  <div 
                    className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-6 md:p-8 col-span-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
          {/* Profile */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-blue-900 uppercase tracking-wider mb-3 relative animate-slide-in-right after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed transition-all duration-300 hover:text-blue-900 hover:translate-x-1">
              To work in a company with a professional work driven environment where
              I can utilize and apply my knowledge and skill which would enable me as
              a fresh graduate to growth while fulfilling organizational goals. I hereby
              declare that the given above information is true and correct to the best of my knowledge
            </p>
          </div>

          {/* Training & Internship */}
          <div className="mb-12">
            <h2 className="text-blue-700 uppercase tracking-wider mb-3 relative animate-slide-in-right after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Training & Internship
            </h2>
            <div className="flex flex-row my-5 transition-all duration-500 hover:translate-x-2 hover:bg-blue-300 hover:bg-opacity-5 hover:p-3 hover:rounded animate-fade-in-up">
              <div className="min-w-[150px]">
                <h5 className="text-blue-900 uppercase font-semibold transition-colors duration-300 hover:text-blue-400">
                  WEB DEVELOPER <span className="text-gray-500 font-light">- MERN</span>
                </h5>
                <ul className="mt-2">
                  <li className="text-gray-500 transition-all duration-300 hover:text-blue-900 hover:translate-x-1">
                    9 month of web development training using REACT-JS || REACT-NATIVE framework
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="mb-12">
            <h2 className="text-blue-900 uppercase tracking-wider mb-3 relative animate-slide-in-right after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Professional Skills
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-12 items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right">
                <span className="col-span-3 md:col-span-2">HTML</span>
                <div className="col-span-9 md:col-span-10 w-full h-2.5 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-200">
                <span className="col-span-3 md:col-span-2">CSS</span>
                <div className="col-span-9 md:col-span-10 w-full h-2.5 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-400">
                <span className="col-span-3 md:col-span-2">React-Native</span>
                <div className="col-span-9 md:col-span-10 w-full h-2.5 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-600">
                <span className="col-span-3 md:col-span-2">Bootstrap</span>
                <div className="col-span-9 md:col-span-10 w-full h-2.5 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-800">
                <span className="col-span-3 md:col-span-2">React-js</span>
                <div className="col-span-9 md:col-span-10 w-full h-2.5 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center transition-all duration-300 hover:translate-x-2 animate-fade-in-right delay-1000">
                <span className="col-span-3 md:col-span-2">SQL</span>
                <div className="col-span-9 md:col-span-10 w-full h-2.5 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-blue-400 rounded transition-all duration-1500 ease-in-out" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="mb-12">
            <h2 className="text-blue-900 uppercase tracking-wider mb-3 relative animate-slide-in-right after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Certificate
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 font-medium transition-all duration-300 hover:text-blue-400 hover:translate-x-2 animate-fade-in-left">
                MERN (Certificate): <span className="text-gray-500 font-light block mt-1 transition-colors duration-300 hover:text-blue-900">Incapp</span>
              </li>
              <li className="text-gray-700 font-medium transition-all duration-300 hover:text-blue-400 hover:translate-x-2 animate-fade-in-left delay-200">
                Hanumant Technology: <span className="text-gray-500 font-light block mt-1 transition-colors duration-300 hover:text-blue-900">Hanumant Technology Pvt. Ltd. (Best IT Company & Training Institute)</span>
              </li>
            </ul>
          </div>

          {/* Interest */}
          <div>
            <h2 className="text-blue-900 uppercase tracking-wider mb-3 relative animate-slide-in-right after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-24">
              Interest
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <li className="text-gray-100 font-medium p-3 bg-blue-400 bg-opacity-5 rounded text-center transition-all duration-300 hover:bg-blue-900 hover:text-white hover:-translate-y-1 hover:shadow-md animate-fade-in">
                Urban Exploration 
              </li>
              <li className="text-gray-100 font-medium p-3 bg-blue-400 bg-opacity-5 rounded text-center transition-all duration-300 hover:bg-blue-900 hover:text-white hover:-translate-y-1 hover:shadow-md animate-fade-in delay-200">
                Reading
              </li>
              <li className="text-gray-100 font-medium p-3 bg-blue-400 bg-opacity-5 rounded text-center transition-all duration-300 hover:bg-blue-900 hover:text-white hover:-translate-y-1 hover:shadow-md animate-fade-in delay-400">
                Coding 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;