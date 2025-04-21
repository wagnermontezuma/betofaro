'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLeaf, FaHandsHelping, FaBook, FaHome } from 'react-icons/fa';

// Dados dos projetos
const projetos = [
  {
    id: 1,
    titulo: 'Desenvolvimento Sustentável da Amazônia',
    descricao: 'Projeto que visa promover o desenvolvimento econômico sustentável da região amazônica, conciliando preservação ambiental e geração de renda.',
    icone: <FaLeaf className="text-4xl text-pt-red" />,
    link: '/projetos/desenvolvimento-sustentavel',
    imagem: '/images/projeto-amazonia.jpg',
  },
  {
    id: 2,
    titulo: 'Agricultura Familiar',
    descricao: 'Fortalecimento da agricultura familiar como estratégia de desenvolvimento rural, segurança alimentar e combate à fome.',
    icone: <FaHandsHelping className="text-4xl text-pt-red" />,
    link: '/projetos/agricultura-familiar',
    imagem: '/images/projeto-agricultura.jpg',
  },
  {
    id: 3,
    titulo: 'Educação no Campo',
    descricao: 'Ampliação do acesso à educação de qualidade para as populações rurais, com foco na valorização da cultura e dos saberes locais.',
    icone: <FaBook className="text-4xl text-pt-red" />,
    link: '/projetos/educacao-campo',
    imagem: '/images/projeto-educacao.jpg',
  },
  {
    id: 4,
    titulo: 'Habitação Rural',
    descricao: 'Programa de habitação rural para garantir moradia digna às famílias do campo, respeitando as particularidades regionais e culturais.',
    icone: <FaHome className="text-4xl text-pt-red" />,
    link: '/projetos/habitacao-rural',
    imagem: '/images/projeto-habitacao.jpg',
  }
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
            Projetos e Iniciativas
          </h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Conheça os principais projetos e iniciativas do Senador Beto Faro para o 
            desenvolvimento sustentável do Pará e da Amazônia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{projeto.icone}</div>
                <h3 className="text-xl font-semibold text-pt-dark mb-3">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-700 mb-4">
                  {projeto.descricao}
                </p>
                <Link
                  href={projeto.link}
                  className="inline-block text-pt-red hover:text-pt-dark-red font-medium transition-colors"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projetos"
            className="inline-block bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
} 