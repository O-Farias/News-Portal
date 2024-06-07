import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import { fetchFashionNews } from "../api/newsApi";

const FashionPageContainer = styled.div`
  padding: 1rem;
`;

const FashionPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchFashionNews();
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
    return <FashionPageContainer>Carregando...</FashionPageContainer>;
  }

  if (error) {
    return (
      <FashionPageContainer>
        Erro ao carregar notícias: {error}
      </FashionPageContainer>
    );
  }

  if (!news.length) {
    return (
      <FashionPageContainer>Nenhuma notícia disponível.</FashionPageContainer>
    );
  }

  return (
    <FashionPageContainer>
      <NewsList news={news} />
    </FashionPageContainer>
  );
};

export default FashionPage;
