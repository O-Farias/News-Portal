import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import { fetchNewsByCategory } from "../api/newsApi";

const TechnologyPageContainer = styled.div`
  padding: 1rem;
`;

const TechnologyPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNewsByCategory("technology");
        setNews(newsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return <TechnologyPageContainer>Carregando...</TechnologyPageContainer>;
  }

  if (error) {
    return (
      <TechnologyPageContainer>
        Erro ao carregar notícias: {error}
      </TechnologyPageContainer>
    );
  }

  if (!news.length) {
    return (
      <TechnologyPageContainer>
        Nenhuma notícia disponível.
      </TechnologyPageContainer>
    );
  }

  return (
    <TechnologyPageContainer>
      <NewsList news={news} />
    </TechnologyPageContainer>
  );
};

export default TechnologyPage;
