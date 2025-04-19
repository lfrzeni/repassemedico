
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
  };

  return (
    <section id="contato" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contato@meusite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Telefone</p>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Endereço</p>
                    <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Seu nome"
                    className="w-full border-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <Input 
                    type="email"
                    placeholder="Seu email"
                    className="w-full border-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    className="w-full border-gray-300 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full w-full flex items-center justify-center gap-2"
                >
                  Enviar Mensagem <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
