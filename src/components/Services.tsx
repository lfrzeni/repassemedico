
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookMedical, Settings, FileText, DatabaseBackup } from 'lucide-react';

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Nossos <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e6df6] to-[#07f73f] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="shadow-md hover:shadow-lg transition-shadow border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-3 rounded-lg mr-4">
                    <Settings className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Consultoria em Gestão</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Avaliamos seus processos atuais e implementamos melhorias customizadas para otimizar a gestão financeira de sua instituição de saúde.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Análise de processos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Otimização de fluxos financeiros</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Treinamento de equipe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-3 rounded-lg mr-4">
                    <DatabaseBackup className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Sistema de Repasse</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Plataforma completa para gerenciamento e automação do repasse médico, integrável com os principais sistemas de gestão hospitalar.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Cálculo automático de repasses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Relatórios personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Portal para médicos e gestores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-3 rounded-lg mr-4">
                    <FileText className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Relatórios Financeiros</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Dashboards e relatórios personalizados para acompanhamento em tempo real da performance financeira e produtividade médica.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Visualização de dados em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Exportação em múltiplos formatos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Alertas e notificações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] p-3 rounded-lg mr-4">
                    <BookMedical className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Compliance e Auditoria</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Garantimos que seus processos estejam em conformidade com as regulamentações do setor de saúde e reduzimos riscos financeiros.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Verificação de contratos médicos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Auditoria de pagamentos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#1e6df6]"></div>
                    </div>
                    <span className="text-gray-700">Rastreabilidade de operações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
