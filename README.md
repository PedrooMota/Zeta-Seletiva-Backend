<h1 align="center"> Zeta Tecnologia e Inovação </h1>
<h3 align="center"> Projeto designado para o desafio Back-End do processo da Zeta. </h3>

# Sumário

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Passo a Passo](#passo-a-passo-para-instalar-e-utilizar-o-repositório)

- [Usando o Insomnia](#usando-o-insomnia)

- [Rotas para uso da API](#rotas-para-uso-da-api)


<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=PROJETO%20FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>

# Descrição do Projeto
Foi desenvolvido uma aplicação hospedada em um servidor responsável em executar a lógica de negócios e por cadastrar usuários no banco de dados, assegurando as devidas restrições de acesso, segurança e performance da aplicação, utilizando API REST e Login JWT.

A Zeta é uma empresa de Tecnologia e Inovação que desenvolve um sistema embarcado inteligente e inovador, para gestão de operação e manutenção preventiva e preditiva de compressores de ar que funcionará com integração e serviços em nuvem e inteligência artificial.

<p align="center">
  <img src="https://user-images.githubusercontent.com/15229355/58760902-6cb86080-853e-11e9-91e2-afb66f77e8cb.png" />
</p>


# Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realizar cadastro dos usuários.

:heavy_check_mark: `Funcionalidade 2:` Realizar o login e automaticamente receber um token.

:heavy_check_mark: `Funcionalidade 3:` Poder deletar o cadastro de forma autenticada.

:heavy_check_mark: `Funcionalidade 4:` Poder alterar os dados cadastrados de forma autenticada.

:heavy_check_mark: `Funcionalidade 5:` Poder listar todos os cadastros.

:heavy_check_mark: `Resumindo:` Foi realizado uma CRUD.

###

## Ferramentas utilizadas

- [VsCode](https://code.visualstudio.com/) - IDE - Integrated Development Environment ou Editor de Código.
- [Node](https://pt-br.reactjs.org/) - Software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
- [Typeorm](https://typeorm.io/) -Técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional.
- [Docker](https://www.docker.com/) -  Forma de virtualizar aplicações no conceito de “containers”, trazendo da web ou de seu repositório interno uma imagem completa, incluindo todas as dependências necessárias para executar sua aplicação.
- [Insomnia](https://insomnia.rest/download) - Framework Open Source para desenvolvimento/teste de API Clients.

<a href="https://www.java.com" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="typescript" width="60" height="60"/> </a> <a href="https://developer.android.com/studio" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="androidStudio" width="50" height="50"/></a> <a target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="firebase" width="50" height="50"/></a> <a target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="firebase" width="50" height="50"/> </a>

### **Eu utilizei o terminal do Vscode para executar as instalações, mas você pode utilizar o próprio terminal do Windows.** <br><br> Para acessar o terminal, use: Windows + R e apertar no "Ok" ou pressionar ENTER.

###

# Passo a Passo para instalar e utilizar o repositório

#### **Instale o Node para executarmos o NPM** <br> **<a target="_blank" href="https://opensource.com/article/20/1/react-javascript-frameworks">Node</a>** 
#### **Instale o Docker para conseguir utilizar o projeto na máquina.** <br> **<a target="_blank" href="https://www.docker.com/">Docker</a>**
#### **Instale o Insomnia para conseguir realizar os testes da API.** <br> **<a target="_blank" href="https://insomnia.rest/download">Insomnia</a>**

##

### Abra o Docker Desktop e o mantenha ligado.
### Com o terminal aberto, siga os próximos passos:

#### Crie uma pasta para alocarmos nosso projeto 
O nome vai da sua preferência. Neste caso, estamos criando uma pasta chamada "myapp".

```sh
mkdir myapp
```
<hr>

#### Em seguida, iremos entrar na pasta para podermos executar nossos comandos.

```sh
cd myapp
```

### Não é necessário utilizar o Vscode! 
Caso queira continuar o passo a passo dentro do Vscode, utilize este comando para abrirmos o Vscode conectado a pasta criada (NÃO É OBRIGATÓRIO)

```sh

code .

```
<hr>

### Clone este repositório na sua pasta
#### Ao utilizarmos este comando, o repositório inteiro vai para a sua pasta criada.

```sh

git clone https://github.com/PedrooMota/Zeta-Seletiva-

```
<hr>

#### Depois de clonado, acesse a pasta que foi criada para podermos realizar as instalações.

```sh

cd Zeta-Seletiva-Backend

```

#### Agora, você deverá executar o comando do **docker-compose** para instalarmos todas as dependências e criarmos as Images e Containers.
Não se esqueça de estar com o Docker Desktop aberto ( caso contrário, o comando irá dar erro )

```sh

docker-compose up -d

```

#### Depois de executado, você pode verificar o seu docker pois os Containers e as Images foram instaladas. 
<hr>

## TypeORM

#### Com a utilização do TypeORM, conseguimos manipular objetos de Banco de Dados (DML, DDL), sem necessidade de termos que utilizar a estrutura padrão de linguagem SQL. No repositório, existe uma pasta chamada "migrations" onde está alocado toda a estrutura criada para esta aplicação. Ao executar os comandos na ordem abaixo, você entrará no Container "node" e vai rodar a migration já criada, inserindo no Banco de dados a estrutura que estava criada.

```sh

docker exec -ti node sh

```

```sh

npm run migration:run

```

### Depois de executado, use o <b>CTRL + D</b> para sair do "Container" e retornar a sua pasta.
Pronto, o projeto já está na sua máquina e pronto para funcionar!
<hr>

# Usando o insomnia
Utilizaremos agora o Insomnia para realizarmos os testes da API.

- Abra o insomnia
  - [x] Clique em **Create** no canto superior direito
  - [x] Clique na opção **Design Document**
  - [x] Coloque o nome de sua preferência e confirma
  - [x] Clique na opção **Debug** no meio superior da tela
  - [x] Clique na **setinha** entre o nome e o **Design**
  - [x] Vá ate **import/export**
  - [x] Selecione **import data** e clique em **from file**
  - [x] Escolha o arquivo .har que está na pasta do repositório
  - [x] Clique em "Ok", pronto você importou tudo que e preciso para fazer as requisições para a API
  
## As respectivas Rotas dentro do Insomnia
  - `POST`
  
   <p align="center">
      <img src="https://user-images.githubusercontent.com/83295376/222599939-fbf5f357-2513-4413-b0dc-28230117b5a4.png"/>
   </p><br>
   
  - `POST`
  
   <p align="center">
      <img src="https://user-images.githubusercontent.com/83295376/222600374-72f6652a-3176-434b-a973-ca7d305b17ff.png"/>
   </p>
   
   - `GET`
  
   <p align="center">
      <img src="https://user-images.githubusercontent.com/83295376/222600748-94cae9f0-5e34-43d5-af3b-abb6aba96073.png"/>
   </p>
  

   
   - `PUT`
  
   <p align="center">
      <img src="https://user-images.githubusercontent.com/83295376/222601219-315ea204-7111-4b95-b57c-7ebf47bdba7d.png"/>
   </p>
   
   - `DEL`
  
   <p align="center">
      <img src="https://user-images.githubusercontent.com/83295376/222601340-ae4073a1-f9a6-444a-847f-0f195c5aae93.png"/>
   </p>
   
 ##
   
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
  - Vá na aba do lado direito de Multipart e procure o "Bearer token". Nas rotas PUT e DEL você vai inserir o seu token no campo "Token" para ser validado a rota. O token do usuário será gerado quando ele realizar o Login ( sempre bom guardar o token ).
  
## :white_check_mark: A API está pronta para ser usada!

# Autor

| [<img src="https://user-images.githubusercontent.com/83295376/222590779-a5a2a44d-049a-4e81-9aec-709a5e7e8459.png" width=115><br><sub>Pedro Henrique Mota</sub>](https://www.linkedin.com/in/pedro-mota-294521232/) | 
| :---: | 

<hr>



