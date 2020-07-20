# Site Multi Page

Visualize o site [através deste link](https://site-multi-page.herokuapp.com/).

## Páginas

A aplicação é dividida nas seguintes páginas:

- **About:** Página quem somos, apresenta a missão, visão, valores, e os membros da emrpesa.
- **Contact:** Esta página contém um formulário de envio de e-mails para contactar a empresa.
- **Home:** A página inicial é uma página simples com alguns dados a respeito da empresa, como uma breve apresentação dos seus serviços.
- **Portifolio:** Esta é a página que lista todos projetos realizados pela empresa.
- **Services:** Apresenta detalhadamente os serviçoes prestados pela empresa.

## Estrutura de Pastas

Os arquivos da aplicação estão na pasta `src`. Nela, temos os arquivos `index.tsx`, que renderiza o componente principal `App.tsx` na aplicação, este sendo o componente que configura a aplicação como um todo.
As pastas projeto estão organizadas da seguinte forma:

### Assets

Pasta com recursos extras, como imagens usadas na aplicação.

### Pages

Nesta pasta estão os componentes que representam as páginas da aplicação.

### Components

Nesta pasta estão os diversos componentes utilizados na aplicação. Alguns componentes, por serem únicos de uma certa página, estão localizados dentro de uma pasta com o mesmo nome da página.

### Routes

Pasta com os componentes que renderizam as rotas da aplicação, dependendo do estado de autenticação do usuário.

### Styles

Pasta onde os estilos gerais da aplicação são definidos.

### Utils

Nesta pasta estão alguns scripts úteis, com funções diferenciadas usadas na aplicação.

## Bibliotecas Utilizadas

- **Bootstrap:** Framework CSS para agilizar a estilização das páginas através de classes com funções pré-definidas.
- **EmailJS:** Biblioteca que permite o envio de email diretamente do cliente da aplicação.
- **React Helmet:** Biblioteca que permite a fácil manipulação do header da página.
- **React Icons:** Biblioteca com componentes React que reúne diversas bibliotecas de ícones conhecidas, como Feather Icons, Font Awesome, Material Icons e etc.
- **React Loading:** Biblioteca que fornece um componente simples que renderiza uma imagem de carregamento de informações.
- **React Multi Carousel:** Esta biblioteca exporta um componente que renderiza um carrosel com múltiplos itens mostrados ao mesmo tempo. Ótima biblioteca, bem customizável e escalável.
- **React Router Dom:** Biblioteca para roteamento de páginas SPA com React.
- **Styled Components:** Ferramenta que possibilita criar components React já estilizados, e manipular propriedades e funções JavaScript diretamente na folha de estilos.
