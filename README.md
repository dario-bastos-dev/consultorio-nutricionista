# Corpo em Ação

Bem-vindo ao repositório do **Corpo em Ação**, um projeto desenvolvido para facilitar o agendamento de consultas e oferecer informações sobre serviços de saúde de forma prática e intuitiva.

## 📋 Descrição do Projeto

O **Corpo em Ação** é um sistema web que permite aos usuários agendar consultas, conhecer os serviços oferecidos, entrar em contato com especialistas e obter informações sobre o consultório. O objetivo principal é proporcionar uma experiência amigável e eficiente para os pacientes, promovendo saúde e bem-estar.

## 🚀 Funcionalidades

- **Página Inicial**: Apresentação do consultório e seus serviços.
- **Agendamento de Consultas**: Formulário interativo para agendar consultas com profissionais especializados.
- **Sobre Nós**: Informações sobre a história, missão, visão e valores do consultório.
- **Serviços**: Detalhes sobre os serviços oferecidos, como consultas online, exames laboratoriais e fisioterapia.
- **Contato**: Formulário para envio de mensagens e informações de contato, incluindo mapa de localização.
- **Equipe**: Apresentação dos profissionais do consultório.
- **Depoimentos**: Feedback de pacientes sobre os serviços prestados.

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
          - [React](https://reactjs.org/): Biblioteca para construção de interfaces de usuário.
          - [Tailwind CSS](https://tailwindcss.com/): Framework CSS para estilização.
          - [DaisyUI](https://daisyui.com/): Componentes UI baseados em Tailwind CSS.
          - [TanStack Router](https://tanstack.com/router): Gerenciamento de rotas.

- **Build e Configuração**:
          - [Vite](https://vitejs.dev/): Ferramenta de build rápida para projetos modernos.
          - [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript para tipagem estática.
          - [PostCSS](https://postcss.org/): Processador CSS com plugins como Autoprefixer e CSSNano.

- **Qualidade de Código**:
          - [Biome](https://biomejs.dev/): Ferramenta para linting e formatação de código.
          - [Husky](https://typicode.github.io/husky/): Gatilhos para hooks Git.
          - [Lint-Staged](https://github.com/okonet/lint-staged): Linting de arquivos alterados.

- **Containerização**:
          - [Docker](https://www.docker.com/): Para empacotamento e distribuição do projeto.
          - [Nginx](https://www.nginx.com/): Servidor web para hospedar a aplicação.

## 📦 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
src/
├── components/       # Componentes reutilizáveis
├── hooks/            # Hooks personalizados
├── pages/            # Páginas principais
├── routes/           # Configuração de rotas
├── templates/        # Templates de layout (Header, Footer)
├── themes/           # Configurações de estilo (Tailwind CSS)
├── utils/            # Utilitários e validações
```

## 🖥️ Como Executar o Projeto

1. Clone o repositório:
           ```bash
           git clone https://github.com/dario-bastos-dev/consultorio-nutricionista.git
           ```

2. Instale as dependências:
           ```bash
           npm install
           ```

3. Execute o ambiente de desenvolvimento:
           ```bash
           npm run dev
           ```

4. Acesse o projeto no navegador:
           ```
           http://localhost:8080
           ```

## 🐳 Executando com Docker

1. Construa a imagem Docker:
           ```bash
           docker build -t corpo-em-acao .
           ```

2. Execute o container:
           ```bash
           docker run -p 80:80 corpo-em-acao
           ```

3. Acesse o projeto no navegador:
           ```
           http://localhost
           ```

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).

---

Desenvolvido por **Dário Bastos**.  
