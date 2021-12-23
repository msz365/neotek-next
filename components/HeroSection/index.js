import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
// import Video from "../../public/video.mp4";
import { Button } from "../ButtonElement";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  // background: #0c0c0c;
  display: flex;

  align-items: center;
  padding: 0 100px;
  height: 100vh;
  position: relative;
  z-index: 1;
  width: 50%;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    padding: 20px;
    width: 80%;
    justify-content: center;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #2a2323;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  @media and screen(max-width:768px) {
    align-items: center;
  }
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;

  max-width: 600px;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

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

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <motion.div initial="initial" animate="animate">
      <HeroContainer>
        <HeroContent>
          <motion.div variants={fadeInUp}>
            <HeroH1>
              Next Generation Analytical Instruments by Neotek Pakistan
            </HeroH1>
          </motion.div>
          <HeroP>
            Large Scale, Table-top & Handheld Analytical Instruments. Field
            Safety Instruments, Radiation Detection & Monitoring, Consumables,
            Chemicals & Reagents, Industrial Automation and much more.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="products"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              // exact={true}
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </motion.div>
  );
};

export default HeroSection;
