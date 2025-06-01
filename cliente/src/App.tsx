import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import WholesalePage from './pages/WholesalePage';
import PromotionsPage from './pages/PromotionsPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import CartDrawer from './components/CartDrawer';
import { CartProvider, useCart } from './context/CartContext';
import ScrollToTop  from './components/ScrollToTop';
const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/wholesale" element={<WholesalePage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Floating Cart Button */}
          <FloatingCartButton onClick={toggleCart} />
          
          {/* Cart Drawer */}
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
};

// Floating Cart Button Component
const FloatingCartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { itemCount } = useCart();
  
  if (itemCount === 0) return null;
  
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
      aria-label="Open cart"
    >
      <ShoppingCart size={24} />
      <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
        {itemCount}
      </span>
    </button>
  );
};

export default App;