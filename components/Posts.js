import React from "react";
import SinglePost from "./UI/SinglePost";

const Posts = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-8">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </div>
      </div>
    </section>
  );
};

export default Posts;