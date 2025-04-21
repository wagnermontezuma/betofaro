# Landing Page - Senador Beto Faro (PT-PA)

[![CI/CD Pipeline](https://github.com/wagnermontezuma/betofaro/actions/workflows/main.yml/badge.svg)](https://github.com/wagnermontezuma/betofaro/actions/workflows/main.yml)

Landing page moderna, responsiva e otimizada para o Senador Beto Faro (PT-PA), representante do estado do Pará no Senado Federal.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Next.js 14](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animações
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones populares para React
- [GSAP](https://greensock.com/gsap/) - Biblioteca para animações avançadas

## 📋 Estrutura do Projeto

```
.
├── .github/
│   └── workflows/   # Configurações de CI/CD
├── public/
│   └── images/      # Imagens e recursos estáticos
├── src/
│   ├── app/         # Diretórios de rotas da aplicação
│   ├── components/  # Componentes reutilizáveis
│   │   ├── layout/  # Componentes de layout (Header, Footer)
│   │   ├── sections/# Seções da landing page
│   │   └── ui/      # Componentes de UI reutilizáveis
│   └── lib/         # Utilitários e funções auxiliares
└── ...              # Arquivos de configuração
```

## 🔧 Funcionalidades

- **Design Moderno e Responsivo**: Layout adaptável a todos os dispositivos
- **Otimização para SEO**: Meta tags, URLs amigáveis e estrutura semântica
- **Acessibilidade (WCAG 2.2)**: Conformidade com padrões de acessibilidade
- **Animações Suaves**: Transições e animações para melhor experiência do usuário
- **Formulário de Contato**: Sistema integrado para envio de mensagens
- **Desempenho Otimizado**: Core Web Vitals abaixo do recomendado (LCP < 2,5s, CLS < 0.1)

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/wagnermontezuma/betofaro.git
   cd betofaro
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Produção

Para gerar uma build de produção:

```bash
npm run build
```

Para iniciar o servidor em modo de produção:

```bash
npm start
```

## 🔒 Pipeline CI/CD e Segurança

Este projeto utiliza GitHub Actions para implementar um pipeline robusto de CI/CD com:

- **Análise Estática de Segurança (SAST)**: Utilizando CodeQL
- **Análise de Dependências**: Verificação com Snyk
- **Testes Automatizados**: Integração e testes unitários
- **Análise Dinâmica (DAST)**: Verificação com OWASP ZAP
- **Deploy Automatizado**: Configurado para implantação automática
- **Notificações**: Alertas em caso de falhas ou sucesso no deploy

## 🤝 Contribuindo

Para contribuir com este projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Crie um novo Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Para mais informações, entre em contato com:

- **Email**: contato@betofaro.com.br
- **Website**: [www.betofaro.com.br](https://www.betofaro.com.br)

---

Desenvolvido com ❤️ pela Equipe de Desenvolvimento
