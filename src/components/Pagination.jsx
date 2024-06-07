import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageButton
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
