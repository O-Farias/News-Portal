import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import { fetchNewsByCategory } from "../api/newsApi";

const SportsPageContainer = styled.div`
  padding: 1rem;
`;

const SportsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNewsByCategory("sports");
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
    return <SportsPageContainer>Carregando...</SportsPageContainer>;
  }

  if (error) {
    return (
      <SportsPageContainer>
        Erro ao carregar notícias: {error}
      </SportsPageContainer>
    );
  }

  if (!news.length) {
    return (
      <SportsPageContainer>Nenhuma notícia disponível.</SportsPageContainer>
    );
  }

  return (
    <SportsPageContainer>
      <NewsList news={news} />
    </SportsPageContainer>
  );
};

export default SportsPage;
