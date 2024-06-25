// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbarr = ({ scrollToHome, scrollToFooter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <img 
            src="https://www.shutterstock.com/shutterstock/photos/2240616851/display_1500/stock-vector-cup-of-tea-vector-logo-design-creative-2240616851.jpg" 
            alt="Logo" 
            className="h-10 rounded-full inline-block mr-2" 
          />
          ECO PLATES
        </div>
        <div className="hidden md:flex">
          <Link to="/" onClick={scrollToHome} className="text-white mx-2 cursor-pointer">Home</Link>
          <Link to="/content" onClick={scrollToFooter} className="text-white mx-2 cursor-pointer">About us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" onClick={scrollToHome} className="block text-white mx-2 py-2">Home</Link>
          <Link to="/content" onClick={scrollToFooter} className="block text-white mx-2 py-2">About us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbarr;
