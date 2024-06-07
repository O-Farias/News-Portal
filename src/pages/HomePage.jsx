import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { fetchNews, fetchNewsByQuery } from "../api/newsApi";

const HomePageContainer = styled.div`
  padding: 1rem;
`;

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        setNews(newsData);
        setTotalPages(Math.ceil(newsData.length / 10)); // Supondo 10 notícias por página
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const newsData = await fetchNewsByQuery(query);
      setNews(newsData);
      setTotalPages(Math.ceil(newsData.length / 10));
      setQuery(query);
      setCurrentPage(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const newsPerPage = 10;
  const displayedNews = news.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  if (loading) {
    return <HomePageContainer>Carregando...</HomePageContainer>;
  }

  if (error) {
    return (
      <HomePageContainer>Erro ao carregar notícias: {error}</HomePageContainer>
    );
  }

  if (!news.length) {
    return <HomePageContainer>Nenhuma notícia disponível.</HomePageContainer>;
  }

  return (
    <HomePageContainer>
      <SearchBar onSearch={handleSearch} />
      <NewsList news={displayedNews} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </HomePageContainer>
  );
};

export default HomePage;
