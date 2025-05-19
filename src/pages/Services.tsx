
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Wrench, Home, Hammer, Zap, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Lista completa de serviços
  const services = [
    {
      icon: Wrench,
      title: 'Serviços Gerais',
      description: 'Soluções completas para sua casa ou empresa com qualidade e agilidade.',
      items: [
        'Montagem e desmontagem de móveis',
        'Instalação de suportes para TV',
        'Troca de fechaduras e dobradiças',
        'Instalação de cortinas e persianas',
        'Pequenos reparos domésticos',
        'Limpeza de caixa d\'água',
      ],
    },
    {
      icon: Zap,
      title: 'Elétrica',
      description: 'Instalações e reparos elétricos residenciais e comerciais com segurança.',
      items: [
        'Instalação de tomadas e interruptores',
        'Troca de fiação elétrica',
        'Instalação de luminárias',
        'Instalação de ventiladores de teto',
        'Reparos em curto-circuito',
        'Quadros de distribuição',
      ],
    },
    {
      icon: Home,
      title: 'Reformas e Pedreiro',
      description: 'Serviços de pedreiro, pisos, rejuntes e reformas para renovar seu espaço.',
      items: [
        'Assentamento de pisos e revestimentos',
        'Aplicação de rejunte',
        'Construção e reparos em paredes',
        'Reboco e acabamentos',
        'Pequenas reformas',
        'Pintura residencial e comercial',
      ],
    },
    {
      icon: Droplets,
      title: 'Hidráulica',
      description: 'Conserto de bombas d\'água e reparos em sistemas hidráulicos.',
      items: [
        'Conserto de bombas d\'água',
        'Instalação e manutenção de torneiras',
        'Reparos em vazamentos',
        'Desentupimento de pias e ralos',
        'Instalação e reparo de chuveiros',
        'Manutenção em válvulas e registros',
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Header da página */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça todos os serviços oferecidos com qualidade e garantia
          </p>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-blue hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-brand-blue">
                    <service.icon size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="text-lg font-medium mb-3">Serviços inclusos:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue block"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="https://wa.me/5521992303110" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-blue hover:underline"
                    >
                      <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2">
                        <path 
                          fill="currentColor" 
                          d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
                        />
                      </svg>
                      Solicitar orçamento
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Trabalhamos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Processo simples e transparente para garantir sua satisfação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Entre em Contato</h3>
              <p className="text-gray-600">
                Entre em contato pelo WhatsApp, telefone ou formulário para solicitar um orçamento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Orçamento</h3>
              <p className="text-gray-600">
                Receba um orçamento detalhado, transparente e sem compromisso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Execução do Serviço</h3>
              <p className="text-gray-600">
                Após a aprovação, o serviço é realizado com rapidez, qualidade e com garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-brand-blue text-white rounded-xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Precisa de um serviço?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Solicite um orçamento sem compromisso e tenha seu problema resolvido por um profissional qualificado.
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
              <Link 
                to="/contato" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
