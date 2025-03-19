
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-heading font-bold text-shop-blue mb-4">Sobre Nós</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-600 hover:text-shop-blue text-sm">Quem somos</Link></li>
              <li><Link to="/trabalhe-conosco" className="text-gray-600 hover:text-shop-blue text-sm">Trabalhe Conosco</Link></li>
              <li><Link to="/lojas" className="text-gray-600 hover:text-shop-blue text-sm">Nossas Lojas</Link></li>
              <li><Link to="/privacidade" className="text-gray-600 hover:text-shop-blue text-sm">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-gray-600 hover:text-shop-blue text-sm">Termos de Uso</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold text-shop-blue mb-4">Atendimento</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-shop-blue mt-0.5" />
                <div>
                  <p className="text-gray-600 text-sm">(11) 3472-1808</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-shop-blue mt-0.5" />
                <div>
                  <p className="text-gray-600 text-sm">sac@abasteceeshop.com.br</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-shop-blue mt-0.5" />
                <div>
                  <p className="text-gray-600 text-sm">Segunda a sexta-feira das 8h às 18h</p>
                  <p className="text-gray-600 text-sm">Sábados das 8h às 13h</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold text-shop-blue mb-4">Formas de Pagamento</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-white p-2 rounded border flex items-center justify-center h-8">
                <span className="text-xs text-gray-500">Visa</span>
              </div>
              <div className="bg-white p-2 rounded border flex items-center justify-center h-8">
                <span className="text-xs text-gray-500">Master</span>
              </div>
              <div className="bg-white p-2 rounded border flex items-center justify-center h-8">
                <span className="text-xs text-gray-500">PIX</span>
              </div>
              <div className="bg-white p-2 rounded border flex items-center justify-center h-8">
                <span className="text-xs text-gray-500">Boleto</span>
              </div>
            </div>
            
            <h3 className="text-lg font-heading font-bold text-shop-blue mt-6 mb-4">Baixe Nosso App</h3>
            <div className="flex items-center space-x-3">
              <Link to="#" className="bg-black text-white text-xs px-3 py-2 rounded flex items-center">
                <span>Google Play</span>
              </Link>
              <Link to="#" className="bg-black text-white text-xs px-3 py-2 rounded flex items-center">
                <span>App Store</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold text-shop-blue mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-6">
              <Link to="#" className="bg-shop-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </Link>
              <Link to="#" className="bg-shop-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </Link>
              <Link to="#" className="bg-shop-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link to="#" className="bg-shop-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
            
            <h3 className="text-lg font-heading font-bold text-shop-blue mb-4">Newsletter</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full p-2 pl-3 pr-24 border rounded focus:outline-none focus:ring-2 focus:ring-shop-blue/50"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-shop-blue text-white px-4 rounded-r hover:bg-blue-600 transition-colors text-sm">
                Inscrever
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 AbasteceShop S.A. | CNPJ: 00.000.000/0001-00 | Todos os direitos reservados
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://via.placeholder.com/180x30?text=Selos+de+Seguranca" 
                alt="Selos de Segurança" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
