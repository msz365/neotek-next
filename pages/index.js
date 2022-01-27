import Head from "next/head";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Products from "../components/Products";
import Services from "../components/Services";
import styled from "styled-components";
import { useState } from "react";
import CallToAction from "../components/CallToAction";
import { motion } from "framer-motion";
import ImageSlider from "../components/Slider/ImageSlider";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonR } from "../components/ButtonRElement";
import { IoTimerOutline } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsFileCheck } from "react-icons/bs";
import { BiError } from "react-icons/bi";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Neotek Pakistan",
  image: "https://neotek.com.pk/Logo-color.png",
  "@id": "",
  url: "https://www.neotek.com.pk",
  telephone: "00923111444226",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "142, Street 12, Chaklala Scheme III",
    addressLocality: "Rawalpindi",
    postalCode: "46200",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.585625,
    longitude: 73.09063,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "15:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/neotekpk/",
    "https://www.instagram.com/neotekpk/",
    "https://www.youtube.com/channel/UCDg0gomfedA2JfHXHWjZwBA",
    "https://pk.linkedin.com/company/neotek-pak",
  ],
};

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

const Heading = styled.h2`
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
    id: "qlims-promo",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "",
    headline: "Join us in Lahore!",
    description: "We look forward to welcoming you at our stalls.",
    description2:
      "Drop in at Stall C-1 and C-2 in Hall 1 for a cup of tea and a fruitful discussion about our offerings.",
    description3: "9 - 10th March 2022 at Expo Center Lahore.",
    buttonLabel: "More Details",
    imgStart: true,
    img: require("../public/ppe.png"),
    alt: "promotion",
    dark: true,
    primary: true,
    darkText: true,
    noButton: false,
    website: "https://www.onqsoft.com.au/qlims-2021-starter-package-promotion/",

    tip1: "Reduce lead times by up to 70%",
    tip2: "Reduce errors and rework",
    tip3: "Lower quality control costs",
    tip4: "Ensure instant compliance",
  };

  return (
    <motion.div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <title>NEOTEK PAKISTAN</title>
        <meta name="title" content="NEOTEK PAKISTAN" />
        <meta
          name="description"
          content="We are distributors for VWR, Thermo Fisher Scientific handheld series, MySCADA, QLIMS, Honeywell Gas Detection, Intelligent Systems Dynamics 365, Spectrum and Perten Instruments from Perkin Elmer and Gester for Textile and Footwear testing"
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Thermo Fisher Pakistan, Honeywell Pakistan, OnQ Software, LIMS Pakistan, VWR Pakistan, Microsoft Dynamics 365 Pakistan, Perkin Elmer Pakistan, Perten Pakistan, Spectrum Instruments Pakistan, Gester Instruments Pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="Home" />
        <meta name="channel" content="home" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="home" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />

        <meta itemProp="name" content="Neotek Pakistan" />
        <meta
          itemProp="description"
          content="We are distributors for VWR, Thermo Fisher Scientific handheld series, MySCADA, QLIMS, Honeywell Gas Detection, Intelligent Systems Dynamics 365, Spectrum and Perten Instruments from Perkin Elmer and Gester for Textile and Footwear testing"
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neotek.com.pk" />
        <meta property="og:title" content="Neotek Pakistan" />
        <meta
          property="og:description"
          content="We are distributors for VWR, Thermo Fisher Scientific handheld series, MySCADA, QLIMS, Honeywell Gas Detection, Intelligent Systems Dynamics 365, Spectrum and Perten Instruments from Perkin Elmer and Gester for Textile and Footwear testing"
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="NEOTEK PAKISTAN" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="twitter:url" content="https://www.neotek.com.pk" />
        <meta property="twitter:title" content="Neotek Pakistan" />
        <meta
          property="twitter:description"
          content="We are distributors for VWR, Thermo Fisher Scientific handheld series, MySCADA, QLIMS, Honeywell Gas Detection, Intelligent Systems Dynamics 365, Spectrum and Perten Instruments from Perkin Elmer and Gester for Textile and Footwear testing"
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        {/* <link rel="canonical" href="https://www.neotek.com.pk" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      {open ? (
        <ModalOutlayWrapper onClick={() => setOpen(!open)}>
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
                        {data.description2}
                      </Subtitle>
                      <Subtitle darkText={data.darkText}>
                        {data.description3}
                      </Subtitle>

                      {/* <BtnWrap>
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
                      </BtnWrap> */}
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Image
                        src={data.img}
                        alt={data.alt}
                        layout="responsive"
                        width={300}
                        height={200}
                      />
                    </ImgWrap>
                  </Column2>
                </ModalRow>
                {/* <TipWrapper>
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
                </TipWrapper> */}
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
      <ImageSlider />
      <CallToAction />
    </motion.div>
  );
}
