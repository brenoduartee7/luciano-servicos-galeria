
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Home, Hammer, Zap, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Dados dos serviços em destaque
  const featuredServices = [
    {
      icon: Wrench,
      title: 'Serviços Gerais',
      description: 'Soluções completas para sua casa ou empresa com qualidade e agilidade.',
    },
    {
      icon: Zap,
      title: 'Elétrica',
      description: 'Instalações e reparos elétricos residenciais e comerciais com segurança.',
    },
    {
      icon: Home,
      title: 'Reformas',
      description: 'Serviços de pedreiro, pisos, rejuntes e reformas para renovar seu espaço.',
    },
    {
      icon: Droplets,
      title: 'Hidráulica',
      description: 'Conserto de bombas d\'água e reparos em sistemas hidráulicos.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Soluções completas <br />
                <span className="text-brand-blue">para sua casa ou empresa</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Serviços de qualidade com profissionalismo e rapidez. 
                Atendendo Rio de Janeiro e região.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5521992303110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <svg viewBox="0 0 32 32" className="w-5 h-5">
                    <path 
                      fill="currentColor" 
                      d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
                    />
                  </svg>
                  Fale pelo WhatsApp
                </a>
                <Link to="/contato" className="btn-secondary">
                  Entre em contato
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block rounded-lg overflow-hidden shadow-xl animate-slide-in">
              <img 
                src="/placeholder.svg" 
                alt="Serviços de qualidade" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços para atender todas as suas necessidades, com profissionalismo e qualidade garantida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div 
                key={index} 
                className="card-service group"
              >
                <div className="mb-4 text-brand-blue group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/servicos" 
                  className="inline-flex items-center text-brand-blue hover:underline"
                >
                  Saiba mais
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/servicos" className="btn-primary">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre em Destaque */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="hidden md:block rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Luciano - Profissional experiente" 
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Sobre Luciano</h2>
              <p className="text-gray-600 mb-6">
                Com anos de experiência no mercado, ofereço serviços de alta qualidade para residências e empresas no Rio de Janeiro.
                Trabalho com comprometimento e excelência para garantir a satisfação total dos meus clientes.
              </p>
              <p className="text-gray-600 mb-6">
                Todos os serviços contam com garantia e são realizados com as melhores ferramentas e materiais do mercado.
              </p>
              <Link to="/sobre" className="btn-secondary">
                Conheça mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Pronto para resolver seu problema?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e solicite um orçamento sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/5521992303110" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5">
                <path 
                  fill="currentColor" 
                  d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
                />
              </svg>
              Fale pelo WhatsApp
            </a>
            <Link to="/contato" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 rounded-md font-medium transition-all duration-300">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
