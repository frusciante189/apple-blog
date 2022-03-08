import FeaturedPost from "../components/FeaturedPost";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import {
  getFeaturedCategories,
  getFirst4HomePosts,
  getFirstFeaturedPost,
  getSecond4HomePosts,
  getSecondFeaturedPost,
} from "../library";

export default function Home({
  firstFeaturedPost,
  secondFeaturedPost,
  firstHomePosts,
  secondHomePosts,
  featuredCategories,
}) {
  return (
    <>
      <Navbar featuredCategories={featuredCategories} />
      <FeaturedPost post={firstFeaturedPost} />
      <Posts posts={firstHomePosts} />
      <FeaturedPost post={secondFeaturedPost} />
      <Posts posts={secondHomePosts} />
    </>
  );
}

export async function getStaticProps() {
  const firstFeaturedPost = (await getFirstFeaturedPost()) || [];
  const secondFeaturedPost = (await getSecondFeaturedPost()) || [];
  const firstHomePosts = (await getFirst4HomePosts()) || [];
  const secondHomePosts = (await getSecond4HomePosts()) || [];
  const featuredCategories = (await getFeaturedCategories()) || [];

  return {
    props: {
      firstFeaturedPost,
      secondFeaturedPost,
      firstHomePosts,
      secondHomePosts,
      featuredCategories,
    },
    revalidate: 30,
  };
}
