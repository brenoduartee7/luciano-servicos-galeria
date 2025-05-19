
import React from 'react';

const Instructions = () => {
  return (
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
  );
};

export default Instructions;
