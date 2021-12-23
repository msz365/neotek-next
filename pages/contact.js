import React, { useState } from "react";
import styled from "styled-components";
import { FiPhoneCall, FiInstagram } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillLinkedin, AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Head from "next/head";
import { ButtonR } from "../components/ButtonRElement";
import { FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const ContactWrapper = styled(motion.div)`
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Heading = styled(motion.h1)`
  margin: 2rem auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;

  @media screen and (max-width: 540px) {
    font-size: 32px;
  }
`;
const ContactContentWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
const CotactFormWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 540px) {
    width: 95%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
`;
const ContactFormRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
  @media screen and (max-width: 540px) {
    margin: 5px;
    padding: 5px;
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;
const ContactFormLeft = styled(motion.div)`
  padding: 40px 20px;
  grid-area: col1;
  background-color: #333333;
  height: auto;
  border-radius: 10px;
  margin-left: -10px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  z-index: 100;
  @media screen and (max-width: 480px) {
    margin: 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
const ContactFormRight = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  border-radius: 10px;
`;
const FormWrapper = styled.form``;

const LeftContent = styled.div``;
const LeftText = styled.div``;
const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 80px 0;
`;
const LeftInfoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;
const LeftSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 380px) {
    justify-content: space-between;
  }
`;
const LeftSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 380px) {
    width: 100%;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const FormText = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid #ffffff;
  transition: all 0.3s ease-in-out;
  width: 100%;
  background: transparent;
  padding: 10px;

  color: white;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    background: rgba(255, 255, 255, 0.1);
  }
`;
const FormLabel = styled.label`
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
`;
const FormTextArea = styled.textarea`
  border: none;
  background: none;
  border-bottom: 1px solid #333333;
  transition: all 0.3s ease-in-out;
  width: 100%;
  background: transparent;
  padding: 10px;
  color: white;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ContactMapWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 600px;
  @media screen and (max-width: 540px) {
    width: 100%;
    padding: 10px;
  }
`;
const BtnSubmit = styled.button`
  border-radius: 50px;
  background: #333333;
  white-space: nowrap;
  padding: 14px 100px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #650004;
    border: 1px solid #650004;
  }
`;

const SocialLink = styled.a`
  height: 25px;
  width: 25px;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    color: #650004;
  }
`;

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

  width: 30%;
  z-index: 9999999;
  position: relative;
  filter: none;
  border-radius: 15px;
  padding: 20px;
  margin: 0 20px;
  @media screen and (max-width: 475px) {
    font-size: 3rem;
    padding-top: 30px;
    width: 60%;
  }
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

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: #650004;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 475px) {
    font-size: 20px;
  }
`;
const IconWrapper = styled.div`
  color: #333333;
  font-size: 10rem;
  @media screen and (max-width: 768px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 475px) {
    font-size: 3rem;
    padding-top: 30px;
  }
`;
const Span = styled.span``;

