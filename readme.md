<h1 align="center">
  AngolaLocalities
</h1>

Restful API para apresentar todas as localidades de angola , deste províncias, municípios, distritos/comunas, bairros e etc.

<h4 align="center"> 
	🚧  Angola Localities 🚀 Em construção...  🚧
</h4>

## :construction_worker: Executando a API

Você precisará do [Node.js](https://nodejs.org), e [Yarn](https://yarnpkg.com/) instalado na sua máquina para rodar este projeto.

Depois de instalar, execute os seguintes comandos no seu terminal:

Att.: Calma aí, antes de rodar o projeto, por favor apague o arquivo `src/database/data/db.sqlite`
Agora sim, vamos lá...

```bash
$ git clone https://github.com/jmamadeu/angolalocalities.git # Clonar o repositório
$ cd angolalocalities # Acessar a pasta do projeto
$ yarn # Instalar todas as dependências

$ yarn dev:server # Iniciar o servidor de desenvolvimento
$ yarn dev:populate # Popular o banco de dados
```

## :tada: Contribuição

Faça `fork` deste repositório, desenvolva a sua feature e depois cria uma `Pull Request`.

Att.: Precisamos terminar de adicionar os municípios e distritos às províncias, vá até ao arquivo que está em `src/database/data/data.json` e adiciona algum município ou qualquer dado em falta, depois faça um `Pull Request` para as tuas alterações serem adicionadas neste repositório.
