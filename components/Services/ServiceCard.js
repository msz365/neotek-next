import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRightO } from "react-icons/cg";

const ServContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;
  transition: 0.3s ease-in-out;
  background: linear-gradient(120deg, #7d1606, #333333);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

const ServicesCard = styled.div`
  position: relative;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 280px;
  width: 280px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    z-index: 1;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(25px);
    & ${ServContent} {
      opacity: 0.9;
    }
  }
`;

const ServicesH2 = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #560004;
`;

const ServiceCardLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
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
const ContentText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 25px;
`;
const ImgBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
`;
const ImageStyle = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function ServiceCard({ href, aria, alt, src }) {
  return (
    <ServiceCardLink href={href} aria-label={aria}>
      <ServicesCard>
        <ImgBx>
          <ImageStyle alt={alt} src={src} height={200} width={200} />

          <ServicesH2>{aria}</ServicesH2>
          <ServContent>
            <ContentWrapper>
              <ContentText>Click for more details</ContentText>
              <div style={{ fontSize: "45px" }}>
                <CgArrowRightO />
              </div>
            </ContentWrapper>
          </ServContent>
        </ImgBx>
      </ServicesCard>
    </ServiceCardLink>
  );
}

export default ServiceCard;
