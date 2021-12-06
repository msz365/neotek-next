import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { Data } from "./Data";

const ServicesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 0;
  z-index: 1;

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

const ServicesWrapper = styled.div`
  width: 70%;
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 50px;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

const ServicesH1 = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 64px;
  z-index: 2;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          {Data.map((service) => (
            <ServiceCard
              key={service.id}
              href={service.href}
              aria={service.aria}
              alt={service.alt}
              src={service.src}
            />
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
