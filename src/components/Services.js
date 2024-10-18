import React from 'react';

function Services() {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-blue-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mt-4">
            Ofrecemos una amplia gama de soluciones diseñadas para satisfacer sus necesidades en sistemas de señales débiles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105">
            <i className="fas fa-tools text-green-500 text-6xl mb-6"></i>
            <h3 className="text-2xl font-bold">Instalación de Señales</h3>
            <p className="text-gray-700 mt-4">Instalamos sistemas de señales débiles en todo tipo de infraestructuras.</p>
            <a href="#contact" className="mt-4 inline-block bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-green-500 transition-all">Learn More</a>
          </div>

          {/* Service 2 */}
          <div className="service-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105">
            <i className="fas fa-drafting-compass text-green-500 text-6xl mb-6"></i>
            <h3 className="text-2xl font-bold">Desarrollo de Proyectos</h3>
            <p className="text-gray-700 mt-4">Desarrollamos proyectos de SSDD para edificaciones de gran escala.</p>
            <a href="#contact" className="mt-4 inline-block bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-green-500 transition-all">Learn More</a>
          </div>

          {/* Service 3 */}
          <div className="service-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105">
            <i className="fas fa-hammer text-green-500 text-6xl mb-6"></i>
            <h3 className="text-2xl font-bold">Mantenimiento de Sistemas</h3>
            <p className="text-gray-700 mt-4">Proveemos mantenimiento especializado para sistemas electrónicos complejos.</p>
            <a href="#contact" className="mt-4 inline-block bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-green-500 transition-all">Learn More</a>
          </div>
        </div>

        {/* Service Video Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Mira nuestro proceso en acción</h3>
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/example-video-id"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Service Overview Video"
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold">¿Cuánto tiempo toma la instalación?</summary>
              <p className="text-gray-600 mt-2">El tiempo de instalación depende del proyecto, pero generalmente toma entre 2 a 4 semanas.</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold">¿Cuáles son los costos?</summary>
              <p className="text-gray-600 mt-2">Los costos varían según los requerimientos del proyecto. Ofrecemos soluciones personalizadas a precios competitivos.</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold">¿Ofrecen mantenimiento post-instalación?</summary>
              <p className="text-gray-600 mt-2">Sí, ofrecemos planes de mantenimiento a medida para garantizar el buen funcionamiento de nuestros sistemas.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
