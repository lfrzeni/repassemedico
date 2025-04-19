
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Carlos Mendes",
      role: "Diretor Clínico",
      company: "Hospital São Lucas",
      quote: "O sistema da MedBill revolucionou nossa gestão financeira. Reduziu erros, trouxe transparência e melhorou significativamente o relacionamento com nosso corpo clínico.",
      rating: 5
    },
    {
      name: "Dra. Amanda Silva",
      role: "Médica Cardiologista",
      company: "Clínica Cardio Saúde",
      quote: "Agora consigo acompanhar todos os meus atendimentos e repasses com facilidade. A transparência e precisão nos cálculos me dão total segurança.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Diretor Administrativo",
      company: "Grupo Hospitalar Santa Maria",
      quote: "Implementamos o MedBill há 2 anos e foi a melhor decisão. Economizamos tempo, recursos e melhoramos a satisfação dos médicos com a instituição.",
      rating: 5
    },
    {
      name: "Dra. Juliana Costa",
      role: "Ortopedista",
      company: "Centro Médico Ortopédico",
      quote: "O portal de médicos é intuitivo e me permite verificar meus repasses a qualquer momento. A equipe de suporte é excelente e sempre soluciona minhas dúvidas.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            O que nossos <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">clientes</span> dizem
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e6df6] to-[#07f73f] mx-auto mb-12"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-4" />
              <CarouselNext className="relative ml-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
