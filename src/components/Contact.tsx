import React, { useRef } from 'react';

import emailjs from 'emailjs-com';

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

const SERVICE_ID = 'service_nvd405v';
const TEMPLATE_ID = 'template_gd1fiqo';
const PUBLIC_KEY = 'public_L4kr7mv_UkVm4qx-b';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
   
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
       emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
     ).then(() => {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      form.current?.reset();
    }).catch((error) => {
      alert('❌ Erro ao enviar. Tente novamente.\n' + error.text);
     });
}; 
    
 

 return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Solicite uma Demonstração
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input 
              type="text"
              name="nome"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input 
              type="text"
              name="telefone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Empresa/Clínica</label>
            <input 
              type="text"
              name="empresa"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Instituição</label>
            <select 
              name="instituicao" 
              required 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione</option>
              <option value="Hospital">Hospital</option>
              <option value="Clínica">Clínica</option>
              <option value="Consultório">Consultório</option>
              <option value="Laboratório">Laboratório</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea 
              name="mensagem"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-4 rounded-md hover:opacity-90"
          >
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
