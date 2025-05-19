
import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Trash2, Edit, Search, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
}

const AdminGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // Carregar imagens do localStorage
  useEffect(() => {
    const loadImages = () => {
      try {
        const savedImages = localStorage.getItem('gallery_images');
        if (savedImages) {
          const parsedImages = JSON.parse(savedImages);
          // Ordenar por data mais recente
          const sortedImages = parsedImages.sort((a: GalleryImage, b: GalleryImage) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setImages(sortedImages);
          setFilteredImages(sortedImages);
        } else {
          setImages([]);
          setFilteredImages([]);
        }
      } catch (error) {
        console.error('Erro ao carregar imagens da galeria:', error);
        toast({
          variant: 'destructive',
          title: 'Erro ao carregar imagens',
          description: 'Ocorreu um erro ao carregar as imagens da galeria.'
        });
      } finally {
        setLoading(false);
      }
    };

    // Simular um pequeno delay no carregamento
    const timer = setTimeout(() => {
      loadImages();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filtrar imagens com base na busca
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredImages(images);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = images.filter(
        (image) => 
          image.title.toLowerCase().includes(query) || 
          image.description.toLowerCase().includes(query)
      );
      setFilteredImages(filtered);
    }
  }, [searchQuery, images]);

  // Função para abrir modal de exclusão
  const openDeleteModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsDeleteModalOpen(true);
  };

  // Função para abrir modal de edição
  const openEditModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setEditTitle(image.title);
    setEditDescription(image.description);
    setIsEditModalOpen(true);
  };

  // Função para deletar imagem
  const handleDeleteImage = () => {
    if (!selectedImage) return;

    try {
      const updatedImages = images.filter(img => img.id !== selectedImage.id);
      localStorage.setItem('gallery_images', JSON.stringify(updatedImages));
      
      setImages(updatedImages);
      toast({
        title: 'Imagem excluída',
        description: 'A imagem foi removida com sucesso da galeria.'
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: 'Ocorreu um erro ao excluir a imagem. Tente novamente.'
      });
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedImage(null);
    }
  };

  // Função para salvar edição da imagem
  const handleSaveEdit = () => {
    if (!selectedImage || !editTitle.trim()) {
      toast({
        variant: 'destructive',
        title: 'Título obrigatório',
        description: 'Por favor, adicione um título para a imagem.'
      });
      return;
    }

    try {
      // Atualizar a imagem
      const updatedImages = images.map(img => 
        img.id === selectedImage.id 
          ? { ...img, title: editTitle, description: editDescription }
          : img
      );
      
      localStorage.setItem('gallery_images', JSON.stringify(updatedImages));
      setImages(updatedImages);
      
      toast({
        title: 'Imagem atualizada',
        description: 'As informações da imagem foram atualizadas com sucesso.'
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar',
        description: 'Ocorreu um erro ao atualizar a imagem. Tente novamente.'
      });
    } finally {
      setIsEditModalOpen(false);
      setSelectedImage(null);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Gerenciar Galeria</h1>
        <p className="text-gray-600">
          Visualize, edite e exclua imagens da sua galeria
        </p>
      </div>

      {/* Barra de Ferramentas */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="w-full sm:w-64 relative">
            <Input 
              placeholder="Buscar imagens..." 
              className="input-field pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Total:</span>
            <span className="font-medium">{images.length} imagens</span>
          </div>
        </div>
      </div>

      {/* Estado de carregamento */}
      {loading && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="border rounded-md p-4">
                <div className="flex gap-4">
                  <Skeleton className="h-24 w-24 flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lista de Imagens */}
      {!loading && (
        <div className="bg-white rounded-lg shadow-md p-6">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <AlertTriangle size={48} className="mx-auto text-amber-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {searchQuery ? 'Nenhum resultado encontrado' : 'Nenhuma imagem na galeria'}
              </h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? 'Tente utilizar termos diferentes para sua busca.'
                  : 'Adicione imagens à sua galeria através da página de Upload.'}
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery('')}
                >
                  Limpar busca
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="border rounded-md p-4 hover:border-brand-blue transition-colors">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 relative rounded-md overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{image.title}</h3>
                      {image.description && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {image.description}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(image.createdAt).toLocaleDateString()}
                      </p>
                      
                      <div className="mt-2 flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-gray-600 hover:text-brand-blue"
                          onClick={() => openEditModal(image)}
                        >
                          <Edit size={16} className="mr-1" />
                          Editar
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-gray-600 hover:text-red-600"
                          onClick={() => openDeleteModal(image)}
                        >
                          <Trash2 size={16} className="mr-1" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal de Exclusão */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700">
              Tem certeza que deseja excluir a imagem <span className="font-medium">{selectedImage?.title}</span>?
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Esta ação não pode ser desfeita.
            </p>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteImage}
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal de Edição */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar imagem</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {selectedImage && (
              <div className="space-y-4">
                <div className="h-40 flex justify-center">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.title} 
                    className="h-full object-contain"
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                    Título*
                  </label>
                  <Input 
                    id="edit-title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição (opcional)
                  </label>
                  <Textarea 
                    id="edit-description"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="input-field min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white" 
              onClick={handleSaveEdit}
            >
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminGallery;
