
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ReorderSection from '@/components/sections/ReorderSection';

// Mock products data
const discountProducts = [
  {
    id: '1',
    name: 'Bala Gelatina Fini Azedinhos Aros Morango Unidade 80 G',
    image: 'https://via.placeholder.com/200?text=Fini+Azedinhos',
    price: 4.25,
    originalPrice: 4.39,
    unit: 'un',
    discount: 3
  },
  {
    id: '2',
    name: 'Bala Gelatina Fini Minhocas Sabores Sortidos Unidade 80 G',
    image: 'https://via.placeholder.com/200?text=Fini+Minhocas',
    price: 4.25,
    originalPrice: 4.39,
    unit: 'un',
    discount: 3
  },
  {
    id: '3',
    name: 'Bala Gelatina Fini Tubes Twister Frutas Silvestres E Naturais 80 G',
    image: 'https://via.placeholder.com/200?text=Fini+Tubes',
    price: 4.25,
    originalPrice: 4.39,
    unit: 'un',
    discount: 3
  },
  {
    id: '4',
    name: 'Bala Gelatina Fini Tubes Azedinhos Twister Frutas Silvestres 80 G',
    image: 'https://via.placeholder.com/200?text=Fini+Tubes+Azedinhos',
    price: 4.25,
    originalPrice: 4.39,
    unit: 'un',
    discount: 3
  },
  {
    id: '5',
    name: 'Biscoito Salgado Arroz Camil Integral Pacote 18 G',
    image: 'https://via.placeholder.com/200?text=Biscoito+Arroz+Camil',
    price: 0.89,
    originalPrice: 0.99,
    unit: 'pct',
    discount: 10
  },
  {
    id: '6',
    name: 'Bala Gelatina Fini Amora Unidade 12 G',
    image: 'https://via.placeholder.com/200?text=Fini+Amora',
    price: 4.25,
    originalPrice: 4.39,
    unit: 'un',
    discount: 3
  },
  {
    id: '7',
    name: 'Macarrão Espaguete Adria Grano Duro 500g',
    image: 'https://via.placeholder.com/200?text=Macarrao+Adria',
    price: 5.79,
    originalPrice: 6.99,
    unit: 'un',
    discount: 17
  },
  {
    id: '8',
    name: 'Café Santa Clara Tradicional 250g',
    image: 'https://via.placeholder.com/200?text=Cafe+Santa+Clara',
    price: 7.49,
    originalPrice: 8.99,
    unit: 'un',
    discount: 16
  }
];

const popularProducts = [
  {
    id: '9',
    name: 'Arroz Tio João Tipo 1 5kg',
    image: 'https://via.placeholder.com/200?text=Arroz+Tio+Joao',
    price: 22.90,
    unit: 'un'
  },
  {
    id: '10',
    name: 'Feijão Carioca Camil Tipo 1 1kg',
    image: 'https://via.placeholder.com/200?text=Feijao+Camil',
    price: 7.99,
    unit: 'un'
  },
  {
    id: '11',
    name: 'Açúcar Refinado União 1kg',
    image: 'https://via.placeholder.com/200?text=Acucar+Uniao',
    price: 4.79,
    unit: 'un'
  },
  {
    id: '12',
    name: 'Óleo de Soja Soya 900ml',
    image: 'https://via.placeholder.com/200?text=Oleo+Soya',
    price: 6.99,
    unit: 'un'
  },
  {
    id: '13',
    name: 'Leite UHT Integral Italac 1L',
    image: 'https://via.placeholder.com/200?text=Leite+Italac',
    price: 4.59,
    unit: 'un'
  },
  {
    id: '14',
    name: 'Café Melitta Tradicional 500g',
    image: 'https://via.placeholder.com/200?text=Cafe+Melitta',
    price: 18.90,
    unit: 'un'
  },
  {
    id: '15',
    name: 'Sabão em Pó Omo Lavagem Perfeita 800g',
    image: 'https://via.placeholder.com/200?text=Omo',
    price: 12.49,
    originalPrice: 13.99,
    unit: 'un',
    discount: 10
  },
  {
    id: '16',
    name: 'Papel Higiênico Neve Folha Dupla 12 rolos',
    image: 'https://via.placeholder.com/200?text=Papel+Neve',
    price: 18.90,
    unit: 'pct'
  }
];

const marataProducts = [
  {
    id: '17',
    name: 'Suco em Pó Maratá Sabor Uva 30g',
    image: 'https://via.placeholder.com/200?text=Suco+Marata',
    price: 1.19,
    originalPrice: 1.59,
    unit: 'un',
    discount: 25
  },
  {
    id: '18',
    name: 'Farinha de Milho Maratá Flocão Cuscuz 500g',
    image: 'https://via.placeholder.com/200?text=Farinha+Marata',
    price: 1.79,
    originalPrice: 2.29,
    unit: 'un',
    discount: 20
  },
  {
    id: '19',
    name: 'Café Maratá Tradicional 250g',
    image: 'https://via.placeholder.com/200?text=Cafe+Marata',
    price: 6.99,
    originalPrice: 8.99,
    unit: 'un',
    discount: 22
  },
  {
    id: '20',
    name: 'Tempero Completo Maratá 300g',
    image: 'https://via.placeholder.com/200?text=Tempero+Marata',
    price: 3.49,
    originalPrice: 4.29,
    unit: 'un',
    discount: 18
  },
  {
    id: '21',
    name: 'Macarrão Maratá Espaguete 500g',
    image: 'https://via.placeholder.com/200?text=Macarrao+Marata',
    price: 3.29,
    originalPrice: 3.99,
    unit: 'un',
    discount: 17
  },
  {
    id: '22',
    name: 'Molho de Tomate Maratá Tradicional 340g',
    image: 'https://via.placeholder.com/200?text=Molho+Marata',
    price: 2.49,
    originalPrice: 2.99,
    unit: 'un',
    discount: 16
  },
  {
    id: '23',
    name: 'Refresco Maratá Sabor Laranja 30g',
    image: 'https://via.placeholder.com/200?text=Refresco+Marata',
    price: 1.19,
    originalPrice: 1.49,
    unit: 'un',
    discount: 20
  },
  {
    id: '24',
    name: 'Amido de Milho Maratá 500g',
    image: 'https://via.placeholder.com/200?text=Amido+Marata',
    price: 4.99,
    originalPrice: 6.29,
    unit: 'un',
    discount: 20
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        
        <ProductsSection 
          title="Ofertas da Semana" 
          viewAllLink="/ofertas" 
          sectionTag="Até 50% off"
          products={discountProducts} 
        />
        
        <ReorderSection />
        
        <ProductsSection 
          title="Ofertas Especiais Maratá" 
          viewAllLink="/promocoes/marata" 
          products={marataProducts} 
        />
        
        <ProductsSection 
          title="Mais Vendidos" 
          viewAllLink="/mais-vendidos" 
          products={popularProducts} 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
