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
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default function Home({
  firstFeaturedPost,
  secondFeaturedPost,
  firstHomePosts,
  secondHomePosts,
  featuredCategories,
}) {
  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div variants={fadeInUp}>
        <Navbar featuredCategories={featuredCategories} />
        <FeaturedPost post={firstFeaturedPost} />
        <Posts posts={firstHomePosts} />
      </motion.div>
      <FeaturedPost post={secondFeaturedPost} />
      <Posts posts={secondHomePosts} />
    </motion.div>
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
