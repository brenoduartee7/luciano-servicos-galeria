
import React from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ImageFormProps {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isUploading: boolean;
  selectedImage: boolean;
}

const ImageForm = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  onCancel,
  isUploading,
  selectedImage
}: ImageFormProps) => {
  return (
    <form onSubmit={onSubmit}>
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
          onClick={onCancel}
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
  );
};

export default ImageForm;
