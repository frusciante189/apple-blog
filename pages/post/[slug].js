import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getFeaturedCategories, getPostDetails, getPosts } from "../../library";
import { NextSeo } from "next-seo";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const PostDetail = ({ postDetails, featuredCategories }) => {
  const SEO = {
    title: `Deriate | ${postDetails.title}`,
    description: postDetails.excerpt,

    openGraph: {
      title: `Deriate | ${postDetails.title}`,
      description: postDetails.excerpt,
      url: `https://www.deriate.com/post/${postDetails.slug}`,
      images: [
        {
          url: postDetails.featuredImage.url,
          alt: postDetails.title,
        },
      ],
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Navbar featuredCategories={featuredCategories} />
      <NextSeo {...SEO} />
      <article className="lg:py-20 sm:py-16 py-12">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <div>
            {/* header */}
            <motion.div
              className="border-b pb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center font-source text-sm">
                <Link href={`/tag/${postDetails.categories[0]?.slug}`}>
                  <a className="lineEffect relative text-center after:bg-purple-500 text-primary dark:text-darkText">
                    {postDetails.categories[0]?.title}
                  </a>
                </Link>
              </div>
              <div className="mt-10">
                <h1 className="font-spartan lg:text-6xl md:text-5xl text-4xl font-semibold text-primary dark:text-darkText text-center leading-normal">
                  {postDetails.title}
                </h1>
              </div>
              <div className="max-w-4xl mx-auto mt-10">
                <p className="font-mulish text-center text-xl text-primary dark:text-darkText">
                  {postDetails.postExcerpt}
                </p>
              </div>
            </motion.div>
            {/* content */}
            <div className="md:mt-10 mt-7">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative sm:aspect-w-16 sm:aspect-h-9 aspect-w-1 aspect-h-1">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={postDetails.featuredImage.url}
                    alt={postDetails.title}
                  />
                </div>
              </motion.div>
              <div className="md:mt-10 mt-5">
                <div
                  className="prose max-w-5xl mx-auto prose-neutral dark:prose-invert font-mulish prose-lg prose-img:mx-auto prose-a:decoration-purple-500 prose-a:decoration-2"
                  dangerouslySetInnerHTML={{ __html: postDetails.content.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default PostDetail;

export async function getStaticProps({ params }) {
  const postDetails = (await getPostDetails(params.slug)) || [];
  const featuredCategories = (await getFeaturedCategories()) || [];

  return {
    props: {
      postDetails,
      featuredCategories,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
