import React from "react";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";
import PostCard from "../../components/Blog/PostCard";
import Categories from "../../components/Blog/Categories";
import styled from "styled-components";

const CategoryContainer = styled.div`
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

const CategoryWrapper = styled.div`
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

const CategoryLeft = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
const CategoryRight = styled.div`
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
const CategoryHeading = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div></div>;
  }

  return (
    <CategoryContainer>
      <CategoryWrapper>
        <CategoryLeft>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </CategoryLeft>
        <CategoryRight>
          <Sticky>
            <Categories />
          </Sticky>
        </CategoryRight>
      </CategoryWrapper>
    </CategoryContainer>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
