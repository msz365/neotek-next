import React from "react";
import { Button } from "../ButtonElement";
import styled from "styled-components";

const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#e3e3e3" : "#962428")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
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
  padding-bottom: 60px;
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
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#650004")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#650004" : "#fff")};
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  &.iframe {
    height: 600px;
  }
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

const Contact = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  email,
  phone,
}) => {
  return (
    <>
      <ContactContainer lightBg={lightBg} id={id}>
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>Email: {email}</Subtitle>
                <Subtitle darkText={darkText}>Phone: {phone}</Subtitle>
                {/* <BtnWrap>
                                <Button to='products' smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact={true} 
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {/* <Img src={img} alt={alt} />  */}
                <iframe
                  title="Neotek Head Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7670703103813!2d73.08881451520288!3d33.585396580735505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzA3LjQiTiA3M8KwMDUnMjcuNiJF!5e0!3m2!1sen!2s!4v1627585247818!5m2!1sen!2s"
                  height="100%"
                  style={{ border: 0, height: "480px", width: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </ImgWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
