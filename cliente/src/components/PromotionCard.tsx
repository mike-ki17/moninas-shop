import React from 'react';
import { Promotion } from '../types';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  // Calculate remaining time
  const now = new Date();
  const endDate = new Date(promotion.endDate);
  const diffTime = Math.max(0, endDate.getTime() - now.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={promotion.imageUrl} 
          alt={promotion.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-secondary text-white font-bold px-4 py-2">
          {promotion.discountPercentage}% OFF
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2">{promotion.title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{promotion.description}</p>
        
        <div className="flex items-center text-neutral-500 mb-4">
          <Clock size={18} className="mr-2" />
          <span>Termina en: {diffDays} días {diffHours} horas</span>
        </div>
        
        <Link 
          to="/menu" 
          className="btn btn-primary w-full text-center"
        >
          Aprovechar Oferta
        </Link>
      </div>
    </div>
  );
};

export default PromotionCard;