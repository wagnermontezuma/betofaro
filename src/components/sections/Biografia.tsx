'use client';

import Image from 'next/image';

export default function Biografia() {
  return (
    <section id="biografia" className="py-20 bg-pt-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
              Conheça Beto Faro
            </h2>
            <div className="w-20 h-1 bg-pt-red mx-auto"></div>
          </div>

          {/* Primeira linha - Foto à esquerda, texto à direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="/images/beto-faro-biografia-1.jpg"
                alt="Beto Faro em atuação parlamentar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pt-dark mb-4">Trajetória Política</h3>
              <p className="text-gray-700 mb-4">
                Beto Faro iniciou sua carreira política como vereador em sua cidade natal, 
                destacando-se pelo compromisso com a defesa dos direitos dos trabalhadores 
                rurais e urbanos. Sua trajetória é marcada por uma atuação firme e dedicada 
                às causas sociais, ambientais e ao desenvolvimento sustentável da região amazônica.
              </p>
              <p className="text-gray-700">
                Como deputado federal por quatro mandatos consecutivos, trabalhou incansavelmente 
                por políticas públicas que promovessem a justiça social, a agricultura familiar 
                e a reforma agrária, sendo reconhecido nacionalmente por sua atuação em defesa 
                dos povos tradicionais e da preservação da Amazônia.
              </p>
            </div>
          </div>

          {/* Segunda linha - Texto à esquerda, foto à direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-last">
              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <Image
                  src="/images/beto-faro-biografia-2.jpg"
                  alt="Beto Faro com a população"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pt-dark mb-4">Compromisso com o Pará</h3>
              <p className="text-gray-700 mb-4">
                Como senador da República, Beto Faro tem como principais bandeiras a defesa 
                intransigente da Amazônia e do seu povo, a luta por políticas públicas que 
                promovam o desenvolvimento sustentável da região, a geração de emprego e renda, 
                e a melhoria da qualidade de vida da população paraense.
              </p>
              <p className="text-gray-700">
                Sua atuação parlamentar é pautada pelo diálogo permanente com os movimentos 
                sociais, entidades representativas e a população em geral, buscando sempre 
                construir soluções coletivas para os desafios enfrentados pelo estado do Pará 
                e pela Amazônia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 