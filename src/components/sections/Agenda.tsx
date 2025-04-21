'use client';

import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Agenda() {
  const eventos = [
    {
      id: 1,
      titulo: "Encontro com Produtores Rurais",
      data: "15 de Outubro, 2024",
      horario: "09:00 - 12:00",
      local: "Centro de Convenções de Belém, PA",
      descricao:
        "Discussão sobre políticas públicas para fortalecimento da agricultura familiar no estado do Pará.",
    },
    {
      id: 2,
      titulo: "Audiência Pública: Reforma Agrária",
      data: "22 de Outubro, 2024",
      horario: "14:00 - 17:00",
      local: "Senado Federal, Brasília, DF",
      descricao:
        "Debate sobre os avanços e desafios da reforma agrária no Brasil, com participação de movimentos sociais e especialistas.",
    },
    {
      id: 3,
      titulo: "Inauguração de Projeto de Irrigação",
      data: "29 de Outubro, 2024",
      horario: "10:00 - 12:00",
      local: "Município de Santarém, PA",
      descricao:
        "Cerimônia de inauguração do sistema de irrigação que beneficiará pequenos agricultores da região oeste do Pará.",
    },
    {
      id: 4,
      titulo: "Seminário: Sustentabilidade na Amazônia",
      data: "5 de Novembro, 2024",
      horario: "09:00 - 18:00",
      local: "Universidade Federal do Pará, Belém",
      descricao:
        "Evento acadêmico sobre desenvolvimento sustentável e preservação ambiental na região amazônica.",
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
            Agenda do Senador
          </h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Acompanhe os próximos compromissos e eventos do Senador Beto Faro.
            Fique por dentro das atividades parlamentares e encontros com a
            comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="bg-pt-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-pt-dark mb-4">
                {evento.titulo}
              </h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-pt-red mr-3" />
                  <span>{evento.data}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-pt-red mr-3" />
                  <span>{evento.horario}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-pt-red mr-3" />
                  <span>{evento.local}</span>
                </div>
              </div>
              <p className="text-gray-700">{evento.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-pt-red text-white font-medium rounded-full hover:bg-pt-dark-red transition-colors"
          >
            Ver Agenda Completa
          </a>
        </div>
      </div>
    </section>
  );
} 