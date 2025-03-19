
import React, { useState } from 'react';
import ReorderCard from '../ui/ReorderCard';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const orders = [
  {
    id: '1',
    date: '17 de Março',
    orderNumber: '102356',
    productCount: 7,
    items: [
      { id: '1', name: 'Arroz', image: 'https://via.placeholder.com/100?text=Arroz' },
      { id: '2', name: 'Feijão', image: 'https://via.placeholder.com/100?text=Feijao' },
      { id: '3', name: 'Macarrão', image: 'https://via.placeholder.com/100?text=Macarrao' },
      { id: '4', name: 'Óleo', image: 'https://via.placeholder.com/100?text=Oleo' },
      { id: '5', name: 'Açúcar', image: 'https://via.placeholder.com/100?text=Acucar' },
      { id: '6', name: 'Café', image: 'https://via.placeholder.com/100?text=Cafe' },
      { id: '7', name: 'Sal', image: 'https://via.placeholder.com/100?text=Sal' }
    ]
  },
  {
    id: '2',
    date: '11 de Março',
    orderNumber: '102290',
    productCount: 1,
    items: [
      { id: '8', name: 'Água', image: 'https://via.placeholder.com/100?text=Agua' }
    ]
  },
  {
    id: '3',
    date: '10 de Março',
    orderNumber: '102256',
    productCount: 3,
    items: [
      { id: '9', name: 'Vinho', image: 'https://via.placeholder.com/100?text=Vinho' },
      { id: '10', name: 'Água', image: 'https://via.placeholder.com/100?text=Agua' },
      { id: '11', name: 'Refrigerante', image: 'https://via.placeholder.com/100?text=Refri' }
    ]
  },
  {
    id: '4',
    date: '3 de Março',
    orderNumber: '102156',
    productCount: 13,
    items: [
      { id: '12', name: 'Tomate', image: 'https://via.placeholder.com/100?text=Tomate' },
      { id: '13', name: 'Alface', image: 'https://via.placeholder.com/100?text=Alface' },
      { id: '14', name: 'Cenoura', image: 'https://via.placeholder.com/100?text=Cenoura' },
      { id: '15', name: 'Batata', image: 'https://via.placeholder.com/100?text=Batata' }
    ]
  }
];

const ReorderSection = () => {
  const handleReorder = (orderNumber: string) => {
    toast.success(`Pedido #${orderNumber} adicionado ao carrinho!`, {
      position: 'bottom-right',
    });
  };
  
  const handleEdit = (orderNumber: string) => {
    // Logic to edit order
    console.log(`Editando pedido #${orderNumber}`);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <RotateCcw size={20} className="mr-2 text-shop-blue" />
            <h2 className="section-title mb-0">
              Refaça seus pedidos em um clique
            </h2>
          </div>
          
          <Link to="/meus-pedidos" className="text-shop-blue hover:underline text-sm font-medium">
            Ver todos meus pedidos
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orders.map((order) => (
              <ReorderCard
                key={order.id}
                date={order.date}
                orderNumber={order.orderNumber}
                productCount={order.productCount}
                items={order.items}
                onReorder={() => handleReorder(order.orderNumber)}
                onEdit={() => handleEdit(order.orderNumber)}
              />
            ))}
          </div>
          
          <button 
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center"
            aria-label="Previous orders"
          >
            <ArrowLeft size={20} className="text-shop-blue" />
          </button>
          <button 
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center"
            aria-label="Next orders"
          >
            <ArrowRight size={20} className="text-shop-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReorderSection;
