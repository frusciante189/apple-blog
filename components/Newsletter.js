import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="md:min-h-[600px] sm:h-[400px] h-[350px] md:py-4 py-12 flex items-center justify-start px-4 md:px-8 relative">
      <div className="bg-neutral-50 rounded-lg dark:bg-darkBg relative z-20 px-8 pb-10 pt-4 max-w-lg w-full ">
        <div>Join Newsletter</div>
        <div className="flex space-x-4 relative mt-4">
          <input
            type="text"
            placeholder="Your Email"
            className="border md:py-3 py-2 md:pl-3 pl-2 w-full bg-transparent peer placeholder-transparent focus:outline-none relative z-20 caret-darkText dark:caret-lightText"
          />
          <label
            htmlFor="email"
            className="absolute left-1 -top-2.5 text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary dark:peer-placeholder-shown:text-darkText 
                peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-primary dark:peer-focus:text-lightText peer-focus:text-sm peer-focus:bg-neutral-50 
                dark:peer-focus:bg-darkBg peer-focus:px-2 transition-all duration-200 ease-in-out font-spartan z-10 peer-focus:z-20"
          >
            Your Email
          </label>
          <button
            className="font-source font-bold text-sm dark:bg-neutral-200 dark:text-primary text-darkText bg-neutral-700 px-4 uppercase
              dark:hover:bg-slate-800 hover:bg-slate-200 transition-colors duration-200 transform ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        layout="fill"
        objectFit="cover"
        unoptimized
        className="absolute inset-0 z-10"
        alt="logo"
      />
    </div>
  );
};

export default Newsletter;
