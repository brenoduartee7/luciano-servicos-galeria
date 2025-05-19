
import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Image } from 'lucide-react';
import DropZone from '@/components/image-upload/DropZone';
import ImagePreview from '@/components/image-upload/ImagePreview';
import ImageForm from '@/components/image-upload/ImageForm';
import Instructions from '@/components/image-upload/Instructions';
import { useImageUpload } from '@/hooks/useImageUpload';

const ImageUpload = () => {
  const {
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
  } = useImageUpload();

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
                <DropZone htmlFor="image-upload" />
              ) : (
                <ImagePreview 
                  file={selectedImage.file} 
                  preview={selectedImage.preview}
                  onClear={clearSelectedImage}
                />
              )}
            </div>
          </div>
          
          {/* Detalhes da Imagem */}
          <div>
            <ImageForm
              title={title}
              description={description}
              setTitle={setTitle}
              setDescription={setDescription}
              onSubmit={handleSubmit}
              onCancel={clearSelectedImage}
              isUploading={isUploading}
              selectedImage={!!selectedImage}
            />
            
            <Instructions />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ImageUpload;
