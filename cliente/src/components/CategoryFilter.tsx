import React from 'react';
import { productCategories } from '../data/products';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {productCategories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeCategory === category.id 
              ? 'bg-primary text-white font-semibold shadow-md' 
              : 'bg-white text-neutral-700 hover:bg-neutral-100'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;