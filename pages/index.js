import FeaturedPost from "../components/FeaturedPost";
import Newsletter from "../components/Newsletter";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <>
      <FeaturedPost />
      <Posts />
      <Newsletter />
      <FeaturedPost />
      <Posts />
    </>
  );
}
