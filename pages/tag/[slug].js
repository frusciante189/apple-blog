import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import {
  getCategories,
  getCategoryImages,
  getCategoryPosts,
  getFeaturedCategories,
} from "../../library";
import CategoryPost from "../../components/UI/CategoryPost";
import { motion } from "framer-motion";

const Tags = ({ categoryPosts, categoryInfo, featuredCategories }) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Navbar featuredCategories={featuredCategories} />
      <section className="lg:py-16 sm:py-12 py-8">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-[250px] h-[250px] relative rounded-full overflow-hidden mx-auto">
                <Image
                  src={categoryInfo.categoryImage.url}
                  layout="fill"
                  objectFit="cover"
                  alt={categoryInfo.title}
                />
              </div>
              <p className="font-spartan text-primary dark:text-darkText mt-10 text-center text-2xl font-medium">
                #{categoryInfo.title}
              </p>
            </motion.div>
            <div className="mt-10">
              {categoryPosts.map((post, index) => {
                return <CategoryPost post={post.node} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Tags;

export async function getStaticProps({ params }) {
  const categoryPosts = (await getCategoryPosts(params.slug)) || [];
  const categoryInfo = (await getCategoryImages(params.slug)) || [];
  const featuredCategories = (await getFeaturedCategories()) || [];

  return {
    props: {
      categoryPosts,
      categoryInfo,
      featuredCategories,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
