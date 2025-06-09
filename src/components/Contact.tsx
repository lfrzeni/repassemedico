                
import React, { useRef } from 'react';
import emailjs from '../emailjs-com';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Mail, Phone, Send, CalendarCheck } from 'lucide-react';

const SERVICE_ID = 'service_pdfty9c';
const TEMPLATE_ID = 'template_gd1fiqo';
const PUBLIC_KEY = 'L4kr7mv_UkVm4qx-b';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert('✅ Mensagem enviada com sucesso!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('❌ Erro ao enviar:', error);
        alert('Erro ao enviar a mensagem. Verifique os dados e tente novamente.');
      });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-[#1e6df6]/10 to-[#07f73f]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Solicite uma <span className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] bg-clip-text text-transparent">Demonstração</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1e6df6] to-[#07f73f] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* FORMULÁRIO */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Veja o Medbill em ação
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    className="w-full border-gray-300"
                    required
                  />
                  <Input
                    type="email"
                    name="emailde"
                    placeholder="Email"
                    className="w-full border-gray-300"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    className="w-full border-gray-300"
                    required
                  />

                  <Select name="instituicao" required>
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

                <Input
                  type="text"
                  name="empresa"
                  placeholder="Instituição/Empresa"
                  className="w-full border-gray-300"
                  required
                />

                <Textarea
                  name="mensagem"
                  placeholder="Conte-nos sobre suas necessidades específicas"
                  className="w-full border-gray-300 min-h-[100px]"
                />

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#1e6df6] to-[#07f73f] hover:opacity-90 text-white px-6 py-3 rounded-full w-full flex items-center justify-center gap-2"
                >
                  Solicitar Demonstração <CalendarCheck size={18} />
                </Button>
              </form>
            </div>

            {/* CONTATO */}
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
                    <p className="font-medium text-gray-800">Tel/Whats</p>
                    <p className="text-gray-600">(18) 99722-5898</p>
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
                    window.location.href = "mailto:contato@medbill.com.br?subject=Sistema Medbill&body=Olá, gostaria de ter mais informações do Sistema Integrado de Repasse Médico Medbill.";
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
}
