import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilartPosts } from "../../services";
import styled from "styled-components";
import Image from "next/image";

const WidgetContainer = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const Heading = styled.h3`
  margin-bottom: 24px;
  font-size: 1rem;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;
  border-bottom-width: 1px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const PostHeading = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0 !important;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const PostDate = styled.h5`
  font-size: 0.7rem;
  font-weight: 300;
  color: #ffffff;

  margin: 0 !important;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;
const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PostRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 10px;
`;
const PostImage = styled(Image)`
  object-size: cover;
  object-position: top center;
  border-radius: 50%;
`;
const PostParticulars = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: flex-start;
  flex-direction: column;
`;
const PostLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilartPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);
  return (
    <WidgetContainer>
      <Heading>{slug ? "Related Posts" : "Recent Posts "}</Heading>
      {relatedPosts.map((post) => (
        <PostsWrapper key={post.title}>
          <PostRow>
            <PostImage
              src={post.featuredImage.url}
              height={60}
              width={60}
              alt={post.title}
            />
            <PostParticulars>
              <PostDate>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </PostDate>
              <PostLink href={`/post/${post.slug}`}>
                <PostHeading>{post.title}</PostHeading>
              </PostLink>
            </PostParticulars>
          </PostRow>
        </PostsWrapper>
      ))}
    </WidgetContainer>
  );
};

export default PostWidget;
