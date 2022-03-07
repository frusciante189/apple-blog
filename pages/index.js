import FeaturedPost from "../components/FeaturedPost";
import Newsletter from "../components/Newsletter";
import Posts from "../components/Posts";
import { getFirstFeaturedPost } from "../library";

export default function Home({ firstFeaturedPost }) {
  return (
    <>
      <FeaturedPost post={firstFeaturedPost} />
      <Posts />
      <Newsletter />
      <Posts />
    </>
  );
}

export async function getStaticProps() {
  const firstFeaturedPost = (await getFirstFeaturedPost()) || [];

  return {
    props: {
      firstFeaturedPost,
    },
  };
}
