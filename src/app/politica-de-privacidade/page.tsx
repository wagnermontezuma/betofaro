import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Senador Beto Faro',
  description: 'Conheça nossa política de privacidade e como tratamos os seus dados.',
};

export default function PoliticaPrivacidade() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-pt-dark mb-6">
              Política de Privacidade
            </h1>
            <div className="w-20 h-1 bg-pt-red mb-8"></div>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">1. Introdução</h2>
                <p>
                  Esta Política de Privacidade descreve como o Senador Beto Faro coleta, usa e 
                  compartilha informações pessoais obtidas através deste site. Estamos comprometidos
                  em proteger sua privacidade e seus dados pessoais de acordo com a Lei Geral de
                  Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">2. Informações Coletadas</h2>
                <p>
                  Podemos coletar os seguintes tipos de informações pessoais:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <strong>Informações de contato:</strong> Nome, e-mail, telefone e endereço quando
                    você os fornece através de nossos formulários de contato.
                  </li>
                  <li>
                    <strong>Informações de uso:</strong> Dados sobre como você interage com nosso site,
                    incluindo páginas visitadas, tempo de permanência e links clicados.
                  </li>
                  <li>
                    <strong>Informações do dispositivo:</strong> Tipo de navegador, sistema operacional,
                    endereço IP e informações técnicas similares.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">3. Como Usamos as Informações</h2>
                <p>
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Responder às suas solicitações e mensagens enviadas através do formulário de contato.</li>
                  <li>Enviar informações sobre atualizações, eventos e iniciativas, caso você tenha optado por recebê-las.</li>
                  <li>Melhorar nosso site e a experiência do usuário.</li>
                  <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">4. Compartilhamento de Informações</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para
                  fins comerciais. Podemos compartilhar suas informações apenas nas seguintes circunstâncias:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Com provedores de serviços que nos auxiliam na operação do site e no atendimento às suas solicitações.</li>
                  <li>Quando exigido por lei ou para proteger nossos direitos legais.</li>
                  <li>Com seu consentimento expresso.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">5. Seus Direitos</h2>
                <p>
                  Você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Acesso aos dados pessoais que mantemos sobre você.</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                  <li>Eliminação dos dados tratados com seu consentimento.</li>
                  <li>Revogação do consentimento a qualquer momento.</li>
                </ul>
                <p className="mt-2">
                  Para exercer esses direitos, entre em contato conosco através dos canais disponíveis na seção de contato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">6. Segurança</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger
                  suas informações pessoais contra acesso não autorizado, uso indevido, alteração ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">7. Cookies e Tecnologias Similares</h2>
                <p>
                  Nosso site utiliza cookies e tecnologias similares para melhorar a sua experiência,
                  analisar o tráfego e personalizar o conteúdo. Você pode controlar o uso de cookies
                  através das configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">8. Alterações na Política de Privacidade</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente
                  estará sempre disponível neste site, com a data da última atualização.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pt-dark mb-4">9. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus
                  dados pessoais, entre em contato conosco através do e-mail: 
                  <a href="mailto:privacidade@betofaro.com.br" className="text-pt-red hover:underline ml-1">
                    privacidade@betofaro.com.br
                  </a>
                </p>
              </section>

              <div className="pt-6">
                <p className="italic text-gray-500">Última atualização: 15 de julho de 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 