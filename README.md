# Agenda MVC

Aplicação web desenvolvida em Node.js seguindo o padrão MVC (Model-View-Controller), com sistema de autenticação de usuários e gerenciamento de contatos.

## 🔗 Demo ao vivo
http://35.247.203.243

## Funcionalidades

* Cadastro de usuários
* Login e logout
* Controle de sessão
* Cadastro de contatos
* Edição de contatos
* Exclusão de contatos
* Listagem de contatos
* Validação de dados no frontend
* Validação de dados no backend
* Proteção contra CSRF
* Mensagens de feedback utilizando flash messages
* Segurança com Helmet

## Tecnologias Utilizadas

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* Express Session
* Connect Mongo
* Connect Flash
* Helmet
* CSRF

### Frontend

* EJS
* Bootstrap 5
* JavaScript (ES6+)
* Webpack
* Babel

### Infraestrutura
* Google Cloud Platform (GCP)
* Nginx (proxy reverso)
* PM2 (gerenciador de processos)

## Arquitetura

O projeto foi desenvolvido utilizando o padrão MVC:

* **Models:** responsáveis pela comunicação com o banco de dados e regras de negócio.
* **Views:** páginas renderizadas com EJS.
* **Controllers:** responsáveis por receber as requisições e controlar o fluxo da aplicação.

## Objetivos do Projeto

Este projeto foi desenvolvido com foco em aprendizado e prática de conceitos fundamentais do desenvolvimento web backend, incluindo:

* Arquitetura MVC
* Autenticação e autorização
* Persistência de dados com MongoDB
* Segurança em aplicações web
* Organização e modularização de código
* Integração entre frontend e backend
* Deploy em ambiente cloud com Linux

## Como Executar

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com sua string de conexão do MongoDB.
   ex:CONNECTIONSTRING=mongodb+srv://usuario:senha@cluster.mongodb.net/AGENDA

4. Execute a aplicação:

```bash
npm start
```

5. Acesse:

```txt
http://localhost:3000
```

## Autor

Desenvolvido por Jonathan Rosa como projeto de estudo e prática em desenvolvimento web com Node.js e MongoDB.
