import React from "react";
import styled from "styled-components";
import { BsCalendar2 } from "react-icons/bs";
import Image from "next/image";
import moment from "moment";

const CardContainer = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
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
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
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
  font-size: 1rem;
  color: #ffffff;
  padding: 0 5px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <BlogExcerpt key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </BlogExcerpt>
        );
      case "paragraph":
        return (
          <AuthorName key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </AuthorName>
        );
      case "heading-four":
        return (
          <h4 key={index} className="mb-4 font-semibold text-md">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

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
          <BlogTitle>{post.title}</BlogTitle>

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
          <BlogExcerpt>
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item)
              );
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </BlogExcerpt>
        </TextWrap>
      </CardWrapper>
    </CardContainer>
  );
};

export default PostDetail;
