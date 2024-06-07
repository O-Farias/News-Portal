import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import { fetchNewsByCategory } from "../api/newsApi";

const EntertainmentPageContainer = styled.div`
  padding: 1rem;
`;

const EntertainmentPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNewsByCategory("entertainment");
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
    return (
      <EntertainmentPageContainer>Carregando...</EntertainmentPageContainer>
    );
  }

  if (error) {
    return (
      <EntertainmentPageContainer>
        Erro ao carregar notícias: {error}
      </EntertainmentPageContainer>
    );
  }

  if (!news.length) {
    return (
      <EntertainmentPageContainer>
        Nenhuma notícia disponível.
      </EntertainmentPageContainer>
    );
  }

  return (
    <EntertainmentPageContainer>
      <NewsList news={news} />
    </EntertainmentPageContainer>
  );
};

export default EntertainmentPage;
