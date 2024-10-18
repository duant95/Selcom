import React from 'react';

function Projects() {
  return (
    <div className="projects">
      {/* Hero Section */}
      <section id="projects" className="bg-white text-center py-20">
        <h2 className="text-5xl font-bold text-blue-900 mb-10">Nuestros Proyectos</h2>
        <p className="text-lg text-gray-700 mb-16">
          Estos son algunos de los proyectos en los que hemos trabajado, colaborando con empresas e instituciones de gran renombre para brindar soluciones de calidad en sistemas de señales débiles.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {/* Project 1: Instalación de CCTV */}
          <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg"
              alt="Instalación de CCTV"
              className="w-full h-60 object-cover mb-4"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Instalación de Sistemas de CCTV</h3>
              <p className="text-gray-700">
                Implementamos sistemas de CCTV en instalaciones comerciales, garantizando la seguridad y vigilancia continua.
              </p>
            </div>
          </div>

          {/* Project 2: Instalación de Alarmas de Incendios */}
          <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="/images/Proyecto5_1.jpg"
              alt="Instalación de Alarmas de Incendios"
              className="w-full h-60 object-cover mb-4"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Instalación de Alarmas de Incendios</h3>
              <p className="text-gray-700">
                Realizamos la instalación de alarmas de incendios en edificios, asegurando la protección de vidas y bienes.
              </p>
            </div>
          </div>

          {/* Project 3: Otro Proyecto */}
          <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="/images/Proyecto3_2.jpg"
              alt="Otro Proyecto"
              className="w-full h-60 object-cover mb-4"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Otro Proyecto</h3>
              <p className="text-gray-700">
                Descripción del tercer proyecto. Puedes añadir más información relevante sobre los desafíos enfrentados y las soluciones implementadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-semibold text-blue-800 mb-8">Tecnologías Utilizadas</h2>
        <p className="text-lg text-gray-700 mb-10">
          Trabajamos con las marcas más reconocidas en tecnología para garantizar la calidad y seguridad de nuestros proyectos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {/* Lista de marcas */}
          {[
            "images/Furukawa.png", "images/Ubiquiti.png", 
            "images/zeta.jpg", "images/CDVI.jpg", 
            "images/alhua.jpeg", "images/DSC.png", 
            "images/GONSIN.jpeg", "images/tp link.png",
            "images/HIK VISION.png", "images/Panasonic.jpeg", 
            "images/HDL.png", "images/NAPCO.png", 
            "images/FIRECLASS.webp", "images/Siera.png", 
            "images/exacq.png", "images/speco.jpg"
          ].map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-28 mx-auto"
              style={{ height: '150px' }}
            >
              <img 
                src={brand} 
                alt={`Marca ${index + 1}`} 
                className="h-full w-auto max-w-full object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
