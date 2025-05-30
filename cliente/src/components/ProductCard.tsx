import React from 'react';
import { Plus, Info } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="card group h-full flex flex-col">
      {/* Product Image with Overlay */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <Link 
            to={`/product/${product.id}`}
            className="btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white hover:text-neutral-900 transition-colors"
          >
            <Info size={18} />
          </Link>
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary p-2 rounded-full"
          >
            <Plus size={18} />
          </button>
        </div>
        
        {/* Popular Badge */}
        {product.popular && (
          <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-neutral-600 text-sm mb-2 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-neutral-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="btn bg-primary text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;