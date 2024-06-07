import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbContainer = styled.nav`
  padding: 1rem;
  background-color: #f8f9fa;
`;

const BreadcrumbList = styled.ol`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const BreadcrumbItem = styled.li`
  margin-right: 0.5rem;

  &:not(:last-child)::after {
    content: ">";
    margin-left: 0.5rem;
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink to={routeTo}>{path}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
