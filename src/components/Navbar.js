import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent');
  const [shadow, setShadow] = useState('shadow-none');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground('bg-green-600');
      setShadow('shadow-md');
    } else {
      setNavBackground('bg-transparent');
      setShadow('shadow-none');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al seleccionar una opción
  };

  return (
    <nav className={`fixed w-full z-50 ${navBackground} text-white ${shadow} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/images/Selcom Logo.jpg" alt="Logo de Selcom" className="h-10" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 justify-center items-center mx-auto text-lg">
          <li>
            <Link to="/about" className="hover:bg-green-500 px-4 py-2 rounded-full transition-all duration-300 text-shadow">
              Quiénes Somos
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:bg-green-500 px-4 py-2 rounded-full transition-all duration-300 text-shadow">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:bg-green-500 px-4 py-2 rounded-full transition-all duration-300 text-shadow">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:bg-green-500 px-4 py-2 rounded-full transition-all duration-300 text-shadow">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Links */}
        <div className={`absolute top-16 left-0 w-full bg-green-600 text-center transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 py-6">
            <li>
              <Link to="/about" onClick={handleLinkClick} className="block hover:bg-green-500 py-2 text-white">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick} className="block hover:bg-green-500 py-2 text-white">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleLinkClick} className="block hover:bg-green-500 py-2 text-white">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick} className="block hover:bg-green-500 py-2 text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
