'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function SobreSenador() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/betofaro-perfil.jpg"
                alt="Senador Beto Faro"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pt-red text-white p-4 md:p-6 rounded-lg shadow-lg">
              <p className="text-xl md:text-2xl font-bold">+30 anos</p>
              <p className="text-sm md:text-base">de vida pública</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-pt-red mr-4"></div>
              <h3 className="text-pt-red font-medium uppercase tracking-wider">
                Conheça seu Senador
              </h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-6">
              Beto Faro: Voz do Pará no Senado Federal
            </h2>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                Nascido em Monte Alegre, no Pará, Beto Faro iniciou sua trajetória como líder sindical, 
                defendendo os direitos dos trabalhadores rurais. Sua paixão pela justiça social e pelo 
                desenvolvimento sustentável o levou à vida pública.
              </p>
              <p>
                Com uma carreira política sólida, foi Deputado Estadual, Deputado Federal por 5 mandatos e 
                agora representa o povo paraense no Senado Federal, onde continua seu trabalho em defesa da 
                Amazônia, da agricultura familiar e dos direitos sociais.
              </p>
              <p>
                Seu compromisso é com um Brasil mais justo, onde o desenvolvimento econômico caminha lado a 
                lado com a preservação ambiental e a redução das desigualdades sociais.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-pt-gray p-4 rounded-lg">
                <h4 className="font-bold text-pt-dark mb-2">Comissões</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Comissão de Meio Ambiente</li>
                  <li>• Comissão de Agricultura</li>
                  <li>• Comissão da Amazônia</li>
                </ul>
              </div>
              <div className="bg-pt-gray p-4 rounded-lg">
                <h4 className="font-bold text-pt-dark mb-2">Áreas de Atuação</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Desenvolvimento Sustentável</li>
                  <li>• Agricultura Familiar</li>
                  <li>• Direitos Humanos</li>
                </ul>
              </div>
            </div>

            <Button href="/trajetoria" variant="primary">
              Conheça minha trajetória completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 