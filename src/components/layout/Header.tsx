
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User, ChevronDown, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const cartCount = 5; // Placeholder value
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search for:', searchValue);
    // Add search logic here
  };

  return (
    <header className="bg-white shadow-header sticky top-0 z-50">
      <div className="container-custom py-3">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-shop-blue font-heading font-bold text-2xl">
              Abastece<span className="text-shop-red">Shop</span>
            </span>
          </Link>
          
          {/* Search Bar - Desktop */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl mx-8 relative"
          >
            <input
              type="text"
              placeholder="Buscar produtos, marcas ou categorias..."
              className="w-full py-2 pl-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-shop-blue/50"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-shop-blue"
            >
              <Search size={20} />
            </button>
          </form>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-shop-blue">
                  <User size={20} className="mr-1" />
                  <span className="hidden lg:inline">Minha Conta</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-gray-700 hover:text-shop-blue" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-shop-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <div className="flex items-center">
              <p className="hidden lg:block text-right mr-2">
                <span className="text-gray-600 text-sm">Seu carrinho</span>
                <span className="font-bold text-shop-blue block">R$ 125,90</span>
              </p>
            </div>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Search Bar - Mobile */}
        <form 
          onSubmit={handleSearchSubmit}
          className="mt-3 md:hidden relative"
        >
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full py-2 pl-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-shop-blue/50"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-shop-blue"
          >
            <Search size={20} />
          </button>
        </form>
        
        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex mt-4 border-t border-gray-100 pt-3">
          <ul className="flex items-center space-x-6">
            <li><Link to="/" className="active-link">Início</Link></li>
            <li><Link to="/categorias/ofertas" className="nav-link">Ofertas</Link></li>
            <li><Link to="/categorias/supermercado" className="nav-link">Supermercado</Link></li>
            <li><Link to="/categorias/bebidas" className="nav-link">Bebidas</Link></li>
            <li><Link to="/categorias/limpeza" className="nav-link">Limpeza</Link></li>
            <li><Link to="/categorias/hortifruti" className="nav-link">Hortifruti</Link></li>
            <li><Link to="/categorias/carnes" className="nav-link">Carnes</Link></li>
            <li>
              <span className="nav-link flex items-center cursor-pointer">
                Mais categorias 
                <ChevronDown size={16} className="ml-1" />
              </span>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="bg-white h-full max-w-xs w-full flex flex-col animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-heading font-bold text-xl text-shop-blue">Menu</span>
              <button onClick={toggleMenu}>
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center space-x-2 mb-4">
                <User size={20} className="text-shop-blue" />
                <span className="font-medium">Minha Conta</span>
              </div>
              <ul className="space-y-3 pl-7">
                <li><Link to="/login" className="text-gray-600" onClick={toggleMenu}>Entrar</Link></li>
                <li><Link to="/registro" className="text-gray-600" onClick={toggleMenu}>Cadastrar</Link></li>
                <li><Link to="/pedidos" className="text-gray-600" onClick={toggleMenu}>Meus Pedidos</Link></li>
              </ul>
            </div>
            
            <div className="overflow-y-auto flex-1">
              <ul className="p-4 space-y-4">
                <li><Link to="/" className="text-shop-blue font-medium" onClick={toggleMenu}>Início</Link></li>
                <li><Link to="/categorias/ofertas" className="text-gray-700" onClick={toggleMenu}>Ofertas</Link></li>
                <li><Link to="/categorias/supermercado" className="text-gray-700" onClick={toggleMenu}>Supermercado</Link></li>
                <li><Link to="/categorias/bebidas" className="text-gray-700" onClick={toggleMenu}>Bebidas</Link></li>
                <li><Link to="/categorias/limpeza" className="text-gray-700" onClick={toggleMenu}>Limpeza</Link></li>
                <li><Link to="/categorias/hortifruti" className="text-gray-700" onClick={toggleMenu}>Hortifruti</Link></li>
                <li><Link to="/categorias/carnes" className="text-gray-700" onClick={toggleMenu}>Carnes</Link></li>
                <li><Link to="/categorias/padaria" className="text-gray-700" onClick={toggleMenu}>Padaria</Link></li>
                <li><Link to="/categorias/congelados" className="text-gray-700" onClick={toggleMenu}>Congelados</Link></li>
                <li><Link to="/categorias/higiene" className="text-gray-700" onClick={toggleMenu}>Higiene e Beleza</Link></li>
                <li><Link to="/categorias/pet" className="text-gray-700" onClick={toggleMenu}>Pet Shop</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
