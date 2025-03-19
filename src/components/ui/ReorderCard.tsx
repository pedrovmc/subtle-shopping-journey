
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Package } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  image: string;
}

interface ReorderCardProps {
  date: string;
  orderNumber: string;
  productCount: number;
  items: OrderItem[];
  onReorder: () => void;
  onEdit: () => void;
}

const ReorderCard: React.FC<ReorderCardProps> = ({
  date,
  orderNumber,
  productCount,
  items,
  onReorder,
  onEdit
}) => {
  // Truncate items array to show max 4 items
  const displayItems = items.slice(0, 4);
  const hasMoreItems = items.length > 4;
  
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-1.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Package size={16} className="mr-1.5" />
            <span>{productCount} {productCount === 1 ? 'produto' : 'produtos'}</span>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          Pedido #{orderNumber}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {displayItems.map((item) => (
            <div key={item.id} className="w-14 h-14 relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain border rounded p-1"
              />
            </div>
          ))}
          
          {hasMoreItems && (
            <div className="w-14 h-14 bg-gray-100 rounded flex items-center justify-center text-gray-600 text-sm font-medium">
              +{items.length - 4}
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={onReorder}
            className="flex-1 bg-shop-blue hover:bg-blue-700 text-white py-2 rounded text-sm font-medium transition-colors"
          >
            Repetir pedido
          </button>
          <button
            onClick={onEdit}
            className="flex-none bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded text-sm font-medium transition-colors"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReorderCard;
