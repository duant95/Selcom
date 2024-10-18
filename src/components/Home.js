import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'animate.css'; // Importa Animate.css para animaciones

function Home() {
  useEffect(() => {
    const statsItems = document.querySelectorAll('.stat-item');
    const handleScroll = () => {
      statsItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          item.classList.add('in-view');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('images/tim-kabel-FCrYdP8gohg-unsplash.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg animate__animated animate__fadeIn">Innovación en Seguridad y Comunicaciones</h1>
          <p className="text-2xl mb-6 max-w-2xl drop-shadow-md animate__animated animate__fadeIn animate__delay-1s">Protegemos lo que más valoras con soluciones inteligentes en seguridad y sistemas de señales débiles.</p>
          <Link to="/contact" className="bg-gradient-to-r from-green-500 to-green-700 text-white py-4 px-10 rounded-full hover:bg-green-600 hover:shadow-lg transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s">
            Descubre Más
          </Link>
        </div>
      </section>

      {/* Three Questions Section */}
      <div className="bg-gray-100 py-12 shadow-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-black">
          {[
            { title: "¿Qué hacemos?", description: "Soluciones personalizadas en seguridad y comunicaciones.", icon: "fas fa-lock" },
            { title: "¿Por qué importa?", description: "Protegemos tu negocio con tecnología de vanguardia.", icon: "fas fa-shield-alt" },
            { title: "¿Cómo lo consigues?", description: "Contacta con nosotros y transforma tu seguridad.", icon: "fas fa-phone" }
          ].map((item, index) => (
            <div key={index} className="transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-3xl font-semibold">{item.title}</h3>
              <p className="text-lg mt-2">{item.description}</p>
              <i className={`${item.icon} text-green-500 text-4xl mb-2`}></i>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-5xl font-bold text-blue-900 fade-in animate__animated animate__fadeIn">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700 mt-6 px-6 max-w-4xl mx-auto fade-in animate__animated animate__fadeIn animate__delay-1s">Con más de 14 años en el mercado, Selcom ofrece soluciones integrales en instalación, desarrollo y mantenimiento de sistemas de señales débiles.</p>
        <img src="images/christina-wocintechchat-com-c5pRBXFhJgo-unsplash.jpg" alt="About Image" className="w-full h-60 object-cover mt-6 rounded-lg shadow-lg fade-in animate__animated animate__fadeIn animate__delay-2s" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 fade-in animate__animated animate__fadeIn animate__delay-1s">
          {[
            { title: "Instalación de Señales", description: "Instalamos sistemas de señales débiles en todo tipo de infraestructuras.", icon: "fas fa-tools" },
            { title: "Desarrollo de Proyectos", description: "Desarrollamos proyectos de SSDD para edificaciones de gran escala.", icon: "fas fa-drafting-compass" },
            { title: "Mantenimiento de Sistemas", description: "Proveemos mantenimiento especializado para sistemas electrónicos complejos.", icon: "fas fa-hammer" }
          ].map((service, index) => (
            <div key={index} className="service-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105 border-t-4 border-transparent hover:border-green-500 animate__animated animate__fadeIn animate__delay-1s">
              <i className={`${service.icon} text-green-500 text-6xl mb-6`}></i>
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <p className="text-gray-700 mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">Proyectos Recientes</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {[
            { src: "images/Screenshot 2024-09-10 145643.png", title: "Proyecto 1", description: "Instalación de sistemas de seguridad en edificios corporativos." },
            { src: "images/jose-gil-u5frYBWi5F4-unsplash.jpg", title: "Proyecto 2", description: "Red de datos para edificios gubernamentales." }
          ].map((project, index) => (
            <div className="fade-in" key={index}>
              <img src={project.src} alt={`Proyecto ${index + 1}`} className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105" />
              <h3 className="text-3xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">
          Empresas e Instituciones que Confían en Nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            "images/Ministerio de Obras Publicas y Comunicaciones PY.jpg", "images/Corte Suprema PY.png", 
            "images/Camara de Diputados.png", "images/Aduana.jpeg", 
            "images/SNPP.png", "images/IPSlogo.png", 
            "images/UNA.jpeg", "images/WTC Asuncion.jpeg", 
            "images/Banco do Brasil.png", "images/Yacyreta.webp", 
            "images/CIT-LOGO-.png", "images/LOGO-TEATRO-MUNICIPAL-01.webp", 
            "images/Axion.jpg", "images/Cooperativa Lambare.gif", 
            "images/petropar.webp", "images/Hierropar.jpeg", 
            "images/chacomer_logo.png", "images/OIP.jpeg"
          ].map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-28 mx-auto"
              style={{ height: '150px' }} // Ajuste manual de altura para mejorar el centrado vertical
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

      {/* Construction Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">
          Constructoras Aliadas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            "images/CIVSA.png", "images/Tedec.jpg", 
            "images/Itasa.png", "images/Implenia.jpeg", 
            "images/Jimenez.jpeg", "images/MM SA.jpg", 
            "images/AGB.jpeg", "images/Diaz Martinez.jpg" 
          ].map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-28 mx-auto"
              style={{ height: '150px' }} // Ajuste manual de altura para mejorar el centrado vertical
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

      {/* Brands Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">
          Nuestras Marcas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
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
              style={{ height: '150px' }} // Ajuste manual de altura para mejorar el centrado vertical
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">Nuestras Estadísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 fade-in animate__animated animate__fadeIn animate__delay-1s">
          {[
            { number: "+100", label: "Proyectos Completados", icon: "fas fa-trophy" },
            { number: "+50", label: "Clientes Satisfechos", icon: "fas fa-users" },
            { number: "+10", label: "Años de Experiencia", icon: "fas fa-business-time" }
          ].map((stat, index) => (
            <div key={index} className="stat-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105 border-t-4 border-transparent hover:border-green-500">
              <i className={`${stat.icon} text-green-500 text-6xl mb-6`}></i>
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 fade-in animate__animated animate__fadeIn">¡Contáctanos!</h2>
        <p className="text-lg text-gray-700 mb-6 fade-in animate__animated animate__fadeIn animate__delay-1s">Estamos aquí para ayudarte con tus necesidades de seguridad y comunicaciones.</p>
        <Link to="/contact" className="bg-green-500 text-white py-4 px-10 rounded-full hover:bg-green-600 transition-all duration-300 fade-in animate__animated animate__fadeIn animate__delay-2s">
          Contacto
        </Link>
      </section>
    </div>
  );
}

export default Home;
