
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">MedBill</h3>
            <p className="text-gray-400 mt-2">Consultoria e Tecnologia em Saúde</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#inicio" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Início</a>
            <a href="#sobre" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Serviços</a>
            <a href="#vantagens" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Vantagens</a>
            <a href="#depoimentos" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-[#1e6df6] mr-2 w-5 h-5" />
                <span className="text-gray-400">contato@medbill.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#1e6df6] mr-2 w-5 h-5" />
                <span className="text-gray-400">(11) 4002-8922</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-[#1e6df6] mr-2 w-5 h-5" />
                <span className="text-gray-400">Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Sistema de Repasse Médico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Consultoria em Gestão</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Portal do Médico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1e6df6] transition-colors">Dashboard Financeiro</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#1e6df6] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#1e6df6] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#1e6df6] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="text-center md:text-left text-gray-400 text-sm">
            <p>&copy; {currentYear} MedBill Consultoria e Tecnologia. Todos os direitos reservados.</p>
          </div>
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 p-2 bg-gray-800 rounded-full hover:bg-[#1e6df6] transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
