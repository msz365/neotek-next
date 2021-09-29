import React from "react";
import Icon1 from "../../public/svg-2.svg";
import Icon2 from "../../public/svg-3.svg";
import Icon3 from "../../public/svg-4.svg";
import styled from "styled-components";
import Image from "next/image";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333333;
  padding: 100px 0;
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
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServicesH1 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesH2 = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #560004;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #560004;
`;

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <Image alt="services1" src={Icon1} />
            <ServicesH2>Preventive Maintenance</ServicesH2>
            <ServicesP>
              Our team of highly trained engineers will carry out calibration &
              maintenance of your instruments
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <Image alt="services2" src={Icon2} />
            <ServicesH2>Service Contracts</ServicesH2>
            <ServicesP>
              Renewable Yearly Contracts for all your calibration & servicing
              needs to ensure hassle free operations
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <Image alt="services3" src={Icon3} />
            <ServicesH2>Method Development</ServicesH2>
            <ServicesP>
              We can help you in development of methods per internationally
              accepted practices
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
