import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent'); // Fondo inicial transparente
  const [shadow, setShadow] = useState('shadow-none'); // Sombra opcional
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground('bg-green-600'); // Cambia a un color sólido al hacer scroll
      setShadow('shadow-md');
    } else {
      setNavBackground('bg-transparent'); // Vuelve a transparente cuando se está en la parte superior
      setShadow('shadow-none');
    }
  };

  // Cambia el fondo dinámicamente según la ruta actual
  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll); // Solo detecta scroll en la página de inicio
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setNavBackground('bg-green-600'); // En otras páginas, fondo siempre sólido
      setShadow('shadow-md');
    }
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al seleccionar una opción
  };
  
  return (
    <nav className={`fixed w-full z-50 ${navBackground} text-white ${shadow} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/images/Selcom Logo.jpg" alt="Logo de Selcom" className="h-10" /> {/* Ajusta la altura según sea necesario */}
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
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
        <ul className={`absolute top-16 left-0 w-full bg-blue-800 text-center space-y-4 py-6 md:hidden transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
          <li>
            <Link to="/about" onClick={handleLinkClick} className="block hover:bg-green-500 py-2">
              Quiénes Somos
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick} className="block hover:bg-green-500 py-2">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={handleLinkClick} className="block hover:bg-green-500 py-2">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick} className="block hover:bg-green-500 py-2">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
