import FeaturedPost from "../components/FeaturedPost";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import {
  getFeaturedCategories,
  getFirstFeaturedPost,
  getHomePosts,
} from "../library";

export default function Home({
  firstFeaturedPost,
  homePosts,
  featuredCategories,
}) {
  return (
    <>
      <Navbar featuredCategories={featuredCategories} />
      <FeaturedPost post={firstFeaturedPost} />
      <Posts posts={homePosts} />
    </>
  );
}

export async function getStaticProps() {
  const firstFeaturedPost = (await getFirstFeaturedPost()) || [];
  const homePosts = (await getHomePosts()) || [];
  const featuredCategories = (await getFeaturedCategories()) || [];

  return {
    props: {
      firstFeaturedPost,
      homePosts,
      featuredCategories,
    },
    revalidate: 30,
  };
}