function Contact() {
  const [formSubmit, setformSubmit] = useState(false);
  const [open, setOpen] = useState(true);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  // const [history, useHistory] = useHistory();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("api/email", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
    setformSubmit(true);
    // history.push("/");
  }
  const { ref, inView } = useInView({ threshold: 0.1 });

  const animation = useAnimation();
  const animation2 = useAnimation();
  const easing = [0.6, -0.05, 0.01, 0.99];

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          bounce: 0.5,
        },
      });
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: easing,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
      animation2.start({ y: 60, opacity: 0 });
    }
  }, [inView]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Contact Us | Neotek</title>

        <meta name="title" content="Contact Us | Neotek" />
        <meta
          name="description"
          content="Contact Us. Call us. Email us. Visit us or leave a message"
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Contact Us, Email, Phone number, Address, Location"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="Contact" />
        <meta name="channel" content="contact" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="contact" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />

        <meta itemProp="name" content="Contact Us | Neotek" />
        <meta
          itemProp="description"
          content="Contact Us. Call us. Email us. Visit us or leave a message"
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neotek.com.pk/contact" />
        <meta property="og:title" content="Contact Us | Neotek" />
        <meta
          property="og:description"
          content="Contact Us. Call us. Email us. Visit us or leave a message"
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Contact Us | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/contact"
        />
        <meta property="twitter:title" content="Contact Us | Neotek" />
        <meta
          property="twitter:description"
          content="Contact Us. Call us. Email us. Visit us or leave a message"
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        {/* <link rel="canonical" href="https://www.neotek.com.pk/contact" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {formSubmit && open ? (
        <ModalOutlayWrapper onClick={() => setOpen(!open)}>
          <ModalDiv>
            <CloseWrapper>
              <AiOutlineClose onClick={() => setOpen(!open)} />
            </CloseWrapper>
            <ModalContent>
              <IconWrapper>
                <FaThumbsUp />
              </IconWrapper>
              <div>
                <ModalHeading style={{ textAlign: "center" }}>
                  Thank you for contacting us! We will get back to you shortly.
                </ModalHeading>
              </div>
            </ModalContent>
          </ModalDiv>
        </ModalOutlayWrapper>
      ) : (
        <div></div>
      )}
      <ContactWrapper>
        <ContactContentWrapper ref={ref}>
          <Heading animate={animation2}>Contact Us</Heading>
          <CotactFormWrapper>
            <ContactFormRow>
              <ContactFormLeft animate={animation}>
                <LeftContent>
                  <LeftText>
                    <h1>We are happy to help</h1>
                    <p>Write to us, Call us, Message us or Visit us</p>
                  </LeftText>
                  <LeftInfo>
                    <LeftInfoRow>
                      <FiPhoneCall
                        style={{ color: "#ffff", fontSize: "25px" }}
                      />{" "}
                      <span style={{ paddingLeft: "10px" }}>
                        <a
                          href="tel:+92518311621"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#ffffff",
                            marginRight: "5px",
                          }}
                        >
                          +92 51 8311621
                        </a>
                        {"   "}/{" "}
                        <a
                          href="tel:+923111444226"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#ffffff",
                            marginRight: "5px",
                          }}
                        >
                          +923 111 444 226
                        </a>{" "}
                      </span>
                    </LeftInfoRow>
                    <LeftInfoRow>
                      {" "}
                      <HiOutlineMail
                        style={{ color: "#ffff", fontSize: "25px" }}
                      />{" "}
                      <span style={{ paddingLeft: "10px" }}>
                        <a
                          href="mailto:info@neotek.com.pk"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#ffffff",
                          }}
                        >
                          info@neotek.com.pk
                        </a>
                      </span>
                    </LeftInfoRow>
                    <LeftInfoRow>
                      <HiOutlineLocationMarker
                        style={{ color: "#ffff", fontSize: "25px" }}
                      />{" "}
                      <span style={{ paddingLeft: "10px" }}>
                        142, Street 12, Chaklala Scheme III, Rawalpindi,
                        Pakistan
                      </span>
                    </LeftInfoRow>
                    <LeftInfoRow>
                      <HiOutlineLocationMarker
                        style={{ color: "#ffff", fontSize: "25px" }}
                      />{" "}
                      <span style={{ paddingLeft: "10px" }}>
                        D-49/1, Block 2, Clifton, Karachi 75600, Pakistan
                      </span>
                    </LeftInfoRow>
                    <LeftInfoRow>
                      <HiOutlineLocationMarker
                        style={{ color: "#ffff", fontSize: "25px" }}
                      />{" "}
                      <span style={{ paddingLeft: "10px" }}>
                        Dubai Office: P.O. Box 4650, Dubai, UAE
                      </span>
                    </LeftInfoRow>
                  </LeftInfo>
                  <LeftSocial>
                    <p>Follow Us</p>
                    <LeftSocialIcons>
                      <SocialLink
                        href="//www.linkedin.com/company/neotech-dubai"
                        target="_blank"
                        aria-label="Linkedin"
                        rel="noreferrer"
                      >
                        <AiFillLinkedin
                          onMouseEnter={() => {
                            setHover(true);
                          }}
                          onMouseLeave={() => {
                            setHover(false);
                          }}
                          style={{
                            fontSize: "25px",
                            color: hover ? "red" : "ffffff",
                          }}
                        />
                      </SocialLink>
                      <SocialLink
                        href="//www.facebook.com/Neotek-110387191195732"
                        target="_blank"
                        aria-label="Facebook"
                        rel="noreferrer"
                      >
                        <FaFacebook
                          onMouseEnter={() => {
                            setHover2(true);
                          }}
                          onMouseLeave={() => {
                            setHover2(false);
                          }}
                          style={{
                            fontSize: "25px",
                            color: hover2 ? "red" : "ffffff",
                          }}
                        />
                      </SocialLink>
                      <SocialLink
                        href="//www.instagram.com/neotekpk"
                        target="_blank"
                        aria-label="Youtube"
                        rel="noreferrer"
                      >
                        <FiInstagram
                          onMouseEnter={() => {
                            setHover3(true);
                          }}
                          onMouseLeave={() => {
                            setHover3(false);
                          }}
                          style={{
                            fontSize: "25px",
                            color: hover3 ? "red" : "ffffff",
                          }}
                        />
                      </SocialLink>
                      <SocialLink
                        href="//www.youtube.com/channel/UCDg0gomfedA2JfHXHWjZwBA"
                        target="_blank"
                        aria-label="Youtube"
                        rel="noreferrer"
                      >
                        <AiFillYoutube
                          onMouseEnter={() => {
                            setHover4(true);
                          }}
                          onMouseLeave={() => {
                            setHover4(false);
                          }}
                          style={{
                            fontSize: "25px",
                            color: hover4 ? "red" : "ffffff",
                          }}
                        />
                      </SocialLink>
                    </LeftSocialIcons>
                  </LeftSocial>
                </LeftContent>
              </ContactFormLeft>
              <ContactFormRight>
                <FormWrapper method="post" onSubmit={handleOnSubmit}>
                  <FormGroup>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormText type="text" name="name" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormText type="text" name="email" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <FormText type="text" name="phone" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="organisation">Organisation</FormLabel>
                    <FormText type="text" name="organsiation" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextArea
                      id="w3review"
                      name="message"
                      rows="5"
                    ></FormTextArea>
                  </FormGroup>
                  <FormGroup>
                    <BtnSubmit>Send</BtnSubmit>
                  </FormGroup>
                </FormWrapper>
              </ContactFormRight>
            </ContactFormRow>
          </CotactFormWrapper>
          <ContactMapWrapper>
            {/* <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13295.035751139894!2d73.0906302!3d33.5856077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f4825266821a100!2sNEOTEK!5e0!3m2!1sen!2s!4v1633075992002!5m2!1sen!2s"
              height="100%"
              style={{
                border: 0,
                height: "100%",
                width: "85%",
                borderRadius: "20px",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}

            <iframe
              title="Google Maps"
              width="85%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "20px",
              }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/search?q=Neotek%20Pakistan%2C%20Street%2012%2C%20Chaklala%20Scheme%203%20Chaklala%20Housing%20Scheme%203%2C%20Rawalpindi%2C%20Pakistan&key=AIzaSyBt3l8MGfOtrtjwar-u4TDqaW7LUoizTpM"
            ></iframe>
          </ContactMapWrapper>
        </ContactContentWrapper>
      </ContactWrapper>
    </>
  );
}

export default Contact;
