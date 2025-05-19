
import React, { useState, useRef } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Upload, X, Image, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';

interface ImageFile {
  file: File;
  preview: string;
  title: string;
  description: string;
}

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
}

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Verificar se é uma imagem
      if (!file.type.match('image.*')) {
        toast({
          variant: 'destructive',
          title: 'Tipo de arquivo inválido',
          description: 'Por favor, selecione apenas imagens (JPG, PNG, etc).'
        });
        return;
      }
      
      // Criar preview da imagem
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setSelectedImage({
            file,
            preview: event.target.result as string,
            title: '',
            description: ''
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
    setTitle('');
    setDescription('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      toast({
        variant: 'destructive',
        title: 'Nenhuma imagem selecionada',
        description: 'Por favor, selecione uma imagem para fazer o upload.'
      });
      return;
    }
    
    if (!title.trim()) {
      toast({
        variant: 'destructive',
        title: 'Título obrigatório',
        description: 'Por favor, adicione um título para a imagem.'
      });
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Em uma aplicação real, aqui teria o upload para um backend
      // Por enquanto, vamos simular e salvar no localStorage
      
      // Simular um delay do upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Criar a entrada da imagem
      const newImage: GalleryImage = {
        id: uuidv4(),
        title,
        description,
        url: selectedImage.preview, // Numa aplicação real, seria a URL retornada do servidor
        createdAt: new Date().toISOString()
      };
      
      // Salvar no localStorage
      const existingImages = localStorage.getItem('gallery_images');
      const imagesArray = existingImages ? JSON.parse(existingImages) : [];
      imagesArray.push(newImage);
      localStorage.setItem('gallery_images', JSON.stringify(imagesArray));
      
      // Exibir mensagem de sucesso
      toast({
        title: 'Upload realizado com sucesso!',
        description: 'A imagem foi adicionada à galeria.'
      });
      
      // Limpar o formulário
      clearSelectedImage();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao fazer upload',
        description: 'Ocorreu um erro ao enviar a imagem. Tente novamente.'
      });
      console.error('Erro ao fazer upload:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload de Imagens</h1>
        <p className="text-gray-600">
          Adicione novas imagens à sua galeria de projetos
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Área de Upload */}
          <div>
            <div 
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                selectedImage ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-brand-blue hover:bg-gray-50'
              } transition-all duration-200`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
                id="image-upload"
              />
              
              {!selectedImage ? (
                <label 
                  htmlFor="image-upload" 
                  className="flex flex-col items-center justify-center cursor-pointer py-6"
                >
                  <Upload size={48} className="text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Selecione uma imagem
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Clique aqui ou arraste e solte uma imagem
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Procurar arquivos
                  </Button>
                </label>
              ) : (
                <div className="relative">
                  <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      onClick={clearSelectedImage}
                      className="h-8 w-8 rounded-full shadow"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center bg-green-100 text-green-600 p-2 rounded-full mb-3">
                      <Check size={24} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Imagem selecionada
                    </h3>
                  </div>
                  
                  <div className="relative w-full h-64 mb-4">
                    <img
                      src={selectedImage.preview}
                      alt="Preview da imagem"
                      className="w-full h-full object-contain rounded border"
                    />
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <p>Nome do arquivo: {selectedImage.file.name}</p>
                    <p>Tamanho: {(selectedImage.file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Detalhes da Imagem */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Título da Imagem*
                </label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Reforma de Banheiro"
                  className="input-field"
                  disabled={!selectedImage || isUploading}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição (opcional)
                </label>
                <Textarea 
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descreva o projeto ou serviço realizado..."
                  className="input-field min-h-[120px]"
                  disabled={!selectedImage || isUploading}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={clearSelectedImage}
                  disabled={!selectedImage || isUploading}
                >
                  Cancelar
                </Button>
                
                <Button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white"
                  disabled={!selectedImage || isUploading}
                >
                  {isUploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Upload size={16} className="mr-2" />
                      Fazer Upload
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Instruções:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue block mt-2"></span>
                  <span>As imagens devem ser nos formatos JPG, PNG ou GIF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue block mt-2"></span>
                  <span>Para melhor qualidade, use imagens com pelo menos 800px de largura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue block mt-2"></span>
                  <span>O título da imagem é obrigatório e será exibido na galeria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue block mt-2"></span>
                  <span>A descrição é opcional, mas recomendada para fornecer mais detalhes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ImageUpload;
