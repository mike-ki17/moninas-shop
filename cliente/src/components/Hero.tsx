import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="../../public/banner.jpg" 
          alt="Empanadas frescas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white pt-16">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Sabor <span className="text-primary">Auténtico</span> en Cada Bocado
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Empanadas y pasteles de yuca elaborados con ingredientes frescos y recetas tradicionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="btn btn-primary flex items-center justify-center gap-2">
              <ShoppingBag size={20} />
              <span>Ordenar Ahora</span>
            </Link>
            <Link to="/wholesale" className="btn btn-outline flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-neutral-900">
              <Users size={20} />
              <span>Compra Mayorista</span>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in animate-fade-in-delay-1">
            {/* <div className="flex flex-col items-center text-center p-4 bg-black/30 backdrop-blur rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Rápido y Fresco</h3>
              <p className="text-sm opacity-80">Del aceite a tu mesa en minutos</p>
            </div> */}
            <div className="flex flex-col items-center text-center p-4 bg-black/30 backdrop-blur rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Ingredientes Premium</h3>
              <p className="text-sm opacity-80">Calidad que se puede saborear</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-black/30 backdrop-blur rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Recetas Auténticas</h3>
              <p className="text-sm opacity-80">Tradición en cada mordida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-white text-sm mb-2">Desplázate</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;