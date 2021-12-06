import React from "react";
import { getPosts } from "../services";
import PostCard from "../components/Blog/PostCard";
import PostWidget from "../components/Blog/PostWidget";
import Categories from "../components/Blog/Categories";
import styled from "styled-components";

const BlogContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 30px 0;
  padding-top: 0px;

  @media screen and (max-width: 768px) {
  }
`;

const BlogWrapper = styled.div`
  display: grid;
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  //   grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: 2fr 1fr;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const BlogLeft = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
const BlogRight = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
const Sticky = styled.div`
  position: sticky;
  top: 6rem;
  align-self: start;
  margin-top: 20px;
`;
const BlogHeading = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

function Blog({ posts }) {
  return (
    <BlogContainer>
      <BlogHeading>Blog</BlogHeading>
      <BlogWrapper>
        <BlogLeft>
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </BlogLeft>
        <BlogRight>
          <Sticky>
            <PostWidget />
            <Categories />
          </Sticky>
        </BlogRight>
      </BlogWrapper>
    </BlogContainer>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
