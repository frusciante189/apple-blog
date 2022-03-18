import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPost = ({ post }) => {
  return (
    <section className="lg:py-16 sm:py-12 py-8">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:gap-x-12 lg:gap-x-4 gap-5 md:gap-y-10">
          <div className="md:col-span-7 text-primary dark:text-darkText md:order-1 order-2">
            <div>
              <p className="font-source text-sm font-medium">
                {moment(post.createdAt).format("DD MMM YYYY")}
              </p>
            </div>
            <div className="lg:mt-5 mt-10">
              <Link href={`/post/${post.slug}`}>
                <h1 className="lg:text-6xl lg:leading-tight sm:text-5xl text-4xl font-bold font-spartan md:text-left text-center cursor-pointer">
                  {post.title}
                </h1>
              </Link>
            </div>
            <div className="mt-4 md:max-w-xl">
              <p className="md:columns-2 text-sm font-medium font-spartan leading-loose md:text-left text-center">
                {post.excerpt}
              </p>
            </div>
            <div className="lg:mt-10 md:mt-8 mt-4">
              <Link href={`tag/${post.categories[0]?.slug}`}>
                <a className="text-sm font-source">
                  #{post.categories[0]?.title}
                </a>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative md:order-2 order-1">
            <div className="md:aspect-w-1 md:aspect-h-1 aspect-w-16 aspect-h-9 relative z-20">
              <Image
                src={post.featuredImage.url}
                layout="fill"
                objectFit="cover"
                alt={post.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
