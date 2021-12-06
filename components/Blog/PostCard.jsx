import React from "react";
import moment from "moment";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { BsCalendar2 } from "react-icons/bs";
import { ButtonR } from "../ButtonRElement";

const CardContainer = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding: 0;
  padding: 15px;
  margin: 20px 20px;
  @media screen and (max-width: 480px) {
    padding: 5px;
    margin: 10px 5px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BlogImage = styled(Image)``;
const ImageWrap = styled.div`
  object-position: top;
  width: 100%;
  height: 20rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;
const BlogTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
const BlogExcerpt = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: #ffffff;
`;
const BlogInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AuthorName = styled.p`
  font-size: 12px;
  color: #ffffff;
  padding: 0 5px;
`;

const PostCard = ({ post }) => {
  console.log(post.featuredImage.url);
  return (
    <CardContainer>
      <CardWrapper>
        <ImageWrap>
          <BlogImage
            src={post.featuredImage.url}
            alt={post.title}
            width={790}
            height={320}
            objectFit="cover"
          />
        </ImageWrap>
        <TextWrap>
          <Link href={`/post/${post.slug}`} passHref>
            <BlogTitle>{post.title}</BlogTitle>
          </Link>
          <BlogInfo>
            <BlogAuthor>
              <BlogImage
                src={post.author.photo.url}
                alt={post.author.name}
                width={30}
                height={30}
              />
              <AuthorName>{post.author.name}</AuthorName>
            </BlogAuthor>
            <BlogAuthor>
              <div style={{ color: "#ffffff", fontSize: "20px" }}>
                <BsCalendar2 />
              </div>
              <AuthorName>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </AuthorName>
            </BlogAuthor>
          </BlogInfo>
          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
        </TextWrap>

        <ButtonR
          href={`/post/${post.slug}`}
          passHref
          smooth={true}
          duration={500}
          spy={true}
          // exact={true}
          offset={-80}
          primary={1}
          dark={1}
          dark2={1}
        >
          Read More
        </ButtonR>
      </CardWrapper>
    </CardContainer>
  );
};

export default PostCard;
