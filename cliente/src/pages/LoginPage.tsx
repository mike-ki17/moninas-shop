import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-4">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Form Header */}
          <div className="flex">
            <button
              className={`flex-1 text-center py-4 font-medium ${
                isLogin ? 'bg-primary text-white' : 'bg-white text-neutral-600'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Iniciar Sesión
            </button>
            <button
              className={`flex-1 text-center py-4 font-medium ${
                !isLogin ? 'bg-primary text-white' : 'bg-white text-neutral-600'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Registrarse
            </button>
          </div>
          
          {/* Form Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Bienvenido de Vuelta' : 'Crear una Cuenta'}
            </h2>
            
            <form>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name\" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ingresa tu nombre"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ingresa tu contraseña"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {!isLogin && (
                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="isWholesale"
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="isWholesale" className="text-sm text-neutral-700">
                      Quiero registrarme como cliente mayorista
                    </label>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="btn btn-primary w-full mb-4"
              >
                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
              </button>
              
              {isLogin && (
                <div className="text-center mb-4">
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              )}
              
              <div className="text-center text-sm text-neutral-600">
                {isLogin ? "¿No tienes una cuenta? " : "¿Ya tienes una cuenta? "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-primary font-medium hover:underline"
                >
                  {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;