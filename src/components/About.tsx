
import React from 'react';
import { ShieldCheck, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Sobre o <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">MedBill</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e6df6] to-[#07f73f] mx-auto mb-12"></div>
          
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-6 text-center">
              O sistema MedBill é uma plataforma que transforma a gestão de repasse médicos, trazendo clareza financeira, 
              respeito ao corpo clinico e inteligencia estratégica para hospitais, operadoras e clinicas em geral.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Mais do que automatizar processos, nossa missão é entregar confiança, transparência, precisão, e poder de descisão, 
              permitindo que nossos clientes foquem no que realmente importa: o cuidado com a saúde.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-3 rounded-full inline-flex justify-center mb-4">
                <ShieldCheck className="text-[#1e6df6] h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Confiança</h3>
              <p className="text-gray-600">Segurança e precisão em todos os cálculos financeiros</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-3 rounded-full inline-flex justify-center mb-4">
                <Users className="text-[#1e6df6] h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiência</h3>
              <p className="text-gray-600">Anos de atuação no mercado de saúde</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-3 rounded-full inline-flex justify-center mb-4">
                <Clock className="text-[#1e6df6] h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Agilidade</h3>
              <p className="text-gray-600">Processos otimizados para economizar seu tempo</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-3 rounded-full inline-flex justify-center mb-4">
                <Heart className="text-[#1e6df6] h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromisso</h3>
              <p className="text-gray-600">Dedicação total ao sucesso dos clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
