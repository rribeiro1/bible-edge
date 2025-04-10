# API Bíblia NVI [![Run Unit Tests](https://github.com/rribeiro1/bible-edge/actions/workflows/run-unit-tests.yaml/badge.svg)](https://github.com/rribeiro1/bible-edge/actions/workflows/run-unit-tests.yaml) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/bcb19443d0444cba82d03ca16b11bf1d)](https://app.codacy.com/gh/rribeiro1/bible-edge/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

<p align="center">
  <img src=".github/assets/icon.png" width="80" alt="accessibility text">
</p>

A **API Bíblia NVI** é um projeto desenvolvido para fornecer acesso programático às passagens da Bíblia Sagrada na versão Nova Versão Internacional (NVI). Este projeto foi criado com o objetivo de estudar e aplicar conceitos modernos de desenvolvimento de APIs utilizando tecnologias como Node.js, Fastify, Prisma e TypeScript.

### Objetivo

A API é ideal para aplicações frontend que exibem passagens bíblicas, como sistemas para igrejas. Além disso, ela oferece endpoints organizados para facilitar a consulta de livros, capítulos e versículos, além de endpoints para navegação entre os versículos.

> [!Tip]
> O frontend deste projeto [bible-vue](https://github.com/rribeiro1/bible-vue) foi desenvolvido com VueJs.

### Rotas

> - **`GET` /books** Obtém a lista de livros disponíveis.
> - **`GET` /books/{:bookId}/chapters** Obtém a lista de capítulos disponíveis de um livro.
> - **`GET` /books/{:bookId}/chapters/{:chapterId}/verses** Obtém a lista de versículos de um livro e capítulo.
> - **`GET` /verses/:id** Obtém uma passagem pelo ID.
> - **`GET` /verses/:id/next** Obtém a próxima passagem pelo ID.
> - **`GET` /verses/:id/previous** Obtém a passagem anterior pelo ID.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/download) versão 18 ou superior
- [Docker](https://www.docker.com/products/docker-desktop/) Docker

### Começando

1. Faça o clone do repositório e no terminal navegue até a pasta;

``` bash
git clone git@github.com:rribeiro1/bible-edge.git
```

2. Instale as dependências do projeto;

``` bash
npm i
```

3. Faça uma cópia do **.env.example** com o nome **.env** e adicione as informações de conexão com o banco de dados Postgres.

``` bash
cp .env.example .env
```

4. Suba o banco de dados com docker compose.

``` bash
docker compose up
```

5. Migre o schema do banco de dados

``` bash
npm run database:migrate
```

6. Import o script de inserção dos dados da Bíblia

> [!Tip]
> Na pasta **seed** se encontra o arquivo: **data.sql**. Utilize-os para inserção de dados

``` bash
npm run database:seed
```

> [!Note]
> O comando pode ser um pouco diferente em outros sistemas como Windows.

7. Rode o servidor de desenvolvimento

``` bash
npm run dev
```

8. Rode os testes

Utilize um dos métodos abaixo para rodar os tests unitários

``` bash
npm run test
npm run test:ui
npm run test:coverage
```

9. O servidor com os *endpoints* do serviço estará disponível em http://localhost:3000

### Sugestão

Utilize o Postman para testar suas chamadas. [https://www.getpostman.com/](https://www.getpostman.com/).

### Tecnologias

- **Postgres:** Banco de dados relacional utilizado para armazenar os dados da Bíblia.
- **Node.js:** Plataforma para desenvolvimento de aplicações em JavaScript no lado do servidor.
- **Fastify:** Miro-framework web para construção de APIs.
- **Prisma:** ORM (Object-Relational Mapping) moderno para interagir com o banco de dados de forma simples e tipada.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e a produtividade no desenvolvimento.