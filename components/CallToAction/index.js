import React from "react";
import styled from "styled-components";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const CtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  padding: 20px 0;
  width: 100%;
`;

const CtaContent = styled.div`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 50px;
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 200px;

  border-radius: 5px;

  @media screen and (max-width: 1080px) {
    width: 80%;
    padding: 0 15px;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0 15px;
    font-size: 0.7rem;
  }
`;

const CtaTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CtaBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 60%;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

const CtaIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CtaOrWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 10px;
  border-radius: 9999px;
  @media screen and (max-width: 480px) {
    padding: 5px;
    margin: 5px;
  }
`;

const CtaIcon1 = styled(IoPhonePortraitOutline)`
  font-size: 70px;
  padding: 10px;
  color: ffffff !important;
  &:hover {
    color: #333333 !important;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

const CtaIcon2 = styled(FaFacebookMessenger)`
  font-size: 70px;
  padding: 10px;
  color: #ffffff;
  &:hover {
    color: #650004 !important;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
const CtaIcon3 = styled(BsWhatsapp)`
  font-size: 70px;
  padding: 10px;
  color: #ffffff;
  &:hover {
    color: #4bc959 !important;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;
const CtaText = styled.h5`
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    text-align: center;
    margin: 0 !important;
  }
`;

const data = { img: require("../../public/dnb-logo.png") };

function CallToAction() {
  return (
    <CtaWrapper>
      <CtaContent>
        <CtaTop>
          <h2>Find us on Dun & Bradsheet</h2>
          <a
            href="https://www.dnb.com/business-directory/company-profiles.neotech_suppliers_(pvt)_limited.54aef4857b4af815017300433d704eaa.html"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <Image
                src={data.img}
                alt="Dun & Bradsheet Logo"
                width={200}
                height={100}
              />
            </ImageContainer>
          </a>
          <h3 style={{ fontWeight: "50" }}>
            Are you ready to take your business to the next level with
            technology?
          </h3>
        </CtaTop>
        <CtaBottom>
          <CtaIconWrapper>
            <a
              href="tel:+923111444226"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <CtaIcon1 />
              <CtaText>Give us a call</CtaText>
            </a>
          </CtaIconWrapper>
          <CtaOrWrapper>
            <span style={{ fontWeight: "800" }}>OR</span>
          </CtaOrWrapper>
          <CtaIconWrapper>
            <CtaIcon2 />
            <CtaText>Chat on Messenger</CtaText>
          </CtaIconWrapper>
          <CtaOrWrapper>
            <span style={{ fontWeight: "800" }}>OR</span>
          </CtaOrWrapper>
          <CtaIconWrapper>
            <a
              href="https://wa.me/923171114359"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <CtaIcon3 />
              <CtaText>Chat on WhatsApp</CtaText>
            </a>
          </CtaIconWrapper>
        </CtaBottom>
      </CtaContent>
    </CtaWrapper>
  );
}

export default CallToAction;
