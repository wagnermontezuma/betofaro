'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image com overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Beto Faro no Senado Federal"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-pt-red">Beto Faro</span>: <br />
              Compromisso com o povo do Pará e do Brasil
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Trabalhando incansavelmente por políticas públicas que promovam o desenvolvimento sustentável, 
            a justiça social e a preservação da Amazônia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/#projetos"
              className="bg-pt-red hover:bg-pt-dark-red text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 text-center"
            >
              Conheça meus projetos
            </Link>
            <Link 
              href="/#contato"
              className="bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full border-2 border-white transition-colors duration-300 text-center"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </div>

      {/* Seta para rolagem */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Link 
          href="/#biografia"
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
        </Link>
      </div>
    </section>
  );
} 