
import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import { ShoppingBag, Wine, Beef, Apple, Shower, Home, Coffee, Gift } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    title: 'Mercado', 
    slug: 'mercado', 
    icon: <ShoppingBag size={24} className="text-shop-blue" />, 
    color: 'bg-shop-blue' 
  },
  { 
    id: 2, 
    title: 'Bebidas', 
    slug: 'bebidas', 
    icon: <Wine size={24} className="text-shop-red" />, 
    color: 'bg-shop-red' 
  },
  { 
    id: 3, 
    title: 'Carnes', 
    slug: 'carnes', 
    icon: <Beef size={24} className="text-shop-orange" />, 
    color: 'bg-shop-orange' 
  },
  { 
    id: 4, 
    title: 'Hortifruti', 
    slug: 'hortifruti', 
    icon: <Apple size={24} className="text-shop-green" />, 
    color: 'bg-shop-green' 
  },
  { 
    id: 5, 
    title: 'Higiene e Beleza', 
    slug: 'higiene-beleza', 
    icon: <Shower size={24} className="text-shop-light-blue" />, 
    color: 'bg-shop-light-blue' 
  },
  { 
    id: 6, 
    title: 'Casa e Limpeza', 
    slug: 'casa-limpeza', 
    icon: <Home size={24} className="text-shop-teal" />, 
    color: 'bg-shop-teal' 
  },
  { 
    id: 7, 
    title: 'Café da Manhã', 
    slug: 'cafe-da-manha', 
    icon: <Coffee size={24} className="text-shop-yellow" />, 
    color: 'bg-shop-yellow' 
  },
  { 
    id: 8, 
    title: 'Produtos Especiais', 
    slug: 'produtos-especiais', 
    icon: <Gift size={24} className="text-shop-blue" />, 
    color: 'bg-shop-blue' 
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center mb-10 mx-auto">
          Explore por Categorias
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              icon={category.icon}
              slug={category.slug}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
