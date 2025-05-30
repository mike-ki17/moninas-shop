import React from 'react';
import { promotions } from '../data/promotions';
import PromotionCard from '../components/PromotionCard';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';

const PromotionsPage: React.FC = () => {
  // Set a date one week from now for the featured promotion
  const featuredPromoEndDate = new Date();
  featuredPromoEndDate.setDate(featuredPromoEndDate.getDate() + 7);
  
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-primary py-24 px-4">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Promociones Especiales
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto text-lg">
            Aprovecha nuestras ofertas limitadas y disfruta de nuestros productos a precios increíbles.
          </p>
        </div>
      </div>
      
      {/* Featured Promotion */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary rounded-full text-white text-sm font-medium mb-4">
                Oferta Destacada
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Combo Familiar Completo: 30% OFF
              </h2>
              <p className="text-white/90 mb-6">
                Lleva 15 empanadas variadas + 4 pasteles de yuca + 4 jugos naturales con un increíble 30% de descuento. 
                ¡Perfecto para reuniones familiares o con amigos!
              </p>
              <div className="mb-8">
                <p className="mb-2 font-medium">Esta oferta termina en:</p>
                <CountdownTimer targetDate={featuredPromoEndDate} />
              </div>
              <Link to="/menu" className="btn bg-primary text-white hover:bg-primary-600">
                Ordenar Ahora
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5718090/pexels-photo-5718090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Combo familiar" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-secondary text-white text-xl font-bold px-4 py-2 rounded-lg rotate-12">
                30% OFF
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Promotions */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <h2 className="section-title">Todas Nuestras Promociones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map(promotion => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">¿Cómo funcionan nuestras promociones?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Las promociones están disponibles por tiempo limitado, según se indica en cada una.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Los descuentos se aplican automáticamente al realizar tu pedido durante el período de la promoción.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Las promociones no son acumulables entre sí, salvo que se indique lo contrario.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Para pedidos mayoristas, consulta nuestras ofertas especiales en la sección correspondiente.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Subscribe for Promotions */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿No quieres perderte ninguna promoción?</h2>
            <p className="text-white/90 mb-8">
              Suscríbete a nuestro boletín y recibe nuestras ofertas exclusivas directamente en tu correo electrónico.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="px-4 py-3 rounded-md bg-white text-neutral-900 border-none flex-grow focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button type="submit" className="btn bg-secondary text-white hover:bg-secondary-600 whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Referral Program */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Programa de Referidos</h2>
              <p className="text-neutral-600 mb-6">
                ¿Te encanta lo que ofrecemos? ¡Compártelo con tus amigos y gana descuentos exclusivos!
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Recomienda a un amigo</h4>
                    <p className="text-neutral-500">Comparte tu código único con amigos y familiares</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tu amigo realiza un pedido</h4>
                    <p className="text-neutral-500">Cuando realicen su primer pedido usando tu código</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ambos ganan descuentos</h4>
                    <p className="text-neutral-500">Tú y tu amigo reciben un 15% de descuento en su próximo pedido</p>
                  </div>
                </li>
              </ul>
              <Link to="/register" className="btn btn-primary">
                Obtén tu Código de Referido
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Programa de referidos" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionsPage;