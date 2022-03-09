import React from "react";
import { getAllPosts, getFeaturedCategories } from "../library";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AllPostSingle from "../components/UI/AllPostSingle";

const posts = ({ featuredCategories, allPosts }) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Navbar featuredCategories={featuredCategories} />
      <section className="lg:py-16 sm:py-12 py-8">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <motion.div
            className="grid md:grid-cols-2 grid-cols-1 gap-24"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {allPosts.map((post, index) => {
              return <AllPostSingle post={post} key={index} />;
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default posts;

export async function getStaticProps() {
  const allPosts = (await getAllPosts()) || [];
  const featuredCategories = (await getFeaturedCategories()) || [];

  return {
    props: {
      allPosts,
      featuredCategories,
    },
    revalidate: 30,
  };
}
