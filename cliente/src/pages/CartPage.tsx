import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [orderNotes, setOrderNotes] = useState('');
  
  // Format whatsapp message for ordering
  const formatWhatsAppMessage = () => {
    let message = "¡Hola! Me gustaría ordenar lo siguiente:\n\n";
    
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.product.name} - $${(item.product.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: $${cartTotal.toFixed(2)}`;
    
    if (orderNotes.trim() !== '') {
      message += `\n\nNotas: ${orderNotes}`;
    }
    
    return encodeURIComponent(message);
  };

  // WhatsApp checkout link
  const whatsappLink = `https://wa.me/123456789?text=${formatWhatsAppMessage()}`;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-100 pt-24 pb-12 px-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <ShoppingBag size={64} className="text-neutral-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
            <p className="text-neutral-600 mb-8">
              Parece que aún no has agregado ningún producto a tu carrito. Explora nuestro menú y descubre deliciosas opciones.
            </p>
            <Link to="/menu" className="btn btn-primary">
              Explorar Menú
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 pt-24 pb-12 px-4">
      <div className="container-custom">
        <div className="flex items-center mb-8">
          <Link to="/menu" className="flex items-center text-neutral-600 hover:text-primary">
            <ArrowLeft size={20} className="mr-2" />
            <span>Continuar Comprando</span>
          </Link>
          <h1 className="text-3xl font-bold ml-auto">Tu Carrito</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="border-b pb-4 mb-4 hidden md:flex">
                  <div className="w-1/2 font-semibold">Producto</div>
                  <div className="w-1/6 text-center font-semibold">Precio</div>
                  <div className="w-1/6 text-center font-semibold">Cantidad</div>
                  <div className="w-1/6 text-right font-semibold">Total</div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.product.id} className="border-b pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center">
                      {/* Product Info */}
                      <div className="flex items-start md:w-1/2 mb-4 md:mb-0">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={item.product.imageUrl} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold">{item.product.name}</h3>
                          <p className="text-sm text-neutral-500">{item.product.description.substring(0, 60)}...</p>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-sm text-red-500 flex items-center mt-2 md:hidden"
                          >
                            <Trash2 size={14} className="mr-1" />
                            <span>Eliminar</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="md:w-1/6 md:text-center mb-2 md:mb-0">
                        <div className="flex justify-between md:block">
                          <span className="md:hidden font-medium">Precio:</span>
                          <span>${item.product.price.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      {/* Quantity */}
                      <div className="md:w-1/6 md:text-center mb-2 md:mb-0">
                        <div className="flex justify-between items-center md:justify-center">
                          <span className="md:hidden font-medium">Cantidad:</span>
                          <div className="flex items-center">
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
                          </div>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="md:w-1/6 md:text-right">
                        <div className="flex justify-between md:block">
                          <span className="md:hidden font-medium">Total:</span>
                          <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      {/* Remove Button (Desktop) */}
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-400 hover:text-red-500 ml-4 hidden md:block"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={clearCart}
                    className="text-sm text-neutral-600 hover:text-red-500 flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    <span>Vaciar Carrito</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Envío</span>
                  <span>Calculado al finalizar</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
                  Notas para tu pedido (opcional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Instrucciones especiales, preferencias, etc."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary w-full flex items-center justify-center gap-2 mb-4"
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
              
              {/* Alternative Payment Methods (Placeholder) */}
              <div className="text-center text-sm text-neutral-500">
                <p>Más métodos de pago próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;