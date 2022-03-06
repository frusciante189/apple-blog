import Image from "next/image";
import React from "react";

const FeaturedPost = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-8">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:gap-x-12 lg:gap-x-4 gap-5 gap-y-10">
          <div className="md:col-span-8 text-primary dark:text-darkText md:order-1 order-2">
            <div>
              <p className="font-source text-sm font-medium">March 3, 2022</p>
            </div>
            <div className="mt-5">
              <h1 className="xl:text-7xl lg:text-6xl text-5xl font-bold font-spartan md:text-left text-center">
                Now we’re getting somewhere
              </h1>
            </div>
            <div className="mt-4 md:max-w-xl">
              <p className="md:columns-2 text-sm font-medium font-spartan leading-loose md:text-left text-center">
                Quae quo sunt excelsiores, eo dant clariora indicia naturae. Sed
                haec quidem liberius ab eo dicuntur et saepius. Et ille ridens
                video, inquit, quid agas tum ille timide vel potius verecunde.
              </p>
            </div>
            <div className="text-sm md:mt-10 mt-8 font-source">#story</div>
          </div>
          <div className="md:col-span-4 relative md:order-2 order-1">
            <div className="md:aspect-w-3 md:aspect-h-4 aspect-w-16 aspect-h-9 relative z-20">
              <Image
                src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
