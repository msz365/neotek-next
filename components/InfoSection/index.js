import { ButtonR } from "../ButtonRElement";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const InfoContainer = styled.div`
  position: relative;

  padding: 20px 0;
  // z-index: 1;

  @media screen and (max-width: 768px) {
    // padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: grid;
  z-index: 3;
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  justify-content: center;
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    padding: 20px;
    margin: 20px;
    width: auto;
  }
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  // z-index: 1;
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
  color: ${({ lightText }) => (lightText ? "#ffffff" : "#ffffff")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  z-index: 1;
`;

const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#ffffff" : "#ffffff")};
  z-index: 2;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: ${({ darkText }) => (darkText ? "#ffffff" : "#ffffff")};
  z-index: 1;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  z-index: 1;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

const InfoSection = ({
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
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.6,
          bounce: 0.3,
        },
      });
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.6,
          ease: easing,
        },
      });
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.8,
          ease: easing,
        },
      });
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animation5.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 3,
          ease: easing,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
      animation2.start({
        opacity: 0,
      });
      animation3.start({
        y: 60,
        opacity: 0,
      });
      animation4.start({
        x: 30,
      });
      animation5.start({
        y: 60,
        opacity: 0,
      });
    }
  }, [inView]);

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: easing,
      },
    },
  };

  return (
    <>
      <motion.div initial="initial" animate="animate">
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper ref={ref}>
                  <motion.div animate={animation}>
                    <TopLine lightText={lightText}>{topLine}</TopLine>
                  </motion.div>
                  <motion.div animate={animation2}>
                    <Heading lightText={lightText}>{headline} </Heading>
                  </motion.div>
                  <motion.div animate={animation3}>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                  </motion.div>
                  {noButton ? (
                    <div></div>
                  ) : (
                    <BtnWrap>
                      <motion.div animate={animation5}>
                        <Link href="/about" passHref>
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
                      </motion.div>
                    </BtnWrap>
                  )}
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <motion.div animate={animation4}>
                    <Image
                      src={img}
                      alt={alt}
                      layout="responsive"
                      width={150}
                      height={150}
                    />
                  </motion.div>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </motion.div>
    </>
  );
};

export default InfoSection;
