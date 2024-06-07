import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import { fetchNewsByCategory } from "../api/newsApi";

const BusinessPageContainer = styled.div`
  padding: 1rem;
`;

const BusinessPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNewsByCategory("business");
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
    return <BusinessPageContainer>Carregando...</BusinessPageContainer>;
  }

  if (error) {
    return (
      <BusinessPageContainer>
        Erro ao carregar notícias: {error}
      </BusinessPageContainer>
    );
  }

  if (!news.length) {
    return (
      <BusinessPageContainer>Nenhuma notícia disponível.</BusinessPageContainer>
    );
  }

  return (
    <BusinessPageContainer>
      <NewsList news={news} />
    </BusinessPageContainer>
  );
};

export default BusinessPage;
