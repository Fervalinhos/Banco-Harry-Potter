# API de Gerenciamento de Personagens e Varinhas de Harry Potter

Esta é uma API simples para gerenciar personagens e varinhas do universo de Harry Potter.

## Requisitos

- Node.js
- PostgreSQL
- Bibliotecas: express, pg

## Configuração do Banco de Dados

Certifique-se de ter um banco de dados PostgreSQL configurado. Os detalhes de conexão devem ser atualizados em `app.js`.

## Instalação

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o servidor com `node app.js`.

## Endpoints

### Personagens

#### Listar todos os personagens

- **URL**: `/wizard`
- **Método**: GET
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Lista de personagens em JSON

#### Buscar um personagem por ID

- **URL**: `/wizard/:id`
- **Método**: GET
- **Parâmetros de URL**: `id` (ID do personagem)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Detalhes do personagem em JSON

#### Buscar um personagem por nome

- **URL**: `/wizard/name/:name`
- **Método**: GET
- **Parâmetros de URL**: `name` (nome do personagem)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Detalhes do personagem em JSON

#### Criar um novo personagem

- **URL**: `/wizard`
- **Método**: POST
- **Corpo da Requisição**: JSON com os campos `name`, `age`, `house`, `habilities`, `blood_status`, `patronus`
- **Resposta de Sucesso**:
  - Código: 201
  - Conteúdo: Mensagem de sucesso em JSON

#### Atualizar um personagem existente

- **URL**: `/wizard/:id`
- **Método**: PUT
- **Parâmetros de URL**: `id` (ID do personagem)
- **Corpo da Requisição**: JSON com os campos a serem atualizados
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Mensagem de sucesso em JSON

#### Deletar um personagem

- **URL**: `/wizard/:id`
- **Método**: DELETE
- **Parâmetros de URL**: `id` (ID do personagem)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Mensagem de sucesso em JSON

### Varinhas

#### Listar todas as varinhas

- **URL**: `/wand`
- **Método**: GET
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Lista de varinhas em JSON

#### Buscar uma varinha por ID

- **URL**: `/wand/:id`
- **Método**: GET
- **Parâmetros de URL**: `id` (ID da varinha)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Detalhes da varinha em JSON

#### Buscar varinhas por tipo de madeira

- **URL**: `/wand/wood/:wood`
- **Método**: GET
- **Parâmetros de URL**: `wood` (tipo de madeira da varinha)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Lista de varinhas em JSON

#### Buscar varinhas por núcleo

- **URL**: `/wand/core/:core`
- **Método**: GET
- **Parâmetros de URL**: `core` (núcleo da varinha)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Lista de varinhas em JSON

#### Criar uma nova varinha

- **URL**: `/wand`
- **Método**: POST
- **Corpo da Requisição**: JSON com os campos `wood`, `core`, `length`
- **Resposta de Sucesso**:
  - Código: 201
  - Conteúdo: Mensagem de sucesso em JSON

#### Atualizar uma varinha existente

- **URL**: `/wand/:id`
- **Método**: PUT
- **Parâmetros de URL**: `id` (ID da varinha)
- **Corpo da Requisição**: JSON com os campos a serem atualizados
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Mensagem de sucesso em JSON

#### Deletar uma varinha

- **URL**: `/wand/:id`
- **Método**: DELETE
- **Parâmetros de URL**: `id` (ID da varinha)
- **Resposta de Sucesso**:
  - Código: 200
  - Conteúdo: Mensagem de sucesso em JSON

