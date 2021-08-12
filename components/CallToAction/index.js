import React from "react";
import styled from "styled-components";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

const CtaWrapper = styled.div`
  background: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
`;

const CtaContent = styled.div`
  display: flex;
  width: 70%;
  background: #333333;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

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
  background: #650004;
  margin: 10px;
  padding: 10px;
  border-radius: 9999px;
`;

const CtaIcon1 = styled(IoPhonePortraitOutline)`
  font-size: 70px;
  padding: 10px;
`;

const CtaIcon2 = styled(FaFacebookMessenger)`
  font-size: 70px;
  padding: 10px;
`;

function CallToAction() {
  return (
    <CtaWrapper>
      <CtaContent>
        <CtaTop>
          <h1>We are ready!</h1>
          <h3 style={{ fontWeight: "50" }}>
            Are you ready to take your business to the next level with
            technology?
          </h3>
        </CtaTop>
        <CtaBottom>
          <CtaIconWrapper>
            <CtaIcon1 />
            <a
              href="tel:+923111444226"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                cursor: "pointer",
              }}
            >
              <h5 style={{ color: "inherit", textDecoration: "inherit" }}>
                GIVE US A CALL
              </h5>
            </a>
          </CtaIconWrapper>
          <CtaOrWrapper>
            <span style={{ fontWeight: "800" }}>OR</span>
          </CtaOrWrapper>
          <CtaIconWrapper>
            <CtaIcon2 />
            <h5>CHAT WITH US</h5>
          </CtaIconWrapper>
        </CtaBottom>
      </CtaContent>
    </CtaWrapper>
  );
}

export default CallToAction;
