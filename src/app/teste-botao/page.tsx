'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function TesteBotao() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Teste de Botões</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Variantes de Botão</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Botão Primário</Button>
            <Button variant="secondary">Botão Secundário</Button>
            <Button variant="outline">Botão Outline</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Botões com Link</h2>
          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="primary">Link para Home</Button>
            <Button href="/about" variant="secondary">Link para Sobre</Button>
            <Button href="https://example.com" variant="outline">Link Externo</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Botões com Eventos</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              onClick={() => alert('Botão primário clicado!')}
            >
              Clique-me (Primário)
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => alert('Botão secundário clicado!')}
            >
              Clique-me (Secundário)
            </Button>
            <Button 
              variant="outline" 
              onClick={() => alert('Botão outline clicado!')}
            >
              Clique-me (Outline)
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Botões com Classes Personalizadas</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              className="uppercase tracking-wider"
            >
              Texto Espaçado
            </Button>
            <Button 
              variant="secondary" 
              className="rounded-none"
            >
              Sem Bordas Arredondadas
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4"
            >
              Botão Maior
            </Button>
          </div>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
} 