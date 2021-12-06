import React from "react";
import { getPosts, getPostDetails } from "../../services";
import PostDetail from "../../components/Blog/PostDetail";
import Author from "../../components/Blog/Author";
import Categories from "../../components/Blog/Categories";
import PostWidget from "../../components/Blog/PostWidget";
import Comments from "../../components/Blog/Comments";
import CommentsForm from "../../components/Blog/CommentsForm";
import styled from "styled-components";
import { useRouter } from "next/router";

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

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div></div>;
  }
  return (
    <BlogContainer>
      <BlogHeading>Blog</BlogHeading>
      <BlogWrapper>
        <BlogLeft>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </BlogLeft>
        <BlogRight>
          <Sticky>
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </Sticky>
        </BlogRight>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
