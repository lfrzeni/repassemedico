
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Meu Site</div>
          
          {/* Menu de navegação para desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
          </div>
          
          {/* Botão de menu para dispositivos móveis */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menu mobile */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white px-4 py-2 shadow-md transition-all duration-300",
          isOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px] pointer-events-none"
        )}>
          <div className="flex flex-col space-y-4 py-4">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Início</a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
