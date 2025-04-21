import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const SobreSenador = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre o Senador</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image 
              src="/images/senador.jpg" 
              alt="Senador Beto Faro" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-lg" 
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-pt-red mb-4">Beto Faro</h3>
            <p className="text-gray-700 mb-6">
              Beto Faro, nascido em Belém (PA), é um político com vasta experiência no cenário paraense e nacional. 
              Sua trajetória política é marcada pela defesa da agricultura familiar, reforma agrária, 
              desenvolvimento sustentável e direitos dos trabalhadores rurais.
            </p>
            <h4 className="text-xl font-semibold text-pt-dark mb-3">Áreas de Atuação</h4>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>Desenvolvimento sustentável na Amazônia</li>
              <li>Políticas públicas para agricultura familiar</li>
              <li>Defesa dos direitos indígenas e quilombolas</li>
              <li>Infraestrutura para o desenvolvimento regional</li>
            </ul>
            
            <h4 className="text-xl font-semibold text-pt-dark mb-3">Comissões</h4>
            <ul className="list-disc pl-5 mb-8 text-gray-700">
              <li>Comissão de Agricultura e Reforma Agrária (CRA)</li>
              <li>Comissão de Meio Ambiente (CMA)</li>
              <li>Comissão de Desenvolvimento Regional e Turismo (CDR)</li>
            </ul>
            
            <Button href="/trajetoria" variant="primary">
              Conheça sua trajetória completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSenador; 