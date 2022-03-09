import React from "react";
import { getAllPosts, getFeaturedCategories } from "../library";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AllPostSingle from "../components/UI/AllPostSingle";

const posts = ({ featuredCategories, allPosts }) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Navbar featuredCategories={featuredCategories} />
      <section className="lg:py-10 sm:py-8 py-6">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="">
              <p className="text-center mx-auto font-spartan text-lg dark:text-darkText text-primary lineEffect relative after:bg-purple-500 max-w-max">
                Apple Ekosistemi hakkında haberler, dedikodular, incelemeler
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-10">
              {allPosts.map((post, index) => {
                return <AllPostSingle post={post} key={index} />;
              })}
            </div>
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
