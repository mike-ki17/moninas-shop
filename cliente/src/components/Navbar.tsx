import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, LogIn, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logoBlanco from '../../public/logo3.png'; // Adjust the path as necessary
import logoOriginal from '../../public/logo.png'; // Adjust the path as necessary

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <img src={`${isScrolled ? logoOriginal : logoBlanco}`} alt="logo" className={`w-24`}/>
        <Link to="/" className="text-2xl font-bold flex items-center">
          {/* <span className={`${isScrolled ? 'text-primary' : 'text-white'}`}>
            Empanadería
          </span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium ${isScrolled ? 'text-neutral-900 hover:text-primary' : 'text-white hover:text-primary-100'}`}>
            Inicio
          </Link>
          <Link to="/menu" className={`font-medium ${isScrolled ? 'text-neutral-900 hover:text-primary' : 'text-white hover:text-primary-100'}`}>
            Menú
          </Link>
          <Link to="/wholesale" className={`font-medium ${isScrolled ? 'text-neutral-900 hover:text-primary' : 'text-white hover:text-primary-100'}`}>
            Mayoristas
          </Link>
          <Link to="/promotions" className={`font-medium ${isScrolled ? 'text-neutral-900 hover:text-primary' : 'text-white hover:text-primary-100'}`}>
            Promociones
          </Link>
          <Link to="/login" className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-neutral-900 hover:text-primary' : 'text-white hover:text-primary-100'}`}>
            <LogIn size={18} />
            <span>Ingresar</span>
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className={`${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingCart className={`${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X className={`${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
            ) : (
              <Menu className={`${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link to="/" className="font-medium text-neutral-900 hover:text-primary" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link to="/menu" className="font-medium text-neutral-900 hover:text-primary" onClick={toggleMenu}>
              Menú
            </Link>
            <Link to="/wholesale" className="font-medium text-neutral-900 hover:text-primary" onClick={toggleMenu}>
              Mayoristas
            </Link>
            <Link to="/promotions" className="font-medium text-neutral-900 hover:text-primary" onClick={toggleMenu}>
              Promociones
            </Link>
            <Link to="/login" className="flex items-center space-x-2 font-medium text-neutral-900 hover:text-primary" onClick={toggleMenu}>
              <LogIn size={18} />
              <span>Ingresar</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;