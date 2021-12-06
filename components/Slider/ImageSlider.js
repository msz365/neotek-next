import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { SliderData } from "./Data";
import Image from "next/image";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 60px;
`;
const SliderWrapper = styled.div`
  width: 80%;
  padding: 20px;
  margin: 40px;
`;
const Heading = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    z-index: 2;
  }
`;
const SliderCard = styled.div`
  background: #fff;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 150px;
  width: 150px;
  max-width: 150px;
  z-index: 2;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    // transform: scale(1.02);
    z-index: 2;
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 90px;
  }
`;
const ClientImage = styled(Image)`
  object-fit: cover;
`;

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <SliderContainer>
        <Heading>Our Clients</Heading>
        <SliderWrapper>
          <Slider {...settings}>
            {SliderData.map((client) => (
              <SliderCard key={client.id}>
                <ClientImage
                  src={client.image}
                  alt="logo"
                  className="image"
                  height={120}
                  width={120}
                />
              </SliderCard>
            ))}
          </Slider>
        </SliderWrapper>
      </SliderContainer>
    );
  }
}
