import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const NewsList = ({ news }) => {
  return (
    <NewsListContainer>
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
