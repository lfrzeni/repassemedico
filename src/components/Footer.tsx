
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">Meu Site</h3>
            <p className="text-gray-400 mt-2">Criando experiências digitais incríveis.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#inicio" className="text-gray-400 hover:text-blue-400 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-400 hover:text-blue-400 transition-colors">Contato</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Meu Site. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
