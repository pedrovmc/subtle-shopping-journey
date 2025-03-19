
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  slug: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, slug, color }) => {
  return (
    <Link 
      to={`/categorias/${slug}`}
      className={`block ${color} rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow group`}
    >
      <div className="p-4 h-full flex flex-col items-center justify-center text-center">
        <div className="bg-white/90 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="font-medium text-sm md:text-base text-white">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
