
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aqui seria integrado com um serviço de envio de emails
    // Por enquanto, apenas mostra um toast
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato o mais breve possível.",
    });
    
    // Limpar o formulário
    e.currentTarget.reset();
  };

  return (
    <MainLayout>
      {/* Header da página */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender e resolver o seu problema
          </p>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Informações de Contato */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue p-3 rounded-full text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefone / WhatsApp</h3>
                    <a 
                      href="tel:+5521992303110" 
                      className="text-gray-700 hover:text-brand-blue transition-colors"
                    >
                      (21) 99230-3110
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue p-3 rounded-full text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <a 
                      href="mailto:contato@lucianoservicosgerais.space" 
                      className="text-gray-700 hover:text-brand-blue transition-colors"
                    >
                      contato@lucianoservicosgerais.space
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue p-3 rounded-full text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Localização</h3>
                    <p className="text-gray-700">
                      Rio de Janeiro - RJ
                    </p>
                    <p className="text-gray-600 mt-1 text-sm">
                      Atendemos em toda a região metropolitana
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>08:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Digite seu nome" 
                    required 
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    required
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone / WhatsApp
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    required
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Digite o assunto" 
                    required 
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Digite sua mensagem" 
                    required
                    className="input-field min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para WhatsApp */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de atendimento rápido?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e receba um retorno imediato
          </p>
          <a 
            href="https://wa.me/5521992303110" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5">
              <path 
                fill="currentColor" 
                d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
              />
            </svg>
            Fale pelo WhatsApp
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
