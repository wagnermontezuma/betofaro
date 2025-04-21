import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { WhatsAppButton } from '../components/ui';
import Image from 'next/image';

export default function Home() {
  // Número do WhatsApp do Senador Beto Faro (substitua pelo número real)
  const phoneNumber = "5591XXXXXXXX"; // Substitua pelo número correto
  const defaultMessage = "Olá, gostaria de entrar em contato com o Senador Beto Faro.";

  return (
    <main>
      <Header />
      
      {/* Hero section com imagem de fundo */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        {/* Background Image com overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-[130%]" style={{ top: "-15%" }}>
              <Image
                src="/images/hero-background.jpg"
                alt="Beto Faro no Senado Federal"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
          </div>
        </div>

        {/* Conteúdo do Hero */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-pt-red">Beto Faro</span>: <br />
              Senador pelo Pará
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Trabalhando incansavelmente por políticas públicas que promovam o desenvolvimento sustentável, 
              a justiça social e a preservação da Amazônia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projetos" 
                className="bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 text-center"
              >
                Conheça meus projetos
              </a>
              <a 
                href="#noticias" 
                className="bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full border-2 border-white transition-colors duration-300 text-center"
              >
                Notícias e atualizações
              </a>
            </div>
          </div>
        </div>

        {/* Seta para rolagem */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <a 
            href="#biografia" 
            aria-label="Rolar para Biografia"
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm mb-2">Saiba mais</span>
            <svg 
              className="w-6 h-6 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </section>
      
      {/* Seção de Biografia */}
      <section id="biografia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Título da seção */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
                Trajetória de Luta e Compromisso
              </h2>
              <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                Conheça a jornada de Beto Faro, das comunidades rurais do Pará até o Senado Federal
              </p>
            </div>

            {/* Primeira seção: Origens e raízes paraenses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
              <div>
                <h3 className="text-2xl font-bold text-pt-dark mb-4 border-l-4 border-pt-red pl-4">Das Raízes Rurais ao Protagonismo Nacional</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nascido no município de Monte Alegre, no coração do Baixo Amazonas paraense, Alberto Anísio Faro de Oliveira cresceu vivenciando os desafios das comunidades ribeirinhas e rurais da Amazônia. Filho de trabalhadores rurais e profundamente conectado com a realidade do campo, Beto Faro construiu desde cedo uma consciência política voltada para a defesa dos direitos dos trabalhadores e da preservação ambiental.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sua trajetória política teve início no movimento sindical rural, onde se destacou como líder na luta pelos direitos dos trabalhadores do campo. Este engajamento nas causas populares formou a base de sua visão política: a certeza de que desenvolvimento econômico e justiça social precisam caminhar lado a lado.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[400px] shadow-xl">
                <Image 
                  src="/images/beto-faro-biografia-1.jpg" 
                  alt="Beto Faro em suas origens rurais" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Segunda seção: Trajetória política */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
              <div className="relative rounded-lg overflow-hidden h-[400px] shadow-xl md:order-last">
                <Image 
                  src="/images/beto-faro-biografia-2.jpg" 
                  alt="Beto Faro em atuação parlamentar" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pt-dark mb-4 border-l-4 border-pt-red pl-4">Atuação Parlamentar de Destaque</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Com uma sólida carreira política, Beto Faro serviu como Deputado Federal por cinco mandatos consecutivos, período em que se destacou pela defesa incansável da reforma agrária, agricultura familiar e políticas de desenvolvimento sustentável para a Amazônia. Foi relator de importantes projetos de lei e participou ativamente em comissões estratégicas, sempre mantendo seu compromisso com as causas sociais.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Durante seus mandatos, garantiu importantes conquistas para o Pará: recursos para infraestrutura em comunidades rurais, fortalecimento de programas de crédito para pequenos produtores, e iniciativas para a proteção de reservas extrativistas. Sua atuação sempre foi marcada pelo diálogo direto com as comunidades, compreendendo que as melhores soluções nascem da escuta atenta às necessidades da população.
                </p>
              </div>
            </div>

            {/* Terceira seção: Atuação no Senado */}
            <div className="bg-pt-gray p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-pt-dark mb-6 text-center">No Senado Federal: Voz Ativa pelo Pará</h3>
              <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                Como Senador da República, Beto Faro ampliou sua capacidade de atuação, levando as demandas do povo paraense para o centro das decisões nacionais. Suas bandeiras principais incluem:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-pt-light-red w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pt-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-2 text-center">Defesa da Amazônia</h4>
                  <p className="text-gray-700 text-center">
                    Proteção das florestas e povos tradicionais, combate ao desmatamento ilegal e promoção de modelos econômicos sustentáveis.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-pt-light-red w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pt-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-2 text-center">Agricultura Familiar</h4>
                  <p className="text-gray-700 text-center">
                    Fortalecimento dos programas de apoio aos pequenos produtores, garantia de acesso a crédito e tecnologias adaptadas à realidade amazônica.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-pt-light-red w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pt-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-2 text-center">Infraestrutura para o Pará</h4>
                  <p className="text-gray-700 text-center">
                    Trabalho constante para garantir investimentos em infraestrutura básica, saúde, educação e mobilidade para todas as regiões do estado.
                  </p>
                </div>
              </div>
              <p className="text-center text-gray-700 italic">
                "Meu compromisso é com o povo paraense. Cada projeto, cada voto, cada ação no Senado é guiada por um único objetivo: melhorar a vida de quem mais precisa e garantir que o Pará tenha voz ativa nas decisões que definem os rumos do Brasil." <br />
                <span className="font-bold text-pt-dark mt-2 block">- Senador Beto Faro</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Projetos e Iniciativas */}
      <section id="projetos" className="py-20 bg-pt-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Título da seção */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
                Projetos e Iniciativas no Senado
              </h2>
              <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                Conheça as principais atuações e propostas do Senador Beto Faro para o desenvolvimento do Pará e da Amazônia
              </p>
            </div>

            {/* Categoria: Agricultura Familiar e Desenvolvimento Rural */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-pt-dark mb-8 border-l-4 border-pt-red pl-4">
                Agricultura Familiar e Desenvolvimento Rural
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Projeto 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <span className="bg-pt-red text-white p-2 rounded-lg font-bold text-sm mr-3">PL 321/2023</span>
                    <span className="bg-green-100 text-green-800 p-2 rounded-lg text-xs font-semibold">Em tramitação</span>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">Programa Nacional de Fortalecimento da Agricultura Familiar na Amazônia</h4>
                  <p className="text-gray-700 mb-4">
                    Projeto que estabelece linhas de crédito específicas e assistência técnica para agricultores familiares da região amazônica, com ênfase em práticas sustentáveis de cultivo e manejo florestal.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-bold text-pt-dark mb-2">Principais benefícios:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Acesso facilitado a crédito rural com taxas de juros reduzidas</li>
                      <li>Assistência técnica especializada em sistemas agroflorestais</li>
                      <li>Incentivo à produção orgânica e agroecológica</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Este programa representa um avanço significativo para os mais de 300 mil agricultores familiares do Pará, que poderão produzir com mais qualidade e sustentabilidade."
                  </p>
                  <a href="#" className="text-pt-red font-medium hover:underline">Saiba mais →</a>
                </div>

                {/* Projeto 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <span className="bg-pt-red text-white p-2 rounded-lg font-bold text-sm mr-3">PL 528/2023</span>
                    <span className="bg-blue-100 text-blue-800 p-2 rounded-lg text-xs font-semibold">Aprovado na Comissão</span>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">Modernização da Infraestrutura Rural</h4>
                  <p className="text-gray-700 mb-4">
                    Proposta que destina recursos específicos para a melhoria da infraestrutura em áreas rurais do Pará, incluindo estradas vicinais, energia elétrica, acesso à internet e saneamento básico.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-bold text-pt-dark mb-2">Principais benefícios:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Melhoria no escoamento da produção agrícola</li>
                      <li>Acesso à internet banda larga em comunidades isoladas</li>
                      <li>Eletrificação rural em áreas ainda não atendidas</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Não podemos falar em desenvolvimento rural sem garantir condições básicas de infraestrutura. Este projeto vai transformar a realidade de centenas de comunidades no interior do Pará."
                  </p>
                  <a href="#" className="text-pt-red font-medium hover:underline">Saiba mais →</a>
                </div>
              </div>
            </div>

            {/* Categoria: Meio Ambiente e Desenvolvimento Sustentável */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-pt-dark mb-8 border-l-4 border-pt-red pl-4">
                Meio Ambiente e Desenvolvimento Sustentável
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Projeto 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <span className="bg-pt-red text-white p-2 rounded-lg font-bold text-sm mr-3">PL 743/2023</span>
                    <span className="bg-yellow-100 text-yellow-800 p-2 rounded-lg text-xs font-semibold">Em análise na CCJ</span>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">Proteção das Reservas Extrativistas</h4>
                  <p className="text-gray-700 mb-4">
                    Projeto que fortalece a proteção legal das reservas extrativistas na Amazônia, aumentando as penalidades para crimes ambientais nestas áreas e garantindo recursos para fiscalização e apoio às comunidades tradicionais.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-bold text-pt-dark mb-2">Principais benefícios:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Maior proteção para áreas de alto valor ambiental e cultural</li>
                      <li>Apoio às comunidades extrativistas com programas de renda sustentável</li>
                      <li>Combate ao desmatamento ilegal e às invasões de terras</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 italic text-sm mb-3">
                    "As reservas extrativistas são patrimônios ambientais e culturais do Pará que precisam ser preservados para as futuras gerações, garantindo sustento digno para as comunidades tradicionais."
                  </p>
                  <a href="#" className="text-pt-red font-medium hover:underline">Saiba mais →</a>
                </div>

                {/* Projeto 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <span className="bg-pt-red text-white p-2 rounded-lg font-bold text-sm mr-3">PL 619/2023</span>
                    <span className="bg-green-100 text-green-800 p-2 rounded-lg text-xs font-semibold">Aprovado</span>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">Programa Amazônia Sustentável</h4>
                  <p className="text-gray-700 mb-4">
                    Programa que cria incentivos fiscais e financeiros para empresas que investirem em bioeconomia, pesquisa e desenvolvimento de produtos sustentáveis derivados da biodiversidade amazônica.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-bold text-pt-dark mb-2">Principais benefícios:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Geração de empregos verdes em comunidades amazônicas</li>
                      <li>Valorização econômica da floresta em pé</li>
                      <li>Incentivo à pesquisa científica e inovação tecnológica regional</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Precisamos mostrar que é possível desenvolver economicamente a Amazônia preservando seu patrimônio natural. Este programa é um passo importante nessa direção."
                  </p>
                  <a href="#" className="text-pt-red font-medium hover:underline">Saiba mais →</a>
                </div>
              </div>
            </div>

            {/* Categoria: Desenvolvimento Social e Educação */}
            <div>
              <h3 className="text-2xl font-bold text-pt-dark mb-8 border-l-4 border-pt-red pl-4">
                Desenvolvimento Social e Educação
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Projeto 5 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <span className="bg-pt-red text-white p-2 rounded-lg font-bold text-sm mr-3">PL 456/2023</span>
                    <span className="bg-blue-100 text-blue-800 p-2 rounded-lg text-xs font-semibold">Em tramitação avançada</span>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">Ampliação do Programa Nacional de Alimentação Escolar</h4>
                  <p className="text-gray-700 mb-4">
                    Projeto que amplia os recursos destinados à compra de alimentos da agricultura familiar para a merenda escolar nos municípios paraenses, com foco na melhoria da qualidade nutricional e no desenvolvimento local.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-bold text-pt-dark mb-2">Principais benefícios:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Melhoria na qualidade da alimentação escolar</li>
                      <li>Garantia de mercado para produtos da agricultura familiar</li>
                      <li>Valorização da cultura alimentar regional</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Este projeto tem duplo impacto: melhora a alimentação de nossas crianças nas escolas e fortalece a economia local, gerando renda para os agricultores familiares."
                  </p>
                  <a href="#" className="text-pt-red font-medium hover:underline">Saiba mais →</a>
                </div>

                {/* Projeto 6 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <span className="bg-pt-red text-white p-2 rounded-lg font-bold text-sm mr-3">PL 892/2023</span>
                    <span className="bg-yellow-100 text-yellow-800 p-2 rounded-lg text-xs font-semibold">Em análise</span>
                  </div>
                  <h4 className="text-xl font-bold text-pt-dark mb-3">Programa de Educação no Campo</h4>
                  <p className="text-gray-700 mb-4">
                    Proposta que cria um programa nacional de fortalecimento das escolas rurais, com metodologias adaptadas à realidade do campo, formação específica para professores e investimentos em infraestrutura educacional.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-bold text-pt-dark mb-2">Principais benefícios:</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Redução da evasão escolar em áreas rurais</li>
                      <li>Valorização da identidade e cultura das comunidades do campo</li>
                      <li>Melhoria da qualidade do ensino em escolas rurais</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 italic text-sm mb-3">
                    "A educação no campo precisa ser pensada a partir da realidade rural, respeitando as particularidades e conhecimentos locais, mas oferecendo as mesmas oportunidades das escolas urbanas."
                  </p>
                  <a href="#" className="text-pt-red font-medium hover:underline">Saiba mais →</a>
                </div>
              </div>
            </div>

            {/* Botão para ver todos os projetos */}
            <div className="text-center mt-16">
              <a href="/projetos" className="inline-block bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors">
                Ver todos os projetos
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Notícias e Atualizações */}
      <section id="noticias" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Título da seção */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
                Notícias e Atualizações
              </h2>
              <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                Acompanhe as atividades e conquistas mais recentes do Senador Beto Faro no Congresso Nacional e no Pará
              </p>
            </div>

            {/* Últimas notícias em formato de cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Notícia 1 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/noticia-1.jpg"
                    alt="Beto Faro durante sessão no Senado Federal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-pt-red text-white text-xs font-bold px-2 py-1 rounded">
                    Senado Federal
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>12 de Julho, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-pt-dark mb-3">
                    Beto Faro apresenta projeto para fortalecer a agricultura familiar na Amazônia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Proposta visa estabelecer crédito especial e assistência técnica para agricultores familiares da região amazônica, com foco em práticas sustentáveis.
                  </p>
                  <a href="#" className="inline-flex items-center text-pt-red font-medium hover:underline">
                    Leia mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Notícia 2 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/noticia-2.jpg"
                    alt="Beto Faro em visita a comunidade rural"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Interior do Pará
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>28 de Junho, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-pt-dark mb-3">
                    Senador Beto Faro participa de inauguração de escola no interior do Pará
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Escola construída com recursos de emendas parlamentares vai beneficiar mais de 500 estudantes da zona rural do município de Santarém.
                  </p>
                  <a href="#" className="inline-flex items-center text-pt-red font-medium hover:underline">
                    Leia mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Notícia 3 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/noticia-3.jpg"
                    alt="Beto Faro em audiência pública"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Audiência Pública
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>15 de Junho, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-pt-dark mb-3">
                    Audiência pública debate proteção de reservas extrativistas na Amazônia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Senador Beto Faro presidiu audiência que reuniu lideranças comunitárias, especialistas e representantes do governo para discutir a preservação dessas áreas.
                  </p>
                  <a href="#" className="inline-flex items-center text-pt-red font-medium hover:underline">
                    Leia mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            {/* Feed de redes sociais e imprensa */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Feed do Twitter */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <h3 className="text-xl font-bold text-pt-dark">Últimos Tweets</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4 py-2">
                    <p className="text-gray-700 text-sm mb-2">
                      Participei hoje de importante audiência sobre o futuro das reservas extrativistas na Amazônia. Precisamos garantir a proteção dessas áreas e o sustento digno para as comunidades tradicionais. #AmazôniaSustentável
                    </p>
                    <span className="text-gray-500 text-xs">2 dias atrás</span>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4 py-2">
                    <p className="text-gray-700 text-sm mb-2">
                      É com muita alegria que anuncio a liberação de recursos para a construção de mais uma escola no interior do Pará. Educação de qualidade é prioridade no nosso mandato! #EducaçãoParaTodos
                    </p>
                    <span className="text-gray-500 text-xs">5 dias atrás</span>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4 py-2">
                    <p className="text-gray-700 text-sm mb-2">
                      A agricultura familiar é a base da segurança alimentar do Brasil. Hoje, apresentei projeto para fortalecer os pequenos produtores da Amazônia com crédito e assistência técnica. #AgriculturaFamiliar
                    </p>
                    <span className="text-gray-500 text-xs">1 semana atrás</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a href="https://twitter.com/BetoFaroOficial" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
                    Seguir no Twitter
                  </a>
                </div>
              </div>

              {/* Feed do Instagram */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <svg className="w-6 h-6 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-pt-dark">Instagram</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="relative aspect-square">
                    <Image src="/images/insta-1.jpg" alt="Visita ao interior" fill className="object-cover rounded-md" />
                  </div>
                  <div className="relative aspect-square">
                    <Image src="/images/insta-2.jpg" alt="Sessão no Senado" fill className="object-cover rounded-md" />
                  </div>
                  <div className="relative aspect-square">
                    <Image src="/images/insta-3.jpg" alt="Reunião com lideranças" fill className="object-cover rounded-md" />
                  </div>
                  <div className="relative aspect-square">
                    <Image src="/images/insta-4.jpg" alt="Evento comunitário" fill className="object-cover rounded-md" />
                  </div>
                  <div className="relative aspect-square">
                    <Image src="/images/insta-5.jpg" alt="Visita a escola" fill className="object-cover rounded-md" />
                  </div>
                  <div className="relative aspect-square">
                    <Image src="/images/insta-6.jpg" alt="Debate no Senado" fill className="object-cover rounded-md" />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a href="https://instagram.com/BetoFaroOficial" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-medium hover:underline">
                    Seguir no Instagram
                  </a>
                </div>
              </div>

              {/* Destaques na Imprensa */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <svg className="w-6 h-6 text-pt-red mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <h3 className="text-xl font-bold text-pt-dark">Na Imprensa</h3>
                </div>
                <div className="space-y-4">
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-bold text-pt-dark mb-1">O Liberal</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Beto Faro defende investimentos em infraestrutura para o desenvolvimento do Pará
                    </p>
                    <span className="text-gray-500 text-xs">10 de julho, 2023</span>
                  </a>
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-bold text-pt-dark mb-1">Diário do Pará</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Senador apresenta projeto para fortalecer agricultura familiar na Amazônia
                    </p>
                    <span className="text-gray-500 text-xs">2 de julho, 2023</span>
                  </a>
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-bold text-pt-dark mb-1">Amazônia Hoje</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Beto Faro participa de inauguração de escola no interior e anuncia novos investimentos
                    </p>
                    <span className="text-gray-500 text-xs">28 de junho, 2023</span>
                  </a>
                </div>
                <div className="mt-6 text-center">
                  <a href="/imprensa" className="text-pt-red font-medium hover:underline">
                    Ver todas as notícias
                  </a>
                </div>
              </div>
            </div>

            {/* Botão para ver todas as notícias */}
            <div className="text-center">
              <a href="/noticias" className="inline-block bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors">
                Ver todas as notícias
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Contato e Envolvimento */}
      <section id="contato" className="py-20 bg-pt-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Título da seção */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pt-dark mb-4">
                Fale Comigo
              </h2>
              <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                Estou sempre aberto a ouvir suas ideias, sugestões e preocupações. Meu mandato é do povo paraense e para o povo paraense.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário de contato */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-pt-dark mb-6">Envie sua mensagem</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pt-red"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pt-red"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Assunto</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pt-red"
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pt-red resize-none"
                      placeholder="Digite sua mensagem aqui..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="mt-1 focus:ring-pt-red h-4 w-4 text-pt-red border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-3 text-gray-700">
                      Quero receber a newsletter com atualizações sobre o trabalho do Senador Beto Faro
                    </label>
                  </div>
                  <button 
                    type="submit"
                    className="bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
              
              {/* Lado direito - Informações de contato e foto */}
              <div className="flex flex-col gap-8">
                {/* Foto do senador */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                    <Image 
                      src="/images/beto-faro-informal.jpg" 
                      alt="Senador Beto Faro" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-pt-dark mb-2">Senador Beto Faro</h3>
                  <p className="text-gray-700 mb-4">
                    Estou sempre pronto para ouvir suas demandas e trabalhar por um Pará mais justo e desenvolvido.
                  </p>
                </div>

                {/* Informações de contato */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-pt-dark mb-6 border-l-4 border-pt-red pl-4">Contatos oficiais</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-pt-dark mb-2">Gabinete em Brasília</h4>
                      <p className="text-gray-700">
                        Senado Federal, Anexo 2, Gabinete XX<br />
                        CEP: 70165-900 - Brasília/DF<br />
                        Telefone: (61) XXXX-XXXX<br />
                        E-mail: <a href="mailto:beto.faro@senado.leg.br" className="text-pt-red hover:underline">beto.faro@senado.leg.br</a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-pt-dark mb-2">Escritório no Pará</h4>
                      <p className="text-gray-700">
                        Av. XXXXX, nº XXX, Bairro XXXXX<br />
                        CEP: XXXXX-XXX - Belém/PA<br />
                        Telefone: (91) XXXX-XXXX<br />
                        E-mail: <a href="mailto:gabinete.betofaro.pa@gmail.com" className="text-pt-red hover:underline">gabinete.betofaro.pa@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Redes sociais e envolvimento */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-pt-dark mb-6 border-l-4 border-pt-red pl-4">Acompanhe e participe</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-pt-dark mb-4">Redes Sociais</h4>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://facebook.com/BetoFaroOficial" target="_blank" rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 bg-pt-red text-white rounded-full hover:bg-pt-dark-red transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="https://instagram.com/BetoFaroOficial" target="_blank" rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 bg-pt-red text-white rounded-full hover:bg-pt-dark-red transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://twitter.com/BetoFaroOficial" target="_blank" rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 bg-pt-red text-white rounded-full hover:bg-pt-dark-red transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="https://youtube.com/c/BetoFaroOficial" target="_blank" rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 bg-pt-red text-white rounded-full hover:bg-pt-dark-red transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                      <a href="https://t.me/BetoFaroOficial" target="_blank" rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 bg-pt-red text-white rounded-full hover:bg-pt-dark-red transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0Zm.016 1.5c5.798 0 10.5 4.7 10.5 10.5 0 5.798-4.702 10.5-10.5 10.5-5.8 0-10.5-4.702-10.5-10.5 0-5.8 4.702-10.5 10.5-10.5Zm-1.563 4.102 3.51.057c1.075.017 2.55.372 3.204.866.706.535.767.91.767 3.296 0 1.7-.102 3.114-.226 3.402-.295.686-.878 1.17-1.743 1.448-.632.204-1.58.237-4.376.146l-3.177-.104v-4.555c0-3.37.017-4.580.042-4.556ZM9.025 8.7v5.522l1.717.056c.945.032 1.895.04 2.11.02.522-.049 1.09-.327 1.318-.643.149-.207.178-.555.178-2.113 0-1.808-.028-2.067-.222-2.36-.211-.318-.544-.465-1.407-.62-.43-.077-1.991-.142-2.798-.115-.208.007-.514.135-.735.329L9.025 8.7Z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-pt-dark mb-2">Outras formas de participar</h4>
                    <a href="#" className="block py-3 px-6 bg-pt-red text-white text-center rounded-full hover:bg-pt-dark-red transition-colors">
                      Seja um voluntário
                    </a>
                    <a href="#" className="block py-3 px-6 bg-green-600 text-white text-center rounded-full hover:bg-green-700 transition-colors">
                      Apoie nossos projetos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Botão fixo do WhatsApp */}
      <WhatsAppButton 
        phoneNumber={phoneNumber}
        message={defaultMessage}
        secondaryText="E receba notícias diárias!"
        fixed={true}
      />
      
      <Footer />
    </main>
  );
}
