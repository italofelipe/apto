
# Desafio da APTO:

 Seja muito bem vindo a minha implementação do desafio para a vaga de Front End Developer da APTO.

## Tecnologias usadas

  Para a execução desse desafio, foram usadas as bibliotecas React, React Router DOM, Axios, Styled Components e Font Awesome. ES Lint e Prettier foram usados no modo de desenvolvimento, para detectar possíveis erros no código, embora algumas regras tenham sido desativadas.
  

### Como executar o projeto:

  Para executar o projeto, basta clonar o repositório, e em seguida, instalar as dependências usando NPM ou YARN. Ambos exigem que voce tenha instalado na sua maquina o Node.js.
  
O comando para instalar as dependências é npm i ou yarn, dentro da pasta do projeto.
Caso nao tenha o Node instalado, segue abaixo o link. Ao instalar o Node, o npm é instalado por padrão.

Node: https://nodejs.org/en/


### Talk to the DEV (Motivação e escolhas)

 Para executar o projeto, primeiro pensei em componentizar cada elemento que poderia ter dados próprios, ainda que esses dados fossem passados via props, e também componentizar elementos que podem disparar funções, como é o caso de botões, inputs e etc.

- Dado o grau de complexidade do projeto, não julguei necessário o uso de Redux, embora eu tenha de fato instalado e o configurado nos primeiros commits. Percebi que o Redux seria uma solução totalmente "overkill" para a implementação desse desafio, seria como "matar um mosquito com um tanque de guerra". Particularmente, prefiro manter a aplicação o mais "enxuta" possível, e usar gerenciadores de estado somente se for necessário, pois lidar com actions e sagas (Redux Saga para side effects) aumenta consideravelmente a complexidade da aplicação, e ao meu ver, seria desnecessário usá-los para uma aplicação tão simples. Context API também poderia ser usado, mas entraria na questão que mencionei de manter a aplicação simples.

- Praticamente todos os elementos visuais da aplicação são feitos em Styled Components, uma ferramenta que possui uma escrita muito semelhante ao SASS, e dá "poderes" de estilização incríveis ao React. Prefiro esta abordagem à criação de classes nos elementos HTML renderizados no React. Styled Components deixa o CSS um pouco mais limpo e através das props, é possível deixar praticamente tudo dinâmico com pouquíssimas linhas, diferente do CSS, que precisariam ser criadas diferentes classes de acordo com eventos, hover e etc. Styled Components facilita muito a vida nesse aspecto, e acredito ser a solução mais inteligente e robusta para o desenvolvimento estilização em React nos dias de hoje.

  
- Para as rotas da aplicação, foi usado React Router DOM, que vem com uma API muito simples de se usar, e extremamente poderosa, sendo possivel transitar dados entre rotas com muita facilidade. As rotas nao foram protegidas, portanto, pode-se facilmente forçar na URL do navegador um PATH e causar um erro. Caso aconteça, basta atualizar a pagina.
