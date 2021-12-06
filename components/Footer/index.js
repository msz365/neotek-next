import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../public/Logo.png";
import styled from "styled-components";
import { Link } from "next/link";
import Image from "next/image";

const FooterContainer = styled.footer`
  // background: linear-gradient(to right, rgb(142, 158, 171), rgb(238, 242, 243));
`;
const FooterWrap = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #560004;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const Img = styled.img`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  font-weight: bold;
  height: 35px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-bottom: 16px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 25px;

  height: 45px;
  width: 45px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #333333;
    transition: 0.3s ease-out;
  }
`;

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                <Image alt="Neotek" src={logo} height="45px" width="150px" />
              </SocialLogo>
              <WebsiteRights>
                © {new Date().getFullYear()} All Rights Reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/Neotek-110387191195732"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.linkedin.com/company/neotech-dubai"
                  target="_blank"
                  aria-label="Linkedin"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.youtube.com/channel/UCDg0gomfedA2JfHXHWjZwBA"
                  target="_blank"
                  aria-label="Youtube"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/neotekpk"
                  target="_blank"
                  aria-label="Youtube"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
