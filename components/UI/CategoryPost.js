import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const CategoryPost = ({ post }) => {
  return (
    <section className="lg:py-12 sm:py-8 py-6">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <div className="lg:py-8 sm:py-6 py-4">
            <Link href={`/post/${post.slug}`}>
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold font-spartan text-center cursor-pointer text-primary dark:text-darkText">
                {post.title}
              </h1>
            </Link>
          </div>
          <div className="mt-2">
            <p className="font-source text-sm font-medium text-center text-primary dark:text-darkText">
              {moment(post.createdAt).format("DD MMM YYYY")}
            </p>
          </div>
          <div className="mt-8">
            <Link href={`/post/${post.slug}`}>
              <div className="aspect-w-16 aspect-h-9 relative cursor-pointer">
                <Image
                  src={post.featuredImage.url}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <p className="font-spartan text-primary dark:text-darkText text-center">
              {post.excerpt}
            </p>
          </div>
          <div className="text-center mt-4">
            <Link href={`/post/${post.slug}`}>
              <a className="mt-5 font-source text-primary dark:text-darkText font-medium lineEffect relative after:bg-purple-500">
                Devamını oku
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPost;
