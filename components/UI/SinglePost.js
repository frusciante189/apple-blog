import React from "react";
import Image from "next/image";

const SinglePost = () => {
  return (
    <section className="xl:pl-6 pl-3 py-2.5 md:border-l border-dashed border-primary dark:border-darkText border-opacity-70">
      <div>
        <div className="grid grid-cols-12 lg:gap-6 gap-3">
          <div className="col-span-9">
            <h2 className="text-primary dark:text-darkText lg:text-4xl text-3xl font-semibold">
              Everything has beauty, but not everyone sees it
            </h2>
          </div>
          <div className="col-span-3">
            <div className="lg:w-[125px] lg:h-[125px] md:w-[95px] md:h-[95px] w-[125px] h-[125px] relative">
              <Image
                src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-source text-sm font-medium text-primary dark:text-darkText">
            March 3, 2022
          </p>
        </div>
        <div className="mt-1">
          <p className="font-spartan text-primary dark:text-darkText">
            Utilitatis causa amicitia est quaesita. Quae quo sunt excelsiores,
            eo dant clariora indicia naturae. Sed haec quidem liberius ab eo
            dicuntur et...
          </p>
        </div>
        <div className="text-sm md:mt-4 mt-2 font-source text-primary dark:text-darkText">
          #story
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
