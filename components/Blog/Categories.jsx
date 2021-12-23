import React, { useState, useEffect, createFactory } from "react";
import Link from "next/link";
import { getCategories } from "../../services";
import styled from "styled-components";

const CategoriesContainer = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const Heading = styled.h3`
  margin-bottom: 24px;
  font-size: 1rem;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;
  border-bottom-width: 1px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const CategoryHeading = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  color: #ffffff;
  margin: 5px !important;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0 10px;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <CategoriesContainer>
      <Heading>Categories</Heading>
      <CategoryWrapper>
        {categories.map((category) => (
          <CategoryLink key={category.slug} href={`/category/${category.slug}`}>
            <CategoryHeading>{category.name}</CategoryHeading>
          </CategoryLink>
        ))}
      </CategoryWrapper>
    </CategoriesContainer>
  );
};

export default Categories;
