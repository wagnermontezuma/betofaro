'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaArrowRight } from 'react-icons/fa';

// Dados das notícias
const noticias = [
  {
    id: 1,
    titulo: 'Beto Faro apresenta projeto de lei para proteção de reservas extrativistas',
    resumo: 'O senador Beto Faro protocolou projeto de lei que visa fortalecer a proteção das reservas extrativistas na Amazônia e garantir a sustentabilidade das comunidades tradicionais.',
    data: '15 de julho de 2023',
    imagem: '/images/noticia-1.jpg',
    link: '/noticias/projeto-reservas-extrativistas',
  },
  {
    id: 2,
    titulo: 'Audiência pública debate políticas para a agricultura familiar no Pará',
    resumo: 'Senador Beto Faro presidiu audiência pública que discutiu políticas de fortalecimento da agricultura familiar e a importância dos pequenos produtores para a segurança alimentar.',
    data: '28 de junho de 2023',
    imagem: '/images/noticia-2.jpg',
    link: '/noticias/audiencia-agricultura-familiar',
  },
  {
    id: 3,
    titulo: 'Beto Faro participa de inauguração de escola no interior do Pará',
    resumo: 'O parlamentar participou da cerimônia de inauguração de uma escola no interior do estado, resultado de emendas parlamentares destinadas à educação no campo.',
    data: '10 de junho de 2023',
    imagem: '/images/noticia-3.jpg',
    link: '/noticias/inauguracao-escola-para',
  },
];

export default function Noticias() {
  return (
    <section id="noticias" className="py-20 bg-pt-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
            Notícias e Atualizações
          </h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Acompanhe as últimas notícias e atualizações sobre a atuação do Senador Beto Faro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaClock className="mr-2" />
                  <span>{noticia.data}</span>
                </div>
                <h3 className="text-xl font-semibold text-pt-dark mb-3">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {noticia.resumo}
                </p>
                <Link
                  href={noticia.link}
                  className="inline-flex items-center text-pt-red hover:text-pt-dark-red font-medium transition-colors mt-auto"
                >
                  Leia mais <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/noticias"
            className="inline-block bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Ver todas as notícias
          </Link>
        </div>
      </div>
    </section>
  );
} 