import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold">© 2024 Selcom</h4>
            <p className="text-gray-300">Todos los derechos reservados.</p>
          </div>

          {/* Center Section - Navigation */}
          <ul className="flex space-x-6 text-gray-300">
            <li><Link to="/" className="hover:text-green-500">Inicio</Link></li>
            <li><Link to="/about" className="hover:text-green-500">Quiénes Somos</Link></li>
            <li><Link to="/services" className="hover:text-green-500">Servicios</Link></li>
            <li><Link to="/portfolio" className="hover:text-green-500">Proyectos</Link></li>
            <li><Link to="/contact" className="hover:text-green-500">Contacto</Link></li>
          </ul>

          {/* Right Section - Social Media */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
