
import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Tipo para cada imagem da galeria
interface GalleryImage {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Simula carregamento de imagens do localStorage
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
        }
      } catch (error) {
        console.error('Erro ao carregar imagens da galeria:', error);
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

  // Abre o modal com a imagem selecionada
  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Fecha o modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <MainLayout>
      {/* Header da página */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Galeria de Projetos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos realizados
          </p>
        </div>
      </section>

      {/* Galeria de imagens */}
      <section className="section">
        <div className="container-custom">
          {/* Estado de carregamento */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="h-64 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Galeria quando carregada */}
          {!loading && (
            <>
              {images.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Nenhuma imagem disponível no momento
                  </h3>
                  <p className="text-gray-500">
                    Em breve adicionaremos imagens dos nossos trabalhos.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image) => (
                    <div 
                      key={image.id} 
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => openImageModal(image)}
                    >
                      <div className="relative h-64">
                        <img 
                          src={image.url} 
                          alt={image.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal de visualização da imagem */}
      <Dialog open={!!selectedImage} onOpenChange={() => closeImageModal()}>
        <DialogContent className="max-w-4xl bg-white p-0">
          {selectedImage && (
            <div>
              <div className="relative">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-700">{selectedImage.description}</p>
                <p className="text-gray-500 text-sm mt-4">
                  Data: {new Date(selectedImage.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Gostou do nosso trabalho?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato e solicite um orçamento para o seu projeto
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/5521992303110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5">
                  <path 
                    fill="currentColor" 
                    d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.89 5.987 2.427 8.445L.83 30.315l6.03-1.578A15.96 15.96 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0zm-5.234 9.91c-.284-.637-.614-.651-.898-.662-.232-.01-.498-.008-.764-.008s-.697.1-.1.06.5.329-.232.82c-.329.492-1.243 1.21-1.243 2.94s1.273 3.413 1.452 3.65c.178.239 2.5 3.988 6.17 5.43 3.673 1.442 3.673.96 4.335.9s2.133-.87 2.432-1.71.305-1.558.214-1.71c-.092-.149-.344-.239-.715-.418s-2.209-1.09-2.553-1.214c-.344-.119-.595-.179-.845.18-.25.358-.969 1.214-1.183 1.463-.22.245-.434.274-.806.094-.372-.179-1.57-.578-2.993-1.848-1.106-.985-1.853-2.202-2.072-2.576-.214-.374-.022-.576.164-.762.167-.168.372-.438.558-.657.186-.22.248-.374.372-.622.124-.248.062-.464-.031-.65-.092-.18-.803-2.035-1.132-2.77z" 
                  />
                </svg>
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Gallery;
