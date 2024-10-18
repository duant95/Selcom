import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mt-8">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Con más de 14 años de experiencia, Selcom es líder en la instalación y desarrollo de Sistemas de Señales Débiles. Brindamos soluciones innovadoras y personalizadas, apoyando a empresas con sus necesidades de seguridad electrónica y redes de comunicación.
          </p>
        </div>

        {/* Information grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/path-to-about-image.jpg"
              alt="Equipo de trabajo"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-800">Nuestra Historia</h3>
            <p className="text-gray-700 mt-4">
              Desde 2010, hemos trabajado con grandes empresas e instituciones, implementando soluciones a medida y utilizando la última tecnología. Nuestra trayectoria nos ha permitido crecer y consolidarnos como referentes en el sector.
            </p>
            <p className="text-gray-700 mt-4">
              Nos especializamos en sistemas de seguridad electrónica, redes de datos, automatización, y mucho más. Cada proyecto es una oportunidad para innovar y mejorar.
            </p>
            <Link to="/contact" className="mt-6 inline-block bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition-all">
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-green-500">Innovación</h4>
              <p className="text-gray-700 mt-4">
                Implementamos tecnología de vanguardia para crear sistemas eficientes y seguros, con soluciones personalizadas para cada cliente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-green-500">Calidad</h4>
              <p className="text-gray-700 mt-4">
                Nos esforzamos por ofrecer productos y servicios de alta calidad, respaldados por un equipo experto y un enfoque meticuloso en cada detalle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-green-500">Compromiso</h4>
              <p className="text-gray-700 mt-4">
                Nos dedicamos a satisfacer las necesidades de nuestros clientes, proporcionando resultados que superan las expectativas.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Nuestro Equipo</h3>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Contamos con un equipo multidisciplinario de expertos, comprometidos con brindar soluciones eficaces en todas las fases del proyecto, desde la planificación hasta la implementación y soporte técnico.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/path-to-team1.jpg"
                alt="Miembro del equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-blue-800">Carlos Pérez</h4>
              <p className="text-gray-600">Director de Proyectos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/path-to-team2.jpg"
                alt="Miembro del equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-blue-800">Ana Rodríguez</h4>
              <p className="text-gray-600">Gerente de Operaciones</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/path-to-team3.jpg"
                alt="Miembro del equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-blue-800">José Ramírez</h4>
              <p className="text-gray-600">Ingeniero de Sistemas</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">¿Por qué Elegirnos?</h3>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            En Selcom, trabajamos para garantizar la mejor solución tecnológica para nuestros clientes, con un enfoque personalizado y un compromiso total con la seguridad y eficiencia.
          </p>
          <div className="flex justify-center mt-8">
            <Link to="/portfolio" className="bg-blue-800 text-white py-3 px-8 rounded-full hover:bg-green-500 transition-all">
              Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
