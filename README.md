# Dindin API


A Dindin API é um sistema de controle de gastos pessoais. Desenvolvido como resultado do Desafio do Módulo 3 do curso de Desenvolvimento de Software com foco em Backend da Cubos Academy.

## Principais Recursos

- **Registrar Novo Usuário:** Inscreva-se no sistema para iniciar o controle de suas transações financeiras.
- **Realizar Login:** Efetue o login com segurança para acessar sua conta e visualizar seus dados financeiros.
- **Ver Perfil do Usuário Logado:** Acesse informações detalhadas sobre seu perfil de usuário após efetuar o login.
- **Atualizar Perfil do Usuário Logado:** Mantenha suas informações de perfil atualizadas editando conforme necessário.
- **Explorar Categorias Disponíveis:** Consulte a lista de categorias disponíveis para organizar suas transações.
- **Visualizar Transações:** Tenha uma visão organizada de todas as suas transações financeiras.
- **Detalhes de uma Transação:** Acesse informações específicas sobre uma transação selecionada para uma análise mais aprofundada.
- **Registrar Nova Transação:** Adicione novas transações financeiras, incluindo descrição, valor, data e categoria.
- **Editar Transação Existente:** Faça modificações nas informações de transações já registradas, se necessário.
- **Excluir Transação:** Remova transações que não são mais relevantes para sua gestão financeira.
- **Consultar Extrato de Transações:** Analise seu extrato financeiro, que apresenta um resumo das entradas, saídas e saldo atual.
- **Filtrar Transações por Categoria:** Realize análises mais específicas filtrando suas transações com base em categorias.


## Como Usar

### Instalação

Clone este repositório e instale as dependências do projeto:

```bash
git clone https://github.com/mariofredericocursos/desafio-modulo3-curso-backend-cubos.git
cd dindin-api
npm install
```

## Criação do Bando de Dados

No arquivo dump.sql que está dentro da pasta database contém as queries de criação do banco, das tabelas e de iserção das categorias. 

## Configuração do Banco de Dados

Configure as informações do seu banco de dados no arquivo `.env`.

## Execução

Para iniciar o servidor da API em modo de Desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

## Documentação da API

A Dindin API está disponível em um ambiente de produção. Acesse a documentação da API no <a href="https://mfcastilho.github.io/dindin-api-documentacao/" target="_blank">link</a> .

## Tecnologias e Bibliotecas Utilizadas

- Node.js
- Express.js
- PostgreSQL
- bcryptjs
- express-async-errors
- dotenv
- jwt
- pg
- nodemon

## Desenvolvedores

- Mario Frederico Castilho - Desenvolvedor BackEnd - <a href="https://github.com/mfcastilho" target="_blank">Perfil GitHub</a>
- Mário Silva - Desenvolvedor BackEnd - <a href="https://github.com/mariosilva81" target="_blank">Perfil GitHub</a>

## Demais informações

Este projeto foi desenvolvido como parte do Desafio do Módulo 3 da Cubos Academy. Sinta-se à vontade para explorar, usar e contribuir!

O projeto foi commitado de uma só vez, fora dos padrões, devido ao fato de que o repositório original de onde o desafio foi forkado é privado e de propriedade da Cubos Academy.


