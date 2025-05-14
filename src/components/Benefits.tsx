
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarCheck, Clock, ShieldCheck, ChartBar } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="vantagens" className="py-20 bg-gradient-to-r from-[#1e6df6]/5 to-[#07f73f]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Vantagens do <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">Sistema</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e6df6] to-[#07f73f] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
          
            </div>
              <div className="flex flex-col gap-6">
                {/* Primeira imagem com overlay */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/gestores.png"
                    alt="Gestores do sistema MedBill" 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e6df6]/20 to-[#07f73f]/20 rounded-lg"></div>
                </div>
              
                {/* Segunda imagem logo abaixo */}
                <img 
                  src="/lovable-uploads/potenciais.png"
                  alt="Potenciais do sistema MedBill" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                 />
              </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-2 rounded-lg mr-4 flex-shrink-0">
                  <CalendarCheck className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Automação Total</h3>
                  <p className="text-gray-600">
                    Fim das planilhas manuais e erros de cálculo. Nosso sistema automatiza todo o processo
                    de cálculo de repasses, desde a entrada dos atendimentos até o pagamento aos médicos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-2 rounded-lg mr-4 flex-shrink-0">
                  <ShieldCheck className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Precisão nos Cálculos</h3>
                  <p className="text-gray-600">
                    Algoritmos avançados garantem precisão absoluta nos cálculos de repasses,
                    considerando todas as variáveis e regras específicas de cada contrato médico.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-2 rounded-lg mr-4 flex-shrink-0">
                  <ChartBar className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparência Total</h3>
                  <p className="text-gray-600">
                    Portal exclusivo para médicos consultarem seus repasses, com detalhamento
                    completo de atendimentos, valores e datas de pagamento previstos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-2 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Economia de Tempo</h3>
                  <p className="text-gray-600">
                    Reduza em até 90% o tempo gasto com processos administrativos relacionados a repasses médicos,
                    permitindo que sua equipe se concentre em atividades estratégicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
