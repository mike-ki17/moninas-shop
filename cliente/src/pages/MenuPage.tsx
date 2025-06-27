import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Search } from 'lucide-react';
import producto_001 from '../../public/productos/producto_001.png'

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(getProductsByCategory('all'));
  
  useEffect(() => {
    const products = getProductsByCategory(activeCategory);
    
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory, searchTerm]);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary py-24 px-4">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Nuestro Menú
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto text-lg">
            Descubre todas nuestras deliciosas opciones, preparadas con ingredientes frescos y recetas tradicionales.
          </p>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white shadow-md">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-2">No se encontraron productos</h3>
              <p className="text-neutral-600 mb-6">
                Intenta con otros términos de búsqueda o categoría
              </p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="btn btn-primary"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Customization Option */}
      <section className="bg-neutral-800 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">¿Necesitas un pedido personalizado?</h2>
              <p className="text-neutral-300 mb-6">
                Ofrecemos opciones personalizadas para eventos, fiestas y necesidades especiales. 
                Contáctanos para discutir tus requerimientos.
              </p>
              <a 
                href="https://wa.me/3124046068" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-primary text-white hover:bg-primary-600"
              >
                Contáctanos para Pedidos Especiales
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src={producto_001} 
                alt="Pedidos personalizados" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;