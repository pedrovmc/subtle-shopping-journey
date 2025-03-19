
import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductsSectionProps {
  title: string;
  viewAllLink: string;
  sectionTag?: string;
  products: any[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title,
  viewAllLink,
  sectionTag,
  products
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.querySelector('div')?.offsetWidth ?? 220;
    const scrollAmount = cardWidth * 2 + 32; // 2 cards + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };
  
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current 
    ? scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10
    : true;

  return (
    <section className="py-10">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h2 className="section-title mb-0 inline-flex flex-col">
              {title}
              {sectionTag && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-shop-red/10 text-shop-red mt-2 inline-block">
                  {sectionTag}
                </span>
              )}
            </h2>
          </div>
          
          <div className="flex items-center">
            <Link to={viewAllLink} className="text-shop-blue hover:underline mr-6 text-sm font-medium">
              Ver todos
            </Link>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full border ${
                  canScrollLeft 
                    ? 'bg-white text-shop-blue hover:bg-gray-50' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-full border ${
                  canScrollRight 
                    ? 'bg-white text-shop-blue hover:bg-gray-50' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-[220px]">
              <ProductCard 
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                unit={product.unit}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
