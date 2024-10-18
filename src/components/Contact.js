import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    if (!formData.message) newErrors.message = 'El mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Aquí debes configurar tu servicio y plantilla de EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email enviado:', response.status, response.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reiniciar el formulario
        setErrors({}); // Limpiar errores
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-white to-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-500 mt-2">Estamos aquí para ayudarte. ¡Envía un mensaje!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white shadow-2xl rounded-lg p-10 transition-transform hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Formulario de Contacto</h3>
            {submitted && <p className="text-green-500 mb-4">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-500' : ''}`} required />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-500' : ''}`} required />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.message ? 'border-red-500' : ''}`} required></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              <button type="submit" className="bg-blue-900 text-white py-3 px-8 rounded-full hover:bg-green-500 transition-all shadow-lg">Enviar</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white shadow-2xl rounded-lg p-10 hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Detalles de Contacto</h3>
              <ul className="text-gray-600 space-y-4">
                <li><strong>Dirección:</strong> Calle 12 de Octubre, Asunción, Paraguay</li>
                <li><strong>Teléfono:</strong> +595 21 229 360</li>
                <li><strong>Email:</strong> info@selcom.com.py</li>
                <li><strong>Horario de Atención:</strong> Lunes a Viernes: 8 AM - 5 PM, Sábados: 8 AM - 12 PM</li>
              </ul>
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-10 hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Redes Sociales</h3>
              <div className="flex justify-start space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-green-500 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/selcom_py" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-green-500 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-green-500 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Encuéntranos Aquí</h3>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.999215485182!2d-57.6148147256361!3d-25.30423042792535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da87029d6f5ad%3A0xd30e739d8d25d55!2sSELCOM%20SRL!5e0!3m2!1sen!2spy!4v1728922129139!5m2!1sen!2spy"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación de Selcom"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
