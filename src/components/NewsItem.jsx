import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NewsItemContainer = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #fff;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }
`;

const Title = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.25rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0.5rem 0 1rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
`;

const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NoImage = styled.div`
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;

  h3 {
    color: #333;
  }
`;

const NewsItem = ({ article }) => {
  return (
    <NewsItemContainer whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} />
      ) : (
        <NoImage>
          <h3>{article.title}</h3>
        </NoImage>
      )}
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
      <ReadMoreLink
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Leia mais
      </ReadMoreLink>
    </NewsItemContainer>
  );
};

export default NewsItem;
