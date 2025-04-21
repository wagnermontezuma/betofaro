'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  // Versão simplificada sem hooks por enquanto
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative h-14 w-48">
          <a href="/">
            <img 
              src="/images/logo-beto-faro.svg" 
              alt="Logo Senador Beto Faro"
              className="h-full w-full object-contain"
            />
          </a>
        </div>

        {/* Menu de navegação - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/#biografia" 
            className="text-pt-dark hover:text-pt-red transition-colors font-medium"
          >
            Biografia
          </a>
          <a 
            href="/#projetos" 
            className="text-pt-dark hover:text-pt-red transition-colors font-medium"
          >
            Projetos
          </a>
          <a 
            href="/#noticias" 
            className="text-pt-dark hover:text-pt-red transition-colors font-medium"
          >
            Notícias
          </a>
          <a 
            href="/#contato" 
            className="bg-pt-red hover:bg-pt-dark-red text-white px-5 py-2 rounded-full transition-colors font-medium"
          >
            Contato
          </a>
        </nav>

        {/* Botão do menu mobile - simplificado */}
        <button 
          className="md:hidden text-pt-dark text-2xl"
          aria-label="Abrir menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 