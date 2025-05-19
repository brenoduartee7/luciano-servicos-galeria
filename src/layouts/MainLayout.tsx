
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  // Lista de links do menu
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Contato', path: '/contato' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar - Informações de contato */}
      <div className="bg-brand-blue text-white py-2 hidden md:block">
        <div className="container-custom flex justify-end items-center gap-6">
          <a href="tel:+5521992303110" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
            <Phone size={16} />
            <span>(21) 99230-3110</span>
          </a>
          <a href="mailto:contato@lucianoservicosgerais.space" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
            <Mail size={16} />
            <span>contato@lucianoservicosgerais.space</span>
          </a>
        </div>
      </div>

      {/* Header - Logo e Navegação */}
      <header className="bg-white py-4 shadow-md sticky top-0 z-30">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-blue">Luciano</h1>
            <span className="ml-2 text-gray-600 font-medium">Serviços Gerais</span>
          </Link>

          {/* Menu de navegação - Desktop */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-brand-blue ${
                  location.pathname === link.path
                    ? 'text-brand-blue border-b-2 border-brand-blue'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Menu Hamburguer - Mobile */}
          <button
            className="md:hidden text-brand-blue"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md z-20 animate-fade-in">
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium px-2 py-2 transition-colors hover:bg-gray-100 rounded-md ${
                      location.pathname === link.path
                        ? 'text-brand-blue bg-gray-100'
                        : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-4 flex flex-col gap-3">
                <a href="tel:+5521992303110" className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors py-2">
                  <Phone size={16} />
                  <span>(21) 99230-3110</span>
                </a>
                <a href="mailto:contato@lucianoservicosgerais.space" className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors py-2">
                  <Mail size={16} />
                  <span>contato@lucianoservicosgerais.space</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Botão de WhatsApp flutuante */}
      <a 
        href="https://wa.me/5521992303110" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Conversar pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <path 
            fill="currentColor" 
            d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
          />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna 1 - Sobre */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Luciano Serviços Gerais</h3>
              <p className="text-gray-300 mb-4">
                Serviços de qualidade e com garantia. Atendimento rápido e eficiente para sua casa ou empresa.
              </p>
              <p className="text-gray-300">
                Rio de Janeiro - RJ
              </p>
            </div>
            
            {/* Coluna 2 - Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/admin" className="text-gray-300 hover:text-white transition-colors">
                  Área Admin
                </Link>
              </nav>
            </div>
            
            {/* Coluna 3 - Contato */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
              <div className="flex flex-col gap-3">
                <a href="tel:+5521992303110" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} />
                  <span>(21) 99230-3110</span>
                </a>
                <a href="mailto:contato@lucianoservicosgerais.space" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span>contato@lucianoservicosgerais.space</span>
                </a>
                <a 
                  href="https://wa.me/5521992303110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-2 w-fit transition-colors"
                >
                  <svg viewBox="0 0 32 32" className="w-5 h-5">
                    <path 
                      fill="currentColor" 
                      d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
                    />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Luciano Serviços Gerais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
