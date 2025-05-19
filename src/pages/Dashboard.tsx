
import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Upload, Image, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface GalleryStats {
  totalImages: number;
  recentUploads: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<GalleryStats>({
    totalImages: 0,
    recentUploads: 0,
  });

  useEffect(() => {
    // Carregar estatísticas da galeria
    const loadStats = () => {
      try {
        const savedImages = localStorage.getItem('gallery_images');
        if (savedImages) {
          const images = JSON.parse(savedImages);
          const now = new Date();
          const lastWeek = new Date(now.setDate(now.getDate() - 7));
          
          const recentUploads = images.filter((img: any) => 
            new Date(img.createdAt) > lastWeek
          ).length;
          
          setStats({
            totalImages: images.length,
            recentUploads,
          });
        }
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      }
    };

    loadStats();
  }, []);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Bem-vindo à área administrativa, gerencie seus serviços e imagens.
        </p>
      </div>

      {/* Cards estatísticos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-blue">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total de Imagens</p>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalImages}</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-md text-brand-blue">
              <Image size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Uploads recentes (7 dias)</p>
              <h3 className="text-3xl font-bold text-gray-900">{stats.recentUploads}</h3>
            </div>
            <div className="p-2 bg-green-100 rounded-md text-green-500">
              <Upload size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Informações</p>
              <h3 className="text-lg font-medium text-gray-900">Área administrativa</h3>
            </div>
            <div className="p-2 bg-amber-100 rounded-md text-amber-500">
              <Info size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Ações rápidas */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/admin/upload">
            <Button variant="outline" className="w-full flex items-center gap-2 py-6 text-brand-blue border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/5">
              <Upload size={20} />
              <span>Upload de Imagens</span>
            </Button>
          </Link>
          <Link to="/admin/galeria">
            <Button variant="outline" className="w-full flex items-center gap-2 py-6 text-brand-blue border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/5">
              <Image size={20} />
              <span>Gerenciar Galeria</span>
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="w-full flex items-center gap-2 py-6 border-gray-300 hover:border-gray-400">
              <span>Visualizar Site</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Instruções */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Como gerenciar sua galeria</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-lg mb-2">1. Upload de imagens</h3>
            <p className="text-gray-600">
              Acesse a página de Upload para adicionar novas imagens à galeria. Você poderá selecionar 
              arquivos do seu computador e adicionar título e descrição para cada imagem.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-lg mb-2">2. Gerenciar galeria</h3>
            <p className="text-gray-600">
              Na página Gerenciar Galeria, você pode visualizar todas as imagens, editar informações
              ou excluir imagens que não deseja mais exibir.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-lg mb-2">3. Visualizar no site</h3>
            <p className="text-gray-600">
              Todas as imagens adicionadas serão automaticamente exibidas na página da Galeria do site,
              ordenadas da mais recente para a mais antiga.
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
