'use client';

import { FaCheck, FaFileAlt } from 'react-icons/fa';

export default function PropositurasPrincipais() {
  const projetos = [
    {
      id: 1,
      numero: "PL 123/2023",
      titulo: "Modernização da Infraestrutura Rural",
      descricao:
        "Projeto que visa melhorar a infraestrutura nas áreas rurais, garantindo acesso a serviços básicos como água tratada, energia elétrica e internet banda larga.",
      status: "Aprovado na Comissão de Agricultura",
      url: "#",
    },
    {
      id: 2,
      numero: "PL 456/2022",
      titulo: "Ampliação do Programa Nacional de Alimentação Escolar",
      descricao:
        "Amplia o alcance do PNAE, garantindo alimentação de qualidade para mais estudantes e priorizando a aquisição de alimentos da agricultura familiar local.",
      status: "Em tramitação",
      url: "#",
    },
    {
      id: 3,
      numero: "PL 789/2023",
      titulo: "Incentivo à Agricultura Familiar Sustentável",
      descricao:
        "Cria mecanismos de apoio técnico e financeiro para pequenos produtores rurais adotarem práticas de agricultura sustentável e agroecológica.",
      status: "Aprovado na Comissão de Meio Ambiente",
      url: "#",
    },
    {
      id: 4,
      numero: "PEC 42/2023",
      titulo: "Fundo Nacional de Desenvolvimento Rural",
      descricao:
        "Propõe a criação de um fundo específico para financiar projetos de desenvolvimento em comunidades rurais, com foco em sustentabilidade e geração de renda.",
      status: "Em análise pela CCJ",
      url: "#",
    },
  ];

  return (
    <section id="proposituras" className="py-20 bg-pt-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
            Principais Proposituras
          </h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Conheça os principais projetos de lei e proposituras apresentados
            pelo senador Beto Faro no Congresso Nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-pt-light-red p-3 rounded-full text-pt-red mr-4">
                  <FaFileAlt size={24} />
                </div>
                <div>
                  <h3 className="text-pt-red font-bold mb-1">
                    {projeto.numero}
                  </h3>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">
                    {projeto.titulo}
                  </h4>
                  <p className="text-gray-700 mb-4">{projeto.descricao}</p>
                  <div className="flex items-center text-sm text-pt-dark">
                    <FaCheck className="text-green-600 mr-2" />
                    <span>{projeto.status}</span>
                  </div>
                  <a
                    href={projeto.url}
                    className="inline-block mt-4 text-pt-red font-medium hover:text-pt-dark-red"
                  >
                    Ver detalhes →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-pt-red text-white font-medium rounded-full hover:bg-pt-dark-red transition-colors"
          >
            Ver Todas as Proposituras
          </a>
        </div>
      </div>
    </section>
  );
} 