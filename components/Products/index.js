import React from "react";
import Icon1 from "../../public/thermo-logo.png";
import Icon2 from "../../public/perkin-logo.png";
import Icon3 from "../../public/perten-logo.png";
import Icon4 from "../../public/onq-logo.png";
import Icon5 from "../../public/vwr-logo.png";
import Icon6 from "../../public/spectrum-logo.png";
import Icon7 from "../../public/honeywell-logo.png";
import Icon8 from "../../public/myscada-logo.png";
import Icon9 from "../../public/is-logo.png";
import Icon10 from "../../public/gester-logo.png";
import Icon11 from "../../public/galvano-logo.png";
import styled from "styled-components";
import Image from "next/image";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #560004;
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

const ProductsWrapper = styled.div`
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

const ProductsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ProductCardLink = styled.a`
  text-decoration: none;
`;

const ProductsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ProductsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ProductsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #560004;
`;

const ProductsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #560004;
`;

const Products = () => {
  return (
    <>
      <ProductsContainer id="products">
        <ProductsH1>Our Products</ProductsH1>
        <ProductsWrapper>
          <ProductsCard>
            <ProductCardLink
              href="/products/thermo"
              aria-label="Thermo Fisher Chemical Detection"
            >
              <Image alt="" src={Icon1} />
              <ProductsH2>Safety & Security Portfolio</ProductsH2>
              <ProductsP>
                The best in handheld Elemental Analysis & Radiation Detection
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink
              href="/products/perkin"
              aria-label="Perkin Elmer Dairy and Atomic Absorption"
            >
              <Image alt="" src={Icon2} />
              <ProductsH2>Atomic Absorption & Dairy Analysis</ProductsH2>
              <ProductsP>
                State of the Art Dairy Analysis & Atomic Absorption Systems
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink
              href="/products/perkin"
              aria-label="Perten Dough and Grain Analyzers"
            >
              <Image alt="" src={Icon3} />
              <ProductsH2>Dough & Grain Analysers</ProductsH2>
              <ProductsP>
                A Wide Variety of Instruments for Analysis of Different
                Characteristics of Dough & Grain
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink href="/products/qlims" aria-label="LIMS">
              <Image alt="" src={Icon4} />
              <ProductsH2>Laboratory Information Management System</ProductsH2>
              <ProductsP>
                The best LIMS on the market. Through QLIMS, Organsiations can
                Automate & meet Global Regulatory Compliance
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink
              href="/products/vwr"
              aria-label="VWR Consumables Reagents and Chemicals"
            >
              <Image alt="" src={Icon5} />
              <ProductsH2>A Complete Spectrum</ProductsH2>
              <ProductsP>
                Your One-Stop for General Lab Equipment, Consumables & Reagents.
                The best soruce for High Quality & Traceability
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>

          <ProductsCard>
            <ProductCardLink
              href="/products/honeywell"
              aria-label="Honeywell Gas Detection"
            >
              <Image alt="" src={Icon7} />
              <ProductsH2>Gas Detection Portfolio</ProductsH2>
              <ProductsP>
                Single & Multi Gas Detection. Disposable & Serviceable Options.
                Wearable & Area Monitoring Systems{" "}
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink
              href="/products/myscada"
              aria-label="mySCADA Automation"
            >
              <Image alt="" src={Icon8} />
              <ProductsH2>Industrial Automation</ProductsH2>
              <ProductsP>
                Automate Your Manufacturing Process & Leverage the Insights to
                Improve Efficiencies Across Your Organisation
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink
              href="/products/isystems"
              aria-label="Micorosoft ERP"
            >
              <Image alt="" src={Icon9} />
              <ProductsH2>Enterprise Resource Planning</ProductsH2>
              <ProductsP>
                Dynamics 365 for Industries is an integrated solution based on
                Microsoft Dynamics 365 ERP
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink
              href="/products/gester"
              aria-label="GESTER Testing"
            >
              <Image alt="" src={Icon10} />
              <ProductsH2>Testing Equipment for Various Industries</ProductsH2>
              <ProductsP>
                Testing Solutions for Masks, Footwear, Textile and Furniture
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
          <ProductsCard>
            <ProductCardLink href="/products/galvano" aria-label="Galvano">
              <Image alt="" src={Icon11} />
              <ProductsH2>Quality Control for Pharma</ProductsH2>
              <ProductsP>
                A variety of affordable QC equipment for Pharma, manufactured in
                Pakistan
              </ProductsP>
            </ProductCardLink>
          </ProductsCard>
        </ProductsWrapper>
      </ProductsContainer>
    </>
  );
};

export default Products;
