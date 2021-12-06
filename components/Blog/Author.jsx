import React from "react";
import { BsCalendar2 } from "react-icons/bs";
import { ButtonR } from "../ButtonRElement";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const AuthorContainer = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding: 0;
  padding: 15px;
  margin: 20px;
  @media screen and (max-width: 480px) {
    padding: 5px;
    margin: 10px 5px;
  }
`;

const AuthorWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AuthorImage = styled(Image)``;

const AuthorExcerpt = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;
`;
const BlogInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 480px) {
    padding: 5px;
    margin: 10px 5px;
    flex-direction: column;
  }
`;

const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const AuthorName = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  padding: 0 5px;
`;

const Author = ({ author }) => {
  return (
    <AuthorContainer>
      <AuthorWrapper>
        <BlogInfo>
          <BlogAuthor>
            <AuthorImage
              src={author.photo.url}
              alt={author.name}
              width={50}
              height={50}
              objectFit="cover"
            />

            <AuthorName>{author.name}</AuthorName>
          </BlogAuthor>
          <AuthorExcerpt>{author.bio}</AuthorExcerpt>
        </BlogInfo>
      </AuthorWrapper>
    </AuthorContainer>
  );
};

export default Author;
