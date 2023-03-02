<h1 align="center"> Zeta Tecnologia e Inovação </h1>
<h3 align="center"> Projeto designado para o desafio Front-End do processeo da Zeta. </h3>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Passo a Passo](#passo-a-passo)


<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=PROJETO%20FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>

## Descrição do Projeto
Foi desenvolvido um servidor responsável em possuir a lógica de negócios e por cadastrar usuários no banco de dados, assegurando as devidas restrições de acesso, segurança e performance da aplicação, utilizando API REST e Login JWT.

A Zeta é uma empresa de Tecnologia e Inovação que desenvolve um sistema embarcado inteligente e inovador, para gestão de operação e manutenção preventiva e preditiva de compressores de ar que funcionará com integração e serviços em nuvem e inteligência artificial.
<p align="center">
<img src="https://user-images.githubusercontent.com/83295376/221979524-fa4ca3a5-069b-4fc2-89d9-698d9c04a015.png"/>
</p>


## Funcionalidades

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
- [Docker](https://typeorm.io/) 

<a href="https://www.java.com" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="typescript" width="60" height="60"/> </a> <br>
<a href="https://developer.android.com/studio" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="androidStudio" width="50" height="50"/></a> <br>
<a  target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="firebase" width="50" height="50"/> </a>

###

# Passo a Passo

#### **Instale a ferramenta Vscode, o Node para executarmos o NPM e o Docker para conseguirmos utilizar o projeto na máquina.**  <br>**<a target="_blank" href="https://code.visualstudio.com/">Vscode</a>**  **<a target="_blank" href="https://opensource.com/article/20/1/react-javascript-frameworks">Node</a>** **<a target="_blank" href="https://www.docker.com/">Docker</a>**

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
#### Agora você pode verificar o seu Docker, onde vai ter criado as Images e os Containers.
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


Depois de rodar o projeto, basta abrir a ferramenta <a href="">Insomnia</a> para realizar os testes.

