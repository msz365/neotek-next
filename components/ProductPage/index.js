import { ButtonR } from "../ButtonRElement";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const InfoContainer = styled.div`
  background: ${({ lightBg }) =>
    lightBg
      ? "linear-gradient(180deg, hsla(0, 0%, 20%, 0.7) 0%, hsla(0, 0%, 89%, 1) 10%)"
      : "#650004"};
  @media screen and (max-width: 768px) {
  
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 110px 24px;
  justify-content: center;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
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

const Heading = styled.h1`
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
  margin-bottom: 35px;
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
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {noButton ? (
                  <div></div>
                ) : (
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
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                    padding: "10px",
                    flexDirection: "column",
                  }}
                >
                  {tags.map((tag) => (
                    <Tag
                      key={id}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Image
                  src={img}
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
    </>
  );
};

export default PorductPage;
