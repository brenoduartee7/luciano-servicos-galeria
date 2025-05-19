
import React from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DropZoneProps {
  htmlFor: string;
}

const DropZone = ({ htmlFor }: DropZoneProps) => {
  return (
    <label 
      htmlFor={htmlFor} 
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
  );
};

export default DropZone;
