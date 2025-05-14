
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center bg-white pt-16"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left fade-in">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Gestão de <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">Repasse Médico</span> Centralizado
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Automatize os cálculos, ganhe transparência e reduza custos com o sistema mais completo do mercado.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle2 className="text-[#1e6df6] mr-2" />
                <span className="text-gray-700">Cálculos precisos e automáticos</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle2 className="text-[#1e6df6] mr-2" />
                <span className="text-gray-700">Relatórios financeiros completos</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle2 className="text-[#1e6df6] mr-2" />
                <span className="text-gray-700">Transparência para prestadores</span>
              </div>
            </div>
            <Button 
              onClick={scrollToContact} 
              className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] hover:opacity-90 text-white px-6 py-6 rounded-full flex items-center gap-2 text-lg"
            >
              Solicitar Demonstração <ArrowRight size={18} />
            </Button>
          </div>
           <img 
              src="/lovable-uploads/medico_medbill.png"
              alt="Médico utilizando o sistema MedBill"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
         </div>
      </div>
    </section>
  );
};

export default Hero;
