import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import PromotionCard from '../components/PromotionCard';
import { getPopularProducts } from '../data/products';
import { promotions } from '../data/promotions';
import CountdownTimer from '../components/CountdownTimer';

const HomePage: React.FC = () => {
  const popularProducts = getPopularProducts();
  
  // Set a date one week from now for the countdown
  const [countdownDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Popular Products Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Productos Populares</h2>
            <Link to="/menu" className="text-primary font-medium flex items-center hover:underline">
              Ver todo <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Promo Banner */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                Oferta Especial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Combo Familiar: 10 Empanadas + 2 Jugos</h2>
              <p className="text-white/90 mb-6">
                Disfruta de nuestro increíble combo familiar este fin de semana. ¡Ideal para compartir!
              </p>
              <div className="mb-6">
                <CountdownTimer targetDate={countdownDate} />
              </div>
              <Link to="/menu" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                Ordenar Ahora
              </Link>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Combo familiar" 
                className="rounded-lg shadow-lg transform -rotate-3 relative z-10 max-w-full"
              />
              <div className="absolute inset-0 bg-primary-600 rounded-lg shadow-lg transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-neutral-600">
                Ingredientes frescos y seleccionados para un sabor único.
              </p>
            </div>
            <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Servicio Rápido</h3>
              <p className="text-neutral-600">
                Entregas puntuales y atención inmediata.
              </p>
            </div>
            <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receta Original</h3>
              <p className="text-neutral-600">
                Preparadas con la auténtica receta tradicional.
              </p>
            </div>
            <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Siempre Innovando</h3>
              <p className="text-neutral-600">
                Nuevos sabores y opciones cada temporada.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Promotions Preview */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Promociones Actuales</h2>
            <Link to="/promotions" className="text-primary font-medium flex items-center hover:underline">
              Ver todas <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.slice(0, 3).map(promotion => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Las mejores empanadas que he probado. El sabor es increíble y siempre llegan calientes."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">María González</h4>
                  <p className="text-sm text-neutral-500">Cliente Regular</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Soy dueño de una cafetería y todos mis clientes aman los pasteles de yuca. Servicio mayorista excelente."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Carlos Rodríguez</h4>
                  <p className="text-sm text-neutral-500">Cliente Mayorista</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Rápidos, eficientes y extremadamente deliciosos. Siempre pido para eventos familiares."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Laura Méndez</h4>
                  <p className="text-sm text-neutral-500">Cliente Frecuente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para probar lo mejor?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ordena ahora y disfruta de nuestras deliciosas empanadas y pasteles de yuca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn bg-white text-primary hover:bg-neutral-100">
              Ver Menú Completo
            </Link>
            <Link to="/wholesale" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Compra Mayorista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;