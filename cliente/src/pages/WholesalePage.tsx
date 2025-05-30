import React, { useState } from 'react';
import { wholesalePrices, wholesaleBenefits } from '../data/wholesale';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const WholesalePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
    productType: 'empanadas',
    quantity: '50'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message for wholesale quote
    const message = `Hola, me gustaría solicitar una cotización mayorista:
    
Nombre: ${formData.name}
Negocio: ${formData.business}
Email: ${formData.email}
Teléfono: ${formData.phone}
Producto: ${formData.productType}
Cantidad: ${formData.quantity}
Mensaje: ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-500 py-24 px-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Empanadas y Pasteles al Por Mayor
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Soluciones para restaurantes, tiendas, eventos y revendedores. Calidad y precios competitivos para tu negocio.
            </p>
            <a href="#quote" className="btn bg-white text-primary-600 hover:bg-neutral-100">
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">¿Por qué elegirnos como tu proveedor?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wholesaleBenefits.map((benefit, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Tables */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="section-title">Precios Mayoristas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Empanadas Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-600 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Empanadas</h3>
                <p>Varios sabores disponibles</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-3 text-left font-semibold text-neutral-600">Cantidad</th>
                      <th className="py-3 text-right font-semibold text-neutral-600">Precio por Unidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wholesalePrices.empanadas.map((price, index) => (
                      <tr key={index} className="border-b border-neutral-200">
                        <td className="py-3">{price.quantity} unidades</td>
                        <td className="py-3 text-right font-semibold">${price.pricePerUnit.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-6 text-center">
                  <a href="#quote" className="btn btn-primary">Solicitar Cotización</a>
                </div>
              </div>
            </div>
            
            {/* Pasteles Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-secondary text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Pasteles de Yuca</h3>
                <p>Alta calidad garantizada</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-3 text-left font-semibold text-neutral-600">Cantidad</th>
                      <th className="py-3 text-right font-semibold text-neutral-600">Precio por Unidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wholesalePrices.pasteles.map((price, index) => (
                      <tr key={index} className="border-b border-neutral-200">
                        <td className="py-3">{price.quantity} unidades</td>
                        <td className="py-3 text-right font-semibold">${price.pricePerUnit.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-6 text-center">
                  <a href="#quote" className="btn bg-secondary text-white hover:bg-secondary-600">
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary rounded-r-lg">
            <p>
              <strong>Nota:</strong> Los precios pueden variar según temporada y disponibilidad. 
              Para pedidos de más de 200 unidades o requerimientos especiales, contáctanos directamente.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quote Form */}
      <section id="quote" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Solicita tu Cotización</h2>
            
            <form onSubmit={handleSubmit} className="bg-neutral-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre Completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre del Negocio*
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Correo Electrónico*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Teléfono*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-neutral-700 mb-1">
                    Tipo de Producto*
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="empanadas">Empanadas</option>
                    <option value="pasteles">Pasteles de Yuca</option>
                    <option value="mixto">Mixto</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                    Cantidad Aproximada*
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="25">25 unidades</option>
                    <option value="50">50 unidades</option>
                    <option value="100">100 unidades</option>
                    <option value="200">200 unidades</option>
                    <option value="other">Más de 200 unidades</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Mensaje o Requerimientos Especiales
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <button type="submit" className="btn btn-primary w-full md:w-auto">
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-neutral-800 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Lo que dicen nuestros clientes mayoristas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-700/50 p-6 rounded-lg">
              <p className="italic mb-6">
                "Tengo una cafetería y los pasteles de yuca son un éxito. La calidad es consistente y el servicio de entrega es puntual."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Jorge Mendoza</h4>
                  <p className="text-neutral-300">Dueño de Café Central</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-700/50 p-6 rounded-lg">
              <p className="italic mb-6">
                "Abastecemos nuestra tienda de conveniencia con estas empanadas y la rotación es increíble. Los clientes siempre vuelven por más."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Ana Gutiérrez</h4>
                  <p className="text-neutral-300">Gerente de MiniMarket Express</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-700/50 p-6 rounded-lg">
              <p className="italic mb-6">
                "Organizamos eventos corporativos y siempre incluimos estos productos en nuestro catering. El feedback de los asistentes es excelente."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Carlos Vega</h4>
                  <p className="text-neutral-300">Director de Eventos Empresariales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para empezar?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para discutir cómo podemos ser tu proveedor de confianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="btn bg-white text-primary hover:bg-neutral-100">
              Solicitar Cotización
            </a>
            <a href="tel:+123456789" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WholesalePage;