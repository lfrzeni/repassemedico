
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Bem-vindo ao <span className="text-blue-600">Meu Site</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Um lugar para compartilhar ideias e criar conexões incríveis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToAbout} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2"
            >
              Saiba Mais <ArrowDown size={16} />
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
