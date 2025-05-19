
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { Home, Upload, Images, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Protegendo a rota - se não estiver autenticado, redireciona
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // Lista de links do menu admin
  const adminLinks = [
    { name: 'Dashboard', path: '/admin', icon: Home },
    { name: 'Upload de Imagens', path: '/admin/upload', icon: Upload },
    { name: 'Gerenciar Galeria', path: '/admin/galeria', icon: Images },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white w-64 shadow-md fixed h-full hidden md:block">
        <div className="p-4 border-b">
          <Link to="/" className="flex flex-col">
            <h2 className="text-xl font-bold text-brand-blue">Luciano</h2>
            <span className="text-sm text-gray-600">Área Administrativa</span>
          </Link>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {adminLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <link.icon size={18} />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
            
            <li className="pt-6">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 w-full text-left transition-colors"
              >
                <LogOut size={18} />
                <span>Sair</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden bg-white w-full shadow-md p-4 fixed z-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <h2 className="text-lg font-bold text-brand-blue">Luciano</h2>
            <span className="text-xs text-gray-600">Área Administrativa</span>
          </Link>
          
          <button
            onClick={handleLogout}
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
          >
            <LogOut size={20} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="mt-4 flex overflow-x-auto py-2 gap-2">
          {adminLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 p-2 rounded-md whitespace-nowrap ${
                location.pathname === link.path
                  ? 'bg-brand-blue text-white'
                  : 'text-gray-700 bg-gray-50'
              }`}
            >
              <link.icon size={16} />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 w-full">
        <div className="p-4 md:p-8 mt-28 md:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
