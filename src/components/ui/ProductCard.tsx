
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  unit: string;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  originalPrice,
  unit,
  discount
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add to cart logic
    toast.success(`${name} adicionado ao carrinho!`, {
      position: 'bottom-right',
    });
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success(`${name} adicionado aos favoritos!`, {
        position: 'bottom-right',
      });
    }
  };
  
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  
  const formattedOriginalPrice = originalPrice ? originalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }) : null;

  return (
    <Link
      to={`/produto/${id}`}
      className="group bg-white rounded-lg shadow-product overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pt-4 px-4">
        {discount && (
          <span className="absolute top-2 right-2 bg-shop-red text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-2 left-2 bg-white/80 rounded-full p-1.5 shadow-sm hover:bg-white transition-colors"
        >
          <Heart 
            size={18} 
            className={isFavorite ? "fill-shop-red text-shop-red" : "text-gray-400"} 
          />
        </button>
        
        <div className="flex justify-center h-32 mb-3">
          <img 
            src={image} 
            alt={name} 
            className="h-full object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        <div className="py-3 text-left">
          <h3 className="text-sm text-gray-700 font-medium line-clamp-2 h-10 mb-1">
            {name}
          </h3>
          
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formattedOriginalPrice}
              </span>
            )}
            
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-shop-blue">
                {formattedPrice}
              </span>
              <span className="text-xs text-gray-500 ml-1">
                /{unit}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`p-3 border-t bg-gray-50 ${isHovered ? 'block' : 'block'}`}>
        <button
          onClick={handleAddToCart}
          className="w-full bg-shop-green/90 hover:bg-shop-green text-white py-2 px-3 rounded flex items-center justify-center text-sm font-medium transition-colors"
        >
          <ShoppingCart size={17} className="mr-2" />
          Adicionar
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
