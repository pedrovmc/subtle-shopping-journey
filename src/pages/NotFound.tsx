
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-lg mx-auto">
            <h1 className="text-6xl font-bold text-shop-blue mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-6">Oops! Página não encontrada</p>
            <p className="text-gray-500 mb-8">
              Parece que a página que você está procurando não existe ou foi movida.
            </p>
            <Link 
              to="/" 
              className="bg-shop-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
