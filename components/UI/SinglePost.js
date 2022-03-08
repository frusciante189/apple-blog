import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const SinglePost = ({ post }) => {
  return (
    <section className="xl:pl-6 xl:pr-3 sm:px-3 py-2.5 md:border-l border-dashed border-primary dark:border-darkText border-opacity-70">
      <div>
        <Link href={`/post/${post.slug}`}>
          <div className="aspect-w-16 aspect-h-9 relative md:hidden block cursor-pointer">
            <Image
              src={post.featuredImage.url}
              layout="fill"
              objectFit="cover"
              alt="title"
            />
          </div>
        </Link>
        <div className="grid grid-cols-12 lg:gap-6 gap-3 md:mt-0 mt-6">
          <div className="xl:col-span-9 md:col-span-8 col-span-12">
            <Link href={`/post/${post.slug}`}>
              <h2 className="text-primary dark:text-darkText lg:text-4xl text-3xl font-semibold font-spartan cursor-pointer">
                {post.title}
              </h2>
            </Link>
          </div>
          <div className="xl:col-span-3 md:col-span-4">
            <Link href={`/post/${post.slug}`}>
              <div className="lg:w-[125px] lg:h-[125px] md:w-[95px] md:h-[95px] w-[125px] h-[125px] relative md:block hidden cursor-pointer">
                <Image
                  src={post.featuredImage.url}
                  layout="fill"
                  objectFit="cover"
                  alt="title"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-source text-sm font-medium text-primary dark:text-darkText">
            {moment(post.createdAt).format("DD MMM YYYY")}
          </p>
        </div>
        <div className="mt-4">
          <Link href={`/post/${post.slug}`}>
            <p className="font-spartan text-primary dark:text-darkText cursor-pointer">
              {post.excerpt}
            </p>
          </Link>
        </div>
        <div className="md:mt-4 mt-2">
          <Link href={`/tag/${post.categories[0]?.slug}`}>
            <a className="text-sm font-source text-primary dark:text-darkText">
              #{post.categories[0]?.title}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
