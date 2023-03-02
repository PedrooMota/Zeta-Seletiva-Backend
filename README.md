<h1 align="center"> Zeta Tecnologia e Inovação </h1>
<h3 align="center"> Projeto designado para o desafio Back-End do processeo da Zeta. </h3>

# Sumário

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Passo a Passo](#passo-a-passo-para-instalar-e-utilizar-o-repositório)

- [Usando o Insomnia](#usando-o-insomnia)


<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=PROJETO%20FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>

# Descrição do Projeto
Foi desenvolvido um servidor responsável em possuir a lógica de negócios e por cadastrar usuários no banco de dados, assegurando as devidas restrições de acesso, segurança e performance da aplicação, utilizando API REST e Login JWT.

A Zeta é uma empresa de Tecnologia e Inovação que desenvolve um sistema embarcado inteligente e inovador, para gestão de operação e manutenção preventiva e preditiva de compressores de ar que funcionará com integração e serviços em nuvem e inteligência artificial.

<h1 align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://user-images.githubusercontent.com/15229355/58760902-6cb86080-853e-11e9-91e2-afb66f77e8cb.png" />
</h1>


# Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realizar cadastro dos usuários.

:heavy_check_mark: `Funcionalidade 2:` Realizar o login e automaticamente receber um token.

:heavy_check_mark: `Funcionalidade 3:` Poder deletar o cadastro a partir de um token.

:heavy_check_mark: `Funcionalidade 4:` Poder alterar os dados cadastrados com um token.

:heavy_check_mark: `Funcionalidade 5:` Poder listar todos os cadastros.

:heavy_check_mark: `Resumindo:` Foi realizado uma CRUD.

###

## Ferramentas utilizadas

- [VsCode](https://code.visualstudio.com/) - Ferramenta utilizada para a aplicação.
- [Node](https://pt-br.reactjs.org/) - Biblioteca utilizada para a criação da interface e suas propriedades.
- [TypeScript](https://www.typescriptlang.org/) - Uma linguagem de código aberta que foi utilizada e suas propriedades.
- [Typeorm](https://typeorm.io/) -Técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional.
- [Docker](https://www.docker.com/) -  Forma de virtualizar aplicações no conceito de “containers”, trazendo da web ou de seu repositório interno uma imagem completa, incluindo todas as dependências necessárias para executar sua aplicação.
- [Insomnia](https://insomnia.rest/download) - Framework Open Source para desenvolvimento/teste de API Clients.

<a href="https://www.java.com" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="typescript" width="60" height="60"/> </a> <a href="https://developer.android.com/studio" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="androidStudio" width="50" height="50"/></a> <a target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="firebase" width="50" height="50"/></a> <a target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="firebase" width="50" height="50"/> </a>


###

# Passo a Passo para instalar e utilizar o repositório

#### **Instale a ferramenta Vscode** <br> **<a target="_blank" href="https://code.visualstudio.com/">Vscode</a>**
#### **Instale o Node para executarmos o NPM** <br> **<a target="_blank" href="https://opensource.com/article/20/1/react-javascript-frameworks">Node</a>** 
#### **Instale o Docker para conseguir utilizar o projeto na máquina.** <br> **<a target="_blank" href="https://www.docker.com/">Docker</a>**
#### **Instale o Insomnia para conseguir realizar os testes da API.** <br> **<a target="_blank" href="https://insomnia.rest/download">Insomnia</a>**

##

#### Abra o Docker Desktop e o mantenha ligado.
#### Com o Vscode aberto, crie um terminal.

#### Clone este repositório na sua pasta:

```sh
git clone https://github.com/PedrooMota/Zeta-Seletiva-Backend
```
<hr>

#### Depois de clonado, acesse a pasta que foi criada:

```sh
cd Zeta-Seletiva-Backend
```

#### Depois de clonado, você deverá executar o comando do **docker-compose** para instalarmos todas as dependências e criarmos as images e containers:

```sh
docker-compose up -d
```
#### Agora ao verificar o seu Docker, você se depará as Images e os Containers.
<hr>

#### Este repositório possui uma pasta chamada **migrations**, onde possui dados salvos para a criação do banco (gerado pelo **typeorm**). Você deverá acessar o container **node** para executar o **migration:run** (ele vai criar a tabela utilizada conforme o Typeorm criou). Execute nesta ordem:

```sh
docker exec -ti node sh
```
```sh
npm run migration:run
```
### Depois de executado, use o <b>CTRL + D</b> para sair do "container" e retornar a sua pasta.
<hr>

# Usando o insomnia

- Abra o insomnia
  - [x] Clique em **Create** no canto superior direito
  - [x] Clique na opção **Design Document**
  - [x] Coloque o nome de sua preferência e confirma
  - [x] Clique na opção **Debug** no meio superior da tela
  - [x] Clique na **setinha** do lado do nome e do lado de **Design**
  - [x] Vá ate **import/export**
  - [x] Selecione **import data** e clique em **from file**
  - [x] Escolha o arquivo .har que está na pasta do repositório
  - [x] Clique em "Ok", pronto você importou tudo que e preciso para fazer as requisições para a API

## Rotas para uso da API

- Na API desenvolvida foram utilizados os seguintes métodos HTTP:
  - `GET`
    -  http://localhost:3000/profile - exibe todos os usuários cadastrados
  - `POST`
    - http://localhost:3000/user - realiza o cadastro do usuário (obrigátorio o envio de um JSON no body com as informações: `nome`, `email` e `senha`
    - http://localhost:3000/login - Realiza o login e faz a criação do token para utilizar nas rotas de `update` e `delete` (obrigátorio o envio de um JSON no body com o `email` e a `senha` do usuário)
  - `PUT`
    - http://localhost:3000/user/< id do Usuário > - realiza a alteração do usuário (obrigátorio o envio de um JSON no body com os campo que deseja alterar e o bearer token de autenticação no header)
  - `DEL`
    - http://localhost:3000/user/< id do Usuário > : faz a exclusão (obrigátorio o envio do bearer token de autenticação no header)

- Como colocar o Bearer Token:
  - Vá na aba "Headers" nas rotas put e delete vai possuir um campo chamado "Authorization" e do lado está o seu token, quando criar um novo token você vai apagar tudo que vem depois da palavra "Bearer" e colocar o token
  
## :white_check_mark: A API está pronta para ser usada!

# Autor

| [<img src="https://user-images.githubusercontent.com/83295376/222512397-67011e82-9133-4b39-bb09-dccd5d394baf.png" width=115><br><sub>Pedro Henrique Mota</sub>](https://github.com/camilafernanda) | 
| :---: | 

<hr>



