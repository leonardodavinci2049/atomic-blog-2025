# Atomic Blog

## Descrição do Projeto
Atomic Blog é uma aplicação web moderna desenvolvida com React 19 e Tailwind CSS 4. Este projeto demonstra uma arquitetura escalável usando princípios de design atômico para componentes de interface do usuário.

## Tecnologias Utilizadas
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint
- Prettier

## Requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

## Instalação

Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd atomic-blog
```

Instale as dependências:
```bash
npm install
# ou
yarn
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

### `npm run build`

Compila o TypeScript e constrói o aplicativo para produção na pasta `dist`.

### `npm run lint`

Executa a verificação de linting em todo o código.

### `npm run preview`

Serve os arquivos de build localmente para pré-visualização.

## Estrutura do Projeto
```
atomic-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
└── ...
```

## Padrões de Código
Este projeto segue os padrões de código definidos pelo ESLint e Prettier configurados.

## Contribuição
1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para detalhes.