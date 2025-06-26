import React, { useRef, useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { formattedPrice } from '../utils/FormatPrice';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Format whatsapp message for ordering
  const formatWhatsAppMessage = () => {
    let message = "¡Hola! Me gustaría ordenar lo siguiente:\n\n";
    
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.product.name} - $${(item.product.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: $${formattedPrice(cartTotal)}\n\n`;
    
    return encodeURIComponent(message);
  };

  // WhatsApp checkout link
  const whatsappLink = `https://wa.me/3124046068?text=${formatWhatsAppMessage()}`;

  return (
    <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Drawer Content */}
      <div 
        ref={drawerRef}
        className={`relative bg-white h-full w-full max-w-md flex flex-col transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Tu Carrito</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-neutral-100">
            <X size={24} />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-neutral-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tu carrito está vacío</h3>
              <p className="text-neutral-500 mb-6">Agrega algunos productos deliciosos</p>
              <button 
                onClick={onClose} 
                className="btn btn-primary"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex border-b pb-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="ml-3 flex-grow">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.product.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-400 hover:text-error"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-neutral-500 text-sm">${formattedPrice(item.product.price)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-full border border-neutral-200 hover:bg-neutral-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-full border border-neutral-200 hover:bg-neutral-100"
                      >
                        <Plus size={14} />
                      </button>
                      
                      <div className="ml-auto font-semibold">
                        ${formattedPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">${formattedPrice(cartTotal)}</span>
            </div>
            
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="text-white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Ordenar por WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;