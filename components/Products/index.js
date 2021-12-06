import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Data } from "./Data";

const ProductsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 0;

  @media screen and (max-width: 1000px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }
`;

const ProductsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 50px;
  border-radius: 5px;
  width: 70%;

  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    margin: 20px;
    width: auto;
  }
`;

const ProductsH1 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Products = () => {
  return (
    <>
      <ProductsContainer id="products">
        <ProductsH1>Our Products</ProductsH1>
        <ProductsWrapper>
          {Data.map((product) => (
            <ProductCard
              key={product.id}
              href={product.href}
              aria={product.aria}
              alt={product.alt}
              src={product.src}
            />
          ))}
        </ProductsWrapper>
      </ProductsContainer>
    </>
  );
};

export default Products;
