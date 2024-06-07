# Portal de Notícias

Este é um portal de notícias construído com React e Vite. O objetivo deste projeto é fornecer uma interface amigável e responsiva para que os usuários possam ler as últimas notícias de diversas categorias.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para desenvolvimento web.
- **styled-components**: Biblioteca para estilização de componentes no React.
- **react-icons**: Biblioteca para inclusão de ícones no React.
- **react-router-dom**: Biblioteca para roteamento no React.
- **NewsAPI**: API usada para buscar notícias.

## Funcionalidades

- **Categorias de Notícias**: Os usuários podem navegar entre diferentes categorias de notícias, como Tecnologia, Esportes, Negócios, Saúde, Entretenimento e Moda.
- **Pesquisa de Notícias**: Os usuários podem buscar notícias específicas usando uma barra de pesquisa.
- **Paginação**: As notícias são paginadas para melhorar a navegação.
- **Breadcrumbs**: Navegação melhorada com breadcrumbs que mostram a localização atual do usuário.
- **Acessibilidade**: Descrições alternativas significativas para imagens e melhorias gerais de acessibilidade.

## Como Rodar o Projeto

1. Clone o repositório:

   ```sh
   git clone https://github.com/O-Farias/News-Portal.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd portal
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Adicione sua chave da NewsAPI no arquivo `src/api/newsApi.js`:

   ```javascript
   const API_KEY = "YOUR_NEWSAPI_KEY"; // Substitua pela sua chave da NewsAPI
   ```

5. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

6. Abra o navegador e acesse `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
