import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRightO } from "react-icons/cg";

const ImgBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const ProdContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;
  transition: 0.3s ease-in-out;
  background: linear-gradient(120deg, #7d0646, #333333);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
const ProductsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  height: 180px;
  width: 180px;
  padding: 30px;

  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    z-index: 1;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(25px);
    & ${ProdContent} {
      opacity: 0.9;
    }
  }
`;

const ImageStyle = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  padding: 5px;
`;
const ContentHeading = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;
const ContentText = styled.h3`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const ProductsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #560004;
`;

const ProductCardLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
`;

function ProductCard({ href, aria, alt, src }) {
  return (
    <ProductCardLink href={href} aria-label={aria}>
      <ProductsCard>
        <ImgBx>
          <ImageStyle alt={alt} src={src} height={180} width={180} />
          <ProdContent>
            <ContentWrapper>
              <ContentHeading>{aria}</ContentHeading>
              <ContentText>Click for more details</ContentText>
              <div style={{ fontSize: "35px" }}>
                <CgArrowRightO />
              </div>
            </ContentWrapper>
          </ProdContent>
        </ImgBx>
      </ProductsCard>
    </ProductCardLink>
  );
}

export default ProductCard;
