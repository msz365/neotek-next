import { ButtonR } from "../ButtonRElement";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const InfoContainer = styled.div`
  position: relative;

  padding: 20px 0;
  padding-top: 0;
  @media screen and (max-width: 768px) {
  }
`;

const InfoWrapper = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: grid;
  z-index: 3;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  justify-content: center;
  border-radius: 5px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  z-index: 5;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? "#ffffff" : "#ffffff")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;

  color: ${({ lightText }) => (lightText ? "#ffffff" : "#ffffff")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#ffffff" : "#ffffff")};
  text-align: justify;
  text-justify: inter-word;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

const CallToAction = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;

  // :before {
  //   content: "";
  //   position: absolute;
  //   box-shadow: inset 0 0 0 2000px rgba(51, 51, 51, 0.7);
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;

  //   z-index: 0;
  // }
`;
const CtaCont = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 70vw;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 45px;
  background: rgba(132, 137, 153, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
const CtaImg = styled.div`
  width: 300px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;

  z-index: 5;
  @media screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;
const CtaIntro = styled.div`
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  text-align: justify;
  text-justify: inter-word;
  z-index: 5;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
const BgImg = styled.div`
  width: 100px;
  height: 100px;
  padding: 0 30px;
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
const BgImgWrap = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: -75px;
  margin-top: -75px;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

const PorductPage = ({
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
  noButton,
  website,
  tags,
  bg,
  item1name,
  item1description,
  item1image,
  item2name,
  item2description,
  item2image,
  item3name,
  item3description,
  item3image,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <CallToAction>
          <CtaCont>
            <CtaImg>
              <Image
                src={img}
                alt={alt}
                layout="responsive"
                width={150}
                height={150}
              />
            </CtaImg>
            <CtaIntro>
              <p
                style={{
                  color: "#ffffff",
                  zIndex: "10",
                }}
              >
                {description}
              </p>
            </CtaIntro>
          </CtaCont>
        </CallToAction>

        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{item1name} </Heading>
                <Subtitle darkText={darkText}>{item1description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Image
                  src={item1image}
                  alt={alt}
                  layout="responsive"
                  width={150}
                  height={150}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer lightBg={false} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={false} lightBg={false}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={true}>{topLine}</TopLine>
                <Heading lightText={true}>{item2name} </Heading>
                <Subtitle darkText={false}>{item2description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Image
                  src={item2image}
                  alt={alt}
                  layout="responsive"
                  width={150}
                  height={150}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{item3name} </Heading>
                <Subtitle darkText={darkText}>{item3description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Image
                  src={item3image}
                  alt={alt}
                  layout="responsive"
                  width={150}
                  height={150}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <BtnWrap>
            <Link href={website} passHref>
              <ButtonR
                smooth={true}
                duration={500}
                spy={true}
                // exact={true}
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
              >
                {buttonLabel}
              </ButtonR>
            </Link>
          </BtnWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default PorductPage;
