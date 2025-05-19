
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Check } from 'lucide-react';

const About = () => {
  // Lista de diferenciais
  const advantages = [
    'Atendimento rápido e personalizado',
    'Orçamento sem compromisso',
    'Serviços com garantia',
    'Profissional qualificado e experiente',
    'Preços justos e competitivos',
    'Materiais de qualidade',
  ];

  return (
    <MainLayout>
      {/* Header da página */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Luciano</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça um pouco mais sobre o profissional que cuidará da sua casa ou empresa
          </p>
        </div>
      </section>

      {/* Seção Principal */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Luciano - Serviços Gerais" 
                className="w-full h-96 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Quem sou eu</h2>
              <p className="text-gray-700 mb-4">
                Sou Luciano, profissional de serviços gerais com mais de 15 anos de experiência no mercado. 
                Especialista em elétrica, pequenas reformas, reparos hidráulicos e muito mais.
              </p>
              <p className="text-gray-700 mb-4">
                Trabalho com dedicação e compromisso para oferecer serviços de qualidade, buscando sempre a satisfação total dos meus clientes.
                Atendo residências e empresas no Rio de Janeiro e região.
              </p>
              <p className="text-gray-700 mb-4">
                Todos os serviços são realizados com as melhores ferramentas e materiais do mercado, garantindo durabilidade e segurança em cada trabalho.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Por que me escolher?</h3>
                <ul className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Localização</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estou localizado no Rio de Janeiro - RJ, mas atendo em toda a região metropolitana
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Área de Atendimento</h3>
              <p className="text-gray-600 mt-2">
                Atendo em todo o Rio de Janeiro e região metropolitana. Entre em contato para verificar disponibilidade na sua região.
              </p>
            </div>
            <div className="relative h-96 w-full">
              {/* Embed de mapa - usando placeholder */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-700 text-center p-4">
                  Mapa do Rio de Janeiro - RJ<br />
                  <span className="text-sm">(Aqui poderia ser inserido um mapa do Google Maps)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container-custom bg-brand-blue text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para solicitar um serviço?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
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
            <a 
              href="tel:+5521992303110"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
