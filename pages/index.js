import Head from "next/head";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjThree } from "../components/Contact/Data";
import Products from "../components/Products";
import Services from "../components/Services";
import Contact from "../components/Contact";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonR } from "../components/ButtonRElement";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { IoTimerOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { BsFileCheck } from "react-icons/bs";

const ModalOutlayWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(51, 51, 51, 0.4);
  z-index: 999999;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalDiv = styled.div`
  background-color: #fff;

  width: 50%;
  z-index: 9999999;
  position: relative;
  filter: none;
  border-radius: 15px;
  padding: 20px;
  margin: 0 20px;
`;
const CloseWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outlie: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #650004;
  font-weight: 900;
  &:hover {
    background-color: #650004;
    color: #fff;
  }
`;

const ModalContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "e0e0e0" : "#650004")};

  @media screen and (max-width: 768px) {
  }
`;

const ModalWrapper = styled.div`
  display: grid;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;

  justify-content: center;
`;

const ModalRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  height: 70%;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 15px;
  @media screen and (max-width: 1445px) {
    padding-bottom: 14px;
  }
  @media screen and (max-width: 1080px) {
    padding-bottom: 0px;
  }
`;

const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#650004")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#650004")};
  @media screen and (max-width: 1445px) {
    margin-bottom: 12px;
    font-size: 28px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 26px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 468px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#650004" : "#fff")};
  @media screen and (max-width: 1445px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1080px) {
    margin-bottom: 10px;
    font-size: 15px;
  }
`;
const TipSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#650004" : "#fff")};
  text-align: center;
  @media screen and (max-width: 1080px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 10px;
    line-height: 15px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

const Tag = styled.p`
  border-radius: 5px;
  background: #333333;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 40px" : "12px 20px")};
  color: ${({ dark }) => (dark ? "#fff" : "#650004")};
  font-size: ${({ big }) => (big ? "12px" : "10px")};
  outline: none;
  border: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin: 5px;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#650004")};
    color: ${({ dark }) => (dark ? "#650004" : "#fff")};
  }
`;

const TipWrap = styled.div`
  color: #650004;
  font-size: 60px;
  @media screen and (max-width: 1445px) {
    font-size: 35px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 25px;
  }
`;
const TipWrapper = styled.div`
  // @media screen and (max-width: 468px) {
  //   display: none;
  // }
`;

export default function Home() {
  const [open, setOpen] = useState(true);

  const data = {
    id: "thermo",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "",
    headline: "QLIMS Starter Package end of year promotion!",
    description:
      "Do you need a LIMS which does not cost a fortune and take months to implement?",
    description2: "QLIMS is a real SaaS LIMS reduced to only €9,995 per year!",
    description3: "Valid until 15th of December 2021",
    buttonLabel: "More Details",
    imgStart: true,
    img: require("../public/promotion-2021.png"),
    alt: "promotion",
    dark: true,
    primary: true,
    darkText: true,
    noButton: false,
    website: "https://www.onqsoft.com.au/qlims-2021-starter-package-promotion/",
    // tags: [
    //   "Handheld Chemical Identifaction",
    //   "Handheld Explosives Detection",
    //   "Handheld Raman Analyzers",
    //   "Handheld FTIRs",
    //   "Handheld Radiation Detection",
    //   "Area Monitoring",
    // ],
    tip1: "Reduce lead times by up to 70%",
    tip2: "Reduce errors and rework",
    tip3: "Lower quality control costs",
    tip4: "Ensure instant compliance",
  };
  console.log(process.env.SENDGRID_API_KEY);
  return (
    <div
      style={
        {
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }
      }
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>NEOTEK</title>

        <meta
          name="description"
          content="Large Scale, Table-top & Handheld Analytical Instruments. Field Safety Instruments, Radiation Detection & Monitoring, Consumables, Chemicals & Reagents, Industrial Automation and much more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {open ? (
        <ModalOutlayWrapper>
          <ModalDiv>
            <CloseWrapper>
              <AiOutlineClose onClick={() => setOpen(!open)} />
            </CloseWrapper>
            <ModalContainer lightBg={data.lightBg} id={data.id}>
              <ModalWrapper>
                <ModalRow imgStart={data.imgStart}>
                  <Column1>
                    <TextWrapper>
                      <TopLine lightText={data.lightText}>
                        {data.topLine}
                      </TopLine>
                      <Heading lightText={data.lightText}>
                        {data.headline}{" "}
                      </Heading>
                      <Subtitle darkText={data.darkText}>
                        {data.description}
                      </Subtitle>
                      <Subtitle darkText={data.darkText}>
                        {process.env.SENDGRID_API_KEY}
                      </Subtitle>
                      <Subtitle darkText={data.darkText}>
                        {data.description2}
                      </Subtitle>
                      <Subtitle darkText={data.darkText}>
                        {data.description3}
                      </Subtitle>

                      <BtnWrap>
                        <a href={data.website} target="_blank" rel="noreferrer">
                          <ButtonR
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                            primary={data.primary ? 1 : 0}
                            dark={data.dark ? 1 : 0}
                            dark2={data.dark2 ? 1 : 0}
                          >
                            {data.buttonLabel}
                          </ButtonR>
                        </a>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Image
                        src={data.img}
                        alt={data.alt}
                        layout="responsive"
                        width={300}
                        height={150}
                      />
                    </ImgWrap>
                  </Column2>
                </ModalRow>
                <TipWrapper>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TipWrap>
                        <IoTimerOutline />
                      </TipWrap>
                      <TipSubtitle darkText={data.darkText}>
                        {data.tip1}
                      </TipSubtitle>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TipWrap>
                        <BiError />
                      </TipWrap>
                      <TipSubtitle darkText={data.darkText}>
                        {data.tip2}
                      </TipSubtitle>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TipWrap>
                        <FaMoneyBillAlt />
                      </TipWrap>
                      <TipSubtitle darkText={data.darkText}>
                        {data.tip3}
                      </TipSubtitle>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TipWrap>
                        <BsFileCheck />
                      </TipWrap>
                      <TipSubtitle darkText={data.darkText}>
                        {data.tip4}
                      </TipSubtitle>
                    </div>
                  </div>
                </TipWrapper>
              </ModalWrapper>
            </ModalContainer>
          </ModalDiv>
        </ModalOutlayWrapper>
      ) : (
        <div></div>
      )}

      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Products />
      <Services />
      <Contact {...homeObjThree} />
    </div>
  );
}
