# API Bíblia versão NVI [![Build Status](https://travis-ci.org/rribeiro1/bible-edge.svg?branch=master)](https://travis-ci.org/rribeiro1/bible-edge)

<p align="center">
  <img src="https://github.com/rribeiro1/bible-edge/blob/master/resources/images/icon.png" width="80" alt="accessibility text">
</p>

> Este projeto foi desenvolvido como objeto de estudos do desenvolvimento de API's utilizando NodeJs, ORM, and Fastify.

### Objetivo

API responsável por obter as passagens da Bíblia

> O frontend deste projeto [bible-vue](https://github.com/rribeiro1/bible-vue) foi desenvolvido com VueJs.

### Rotas

> - **`GET` /books** Obtém a lista de livros disponíveis
> - **`GET` /books/{:bookId}/chapters** Obtém a lista de capítulos disponíveis de um livro
> - **`GET` /books/{:bookId}/chapters/{:chapterId}/verses** Obtém a lista de versículos de um livro e capítulo
> - **`GET` /books/{:bookId}/chapters/{:chapterId}/verses/{:verseId}** Obtém um versículo
> - **`GET` /verses/:id** Obtém uma passagem pelo ID
> - **`GET` /verses/:id/next** Obtém a pŕoxima passagem pelo ID
> - **`GET` /verses/:id/previous** Obtém a passagem anterior pelo ID

### Pré-requisitos

- **Node.js** versão 8 ou superior;
- **Nodemon** - `npm i -g nodemon`
- **pm2** - `npm i -g pm2` para produção

### Começando

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto com `npm install`;
3. Faça uma cópia do **.env.example** com o nome **.env** e adicione as informações de conexão com seu banco de dados MySQL (produção e teste).
4. Na pasta **sql** se encontra o arquivo: **nvi.sql**. Utilize-os para criar o banco de dados, tabelas e inserção de dados;
5. Rode o servidor de desenvolvimento com `npm run dev` ou modo produção com `npm run production`;
6. Rode os testes com `npm test`. Para observar os arquivos durante o desenvolvimento utilize `npm test -- --watch`;
7. O *endpoint* do serviço estará disponível em http://localhost:3003 .

### Rodando com Docker

- Criar a imagem
> docker build -t bible-edge:latest

- Criar Container
> docker run -p 8080:8080 -d -t bible-edge:latest

- Iniciar bash a partir do Container
> docker exec -it <container id> /bin/bash

### Sugestão

Utilize o Postman para testar suas chamadas. [https://www.getpostman.com/](https://www.getpostman.com/).

### Tecnologias

- **MySQL:** Banco de dados relacional;
- **NodeJs** Framework desenvolvimento Javascript.
