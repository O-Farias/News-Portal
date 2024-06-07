import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import { fetchNewsByCategory } from "../api/newsApi";

const HealthPageContainer = styled.div`
  padding: 1rem;
`;

const HealthPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNewsByCategory("health");
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
    return <HealthPageContainer>Carregando...</HealthPageContainer>;
  }

  if (error) {
    return (
      <HealthPageContainer>
        Erro ao carregar notícias: {error}
      </HealthPageContainer>
    );
  }

  if (!news.length) {
    return (
      <HealthPageContainer>Nenhuma notícia disponível.</HealthPageContainer>
    );
  }

  return (
    <HealthPageContainer>
      <NewsList news={news} />
    </HealthPageContainer>
  );
};

export default HealthPage;
