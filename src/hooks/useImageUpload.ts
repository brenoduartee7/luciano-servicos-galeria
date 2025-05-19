
import { useState, useRef } from 'react';
import { toast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';

export interface ImageFile {
  file: File;
  preview: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
}

export const useImageUpload = () => {
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
      // Simular um delay do upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Garantir que temos acesso à preview da imagem
      if (!selectedImage.preview) {
        throw new Error('Preview da imagem não disponível');
      }
      
      // Criar a entrada da imagem
      const newImage: GalleryImage = {
        id: uuidv4(),
        title: title.trim(),
        description: description.trim(),
        url: selectedImage.preview, // No localStorage, salvamos o dataURL
        createdAt: new Date().toISOString()
      };
      
      console.log('Salvando imagem:', newImage);
      
      // Salvar no localStorage
      let imagesArray: GalleryImage[] = [];
      const existingImages = localStorage.getItem('gallery_images');
      
      if (existingImages) {
        try {
          imagesArray = JSON.parse(existingImages);
          if (!Array.isArray(imagesArray)) {
            imagesArray = [];
          }
        } catch (parseError) {
          console.error('Erro ao analisar dados do localStorage:', parseError);
          imagesArray = [];
        }
      }
      
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
      console.error('Erro ao fazer upload:', error);
      toast({
        variant: 'destructive',
        title: 'Erro ao fazer upload',
        description: 'Ocorreu um erro ao enviar a imagem. Tente novamente.'
      });
    } finally {
      setIsUploading(false);
    }
  };

  return {
    selectedImage,
    title,
    description,
    isUploading,
    fileInputRef,
    setTitle,
    setDescription,
    handleImageChange,
    clearSelectedImage,
    handleSubmit
  };
};
