import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBlanco from '../../public/logo3.png'; // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-2xl font-bold mb-4">Empanadería</h3> */}
            <img src={logoBlanco} alt="Logo" className='w-48 mb-4' />
            <p className="text-neutral-300 mb-4">
              Sabores auténticos en cada bocado. Sirviendo las mejores empanadas y pasteles de yuca de la ciudad.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/menu" className="text-neutral-300 hover:text-primary transition-colors">Menú</Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-neutral-300 hover:text-primary transition-colors">Mayoristas</Link>
              </li>
              <li>
                <Link to="/promotions" className="text-neutral-300 hover:text-primary transition-colors">Promociones</Link>
              </li>
              {/* <li>
                <Link to="/login" className="text-neutral-300 hover:text-primary transition-colors">Mi Cuenta</Link>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-neutral-300 hover:text-primary transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-300 hover:text-primary transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-neutral-300 hover:text-primary transition-colors">Envíos</Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-primary transition-colors">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {/* <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-neutral-300">Av. Principal 123, Ciudad</span>
              </li> */}
              <li className="flex items-center space-x-3">
                <Phone className="text-primary" size={18} />
                <span className="text-neutral-300">3124046068</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary" size={18} />
                <span className="text-neutral-300">moninasplus@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-12 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Moninas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;