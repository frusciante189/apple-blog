import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const AllPostSingle = ({ post }) => {
  return (
    <div>
      <div className="aspect-1 relative  mx-auto">
        <Image layout="fill" objectFit="cover" src={post.featuredImage.url} />
      </div>
      <div className="mt-1">
        <p className="font-source text-sm text-primary dark:text-darkText">
          {moment(post.createdAt).format("DD MMM YYYY")}
        </p>
      </div>
      <div className="mt-5 relative lineEffect after:bg-purple-500 pb-4">
        <Link href={`post/${post.slug}`}>
          <h1 className="text-center text-primary dark:text-darkText font-spartan cursor-pointer">
            {post.title}
          </h1>
        </Link>
      </div>
      <div className="mt-4">
        <Link href={`post/${post.slug}`}>
          <p className="text-primary text-center dark:text-darkText font-mulish text-sm cursor-pointer">
            {post.excerpt}
          </p>
        </Link>
      </div>
      <div className="flex space-x-4 mt-4">
        {post.categories.map((category, index) => {
          return (
            <Link href={`/tag/${category.slug}`}>
              <a
                className="text-xs font-spartan text-primary dark:text-darkText cursor-pointer"
                key={index}
              >
                #{category.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllPostSingle;
