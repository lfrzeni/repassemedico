import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_nvd405',      // Seu Service ID
      'template_gd1fiqo',     // Seu Template ID
      form.current, 'L4kr7mv_UkVm4qx-b'          // Sua Public Key
    ).then(() => {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      form.current?.reset();
    }).catch(() => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Solicitar Demonstração</h2>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="nome" placeholder="Nome" required />
              <Input name="email" type="email" placeholder="Email" required />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="telefone" placeholder="Telefone" required />
              <Input name="empresa" placeholder="Empresa/Clínica" required />
            </div>

            <div>
              <Select name="instituicao">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de Instituição" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hospital">Hospital</SelectItem>
                  <SelectItem value="Clínicas">Clínica</SelectItem>
                  <SelectItem value="Consultórios">Consultório</SelectItem>
                  <SelectItem value="Laboratórios">Laboratório</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea 
                name="mensagem"
                placeholder="Conte-nos sobre suas necessidades"
                className="min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white"
            >
              Solicitar Demonstração
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
