import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  padding: 20px 0;
  width: 100%;
`;

const Content = styled.div`
  width: 70%;

  backdrop-filter: blur(10px);
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

function Container({ children }) {
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

export default Container;
