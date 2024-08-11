// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Corrija o caminho conforme necessário

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white  p-4 w-full">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="https://www.newfold.com">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-24" 
              loading="eager"
            />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center text-black"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="material-icons font-bold">
            {isMobileMenuOpen ? 'x' : 'menu'}
          </span>
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-grow items-center justify-end mx-10">
          <ul className="flex space-x-4">
            <li><a className="text-black hover:text-orange-500 font-semibold text-md hover:underline" href="">Marcas</a></li>
            <li><a className="text-black hover:text-orange-500 font-semibold text-md hover:underline" href="">Liderenças</a></li>
            <li><a className="text-black hover:text-orange-500 font-semibold text-md hover:underline" href="">Carreiras</a></li>
            <li><a className="text-black hover:text-orange-500 font-semibold text-md hover:underline" href="">Salas de Impresa</a></li>
            <li><a className="text-black hover:text-orange-500 font-semibold text-md hover:underline" href="">Contacta-nos</a></li>
            <li><a className="text-black hover:text-orange-500 font-semibold text-md hover:underline" href="">Valores</a></li>
          
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} p-10  absolute top-16 mt-20 left-0 w-full bg-white `}>
          <ul className="flex flex-col space-y-4 ">
            <li><a className="text-black hover:text-orange-500" href="https://www.newfold.com/brands">Marcas</a></li>
            <li><a className="text-black hover:text-orange-500" href="https://www.newfold.com/leadership">Lideranças</a></li>
            <li><a className="text-black hover:text-orange-500" href="https://www.newfold.com/careers">Carreiras</a></li>
            <li><a className="text-black hover:text-orange-500" href="https://www.newfold.com/newsroom">Salas de Impresa</a></li>
            <li><a className="text-black hover:text-orange-500" href="https://www.newfold.com/contact">Contacta-nos</a></li>
            <li><a className="text-black hover:text-orange-500" href="https://www.newfold.com/values">Valores</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
