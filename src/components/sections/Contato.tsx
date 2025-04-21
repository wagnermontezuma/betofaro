'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemEnvio, setMensagemEnvio] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensagemEnvio('');

    // Simulação de envio
    setTimeout(() => {
      setEnviando(false);
      setMensagemEnvio('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      });
    }, 1500);
  };

  const infoContato = [
    {
      icone: <FaPhone className="text-2xl text-pt-red" />,
      titulo: 'Telefone',
      detalhes: ['(61) 3303-xxxx', '(91) 3222-xxxx'],
    },
    {
      icone: <FaEnvelope className="text-2xl text-pt-red" />,
      titulo: 'E-mail',
      detalhes: ['sen.betofaro@senado.leg.br', 'contato@betofaro.com.br'],
    },
    {
      icone: <FaMapMarkerAlt className="text-2xl text-pt-red" />,
      titulo: 'Endereço',
      detalhes: [
        'Senado Federal, Anexo II',
        'Ala Senador Teotônio Vilela, Gabinete xx',
        'CEP 70165-900, Brasília-DF',
      ],
    },
  ];

  return (
    <section id="contato" className="py-20 bg-pt-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Queremos ouvir você! Envie uma mensagem com suas dúvidas, sugestões
            ou solicitações. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {infoContato.map((info, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-center mb-4">{info.icone}</div>
              <h3 className="text-lg font-bold text-pt-dark mb-3">
                {info.titulo}
              </h3>
              <div className="text-gray-700">
                {info.detalhes.map((detalhe, idx) => (
                  <p key={idx} className="mb-1">
                    {detalhe}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-pt-dark mb-6 text-center">
            Formulário de Contato
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nome Completo*
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pt-red"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pt-red"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="assunto"
                className="block text-gray-700 font-medium mb-2"
              >
                Assunto*
              </label>
              <select
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pt-red"
              >
                <option value="">Selecione um assunto</option>
                <option value="Sugestão de Projeto">Sugestão de Projeto</option>
                <option value="Denúncia">Denúncia</option>
                <option value="Apoio a Comunidades">
                  Apoio a Comunidades
                </option>
                <option value="Visita ao Gabinete">Visita ao Gabinete</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-gray-700 font-medium mb-2"
              >
                Mensagem*
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pt-red"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={enviando}
                className="px-8 py-3 bg-pt-red text-white font-medium rounded-full hover:bg-pt-dark-red transition-colors disabled:bg-gray-400"
              >
                {enviando ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {mensagemEnvio && (
                <p className="mt-4 text-green-600">{mensagemEnvio}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 