
import React from 'react';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImagePreviewProps {
  file: File;
  preview: string;
  onClear: () => void;
}

const ImagePreview = ({ file, preview, onClear }: ImagePreviewProps) => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 -mt-3 -mr-3">
        <Button
          type="button"
          size="icon"
          variant="destructive"
          onClick={onClear}
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
          src={preview}
          alt="Preview da imagem"
          className="w-full h-full object-contain rounded border"
        />
      </div>
      
      <div className="text-sm text-gray-500">
        <p>Nome do arquivo: {file.name}</p>
        <p>Tamanho: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
      </div>
    </div>
  );
};

export default ImagePreview;
