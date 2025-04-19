
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Design Moderno",
      description: "Utilizamos as mais recentes tecnologias para criar interfaces modernas e atraentes."
    },
    {
      title: "Totalmente Responsivo",
      description: "Nosso site se adapta perfeitamente a qualquer dispositivo, seja desktop, tablet ou celular."
    },
    {
      title: "Fácil de Navegar",
      description: "Interface intuitiva que torna a navegação simples e agradável para todos os usuários."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Sobre <span className="text-blue-600">Nós</span>
          </h2>
          
          <div className="mb-16">
            <p className="text-lg text-gray-700 mb-6">
              Somos uma equipe apaixonada por criar experiências digitais incríveis. 
              Nossa missão é transformar ideias em realidade através de designs 
              modernos e funcionais que atendam às necessidades dos nossos clientes.
            </p>
            <p className="text-lg text-gray-700">
              Com anos de experiência no mercado, nosso objetivo é sempre superar 
              expectativas e entregar resultados que fazem a diferença.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
