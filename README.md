## Pré instalação do projeto.

O primeiro passo para iniciar o projeto é ter um ambiente de desenvolvimento web previamente instalado na sua máquina, nesse caso estamos falando de um ambiente Javascript (ou Typescript), capaz de baixar aplicações através do gerenciador de pacotes npm e executar comandos npx e ter o Git instalado para ter acesso ao repositório.

## Primeiros passos ⚙️

Primeiramente existe uma ordem de comandos a seguir, não necessariamente pois existem mais de um jeito de baixar dependências e iniciar projetos. Porém o primeiro passo será clonar o repositório para sua máquina local.

Assim iniciando com o comando: Git clone {url do projeto}

```bash


~$ git clone https://github.com/joaopedrosduarte/atom-blog.git


```

Após ter acesso ao repositório na sua máquina, basta entrar na pasta root do projeto e começar a gerenciar as dependências do mesmo através do npm.

```bash


~$ npm install


```

Caso o comando não esteja funcionando normalmente, pode ser que o computador esteja restringindo o acesso à pasta, e seja o caso de dar mais permissão de admin ao comando. Para isso basta adicionar sudo como prefixo do comando.

```bash


~$ sudo npm install


```

Caso tudo esteja certo a aplicação já estará pronta para ser iniciada localmente, porém existem algumas informações que são necessárias para o funcionamento completo da mesma.

#### A aplicação roda na porta 3001 do localhost

Essa informação se dá pelo fato de que, além do CSS feito com muito carinho, preocupação com estrutura de pastas e HTML estruturado e interatividade com Javascript para procurar personalizações chaves, busquei entrar em conceitos que, para mim, dão um toque a mais no projeto, que seria o levantamento de um JSON Server assim permitindo um mock efetivo de dados oriundos de requisições. Feito com as melhores práticas do mercado e utilizando as libs mais conceituadas como React-query e Axios.

Dessa forma, para rodar a aplicação como um todo, basta estar no diretório root, rodar o JSON Server com o comando:

```bash


~$ npx json-server json-server/db.json


```

ou

```bash


~$ sudo npx json-server json-server/db.json


```

Para mais permissão ao comando.

E por fim rodar a aplicação com o script dev ou:

```bash


~$ npm run dev


```

```bash


~$ sudo npm run dev


```

## Sugestões 🤠

Como foi um projeto bastante proveitoso e satisfatório de ser produzido, consegui depositar bastante carinho em alguns componentes. Como por exemplo:

- No componente de pesquisa

Modificar o conteúdo do JSON Server para:

- Não conseguir retornar a requisição (Não rodar funciona)
- Retornar um array vazio
- Botar um tempo de espera na requisição (Ou rodar a aplicação e reparar na parte dos posts antes do banco rodar)

Por fim

- Responsividade do Header
- Responsividade dos últimos 3 posts

## Considerações finais.

Com certeza é um projeto muito gratificante de ser feito. Vai ser liberado às 8 horas da sexta-feira, dia 1 de março. E espero que goste tanto quanto eu gostei de desenvolvê-lo. 😁

Atenciosamente,
João Pedro Duarte de Souza.
