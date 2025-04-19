
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CalendarCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para agendar sua demonstração.",
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-[#1e6df6]/10 to-[#07f73f]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Solicite uma <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">Demonstração</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e6df6] to-[#07f73f] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Veja o sistema em ação
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Nome"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Telefone"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Empresa/Clínica"
                      className="w-full border-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tipo de instituição" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital">Hospital</SelectItem>
                      <SelectItem value="clinica">Clínica</SelectItem>
                      <SelectItem value="consultorio">Consultório</SelectItem>
                      <SelectItem value="laboratorio">Laboratório</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Textarea
                    placeholder="Conte-nos sobre suas necessidades específicas"
                    className="w-full border-gray-300 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] hover:opacity-90 text-white px-6 py-3 rounded-full w-full flex items-center justify-center gap-2"
                >
                  Solicitar Demonstração <CalendarCheck size={18} />
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="text-[#1e6df6] mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contato@medbill.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[#1e6df6] mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Telefone</p>
                    <p className="text-gray-600">(11) 4002-8922</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-[#1e6df6] mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Endereço</p>
                    <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-800 mb-4">Agende uma conversa</h4>
                <p className="text-gray-600 mb-6">
                  Nossa equipe está pronta para entender suas necessidades e mostrar como o MedBill pode transformar a gestão financeira da sua instituição.
                </p>
                <Button 
                  className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] hover:opacity-90 text-white px-6 py-3 rounded-full w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    window.location.href = "mailto:contato@medbill.com.br";
                  }}
                >
                  Entrar em contato <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
