import Link from "next/link";
import {
  TwitterLogo,
  InstagramLogo,
  TelegramLogo,
  FacebookLogo,
  Copyright,
} from "phosphor-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-darkBg lg:py-20 sm:py-16 py-12 font-spartan border-t transition-all transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex space-x-4 items-center justify-center">
          <Link href="/">
            <a className="font-spartan text-4xl font-semibold text-primary dark:text-darkText">
              Deriate
            </a>
          </Link>
        </div>
        <nav className="flex sm:flex-row flex-col items-center justify-center lg:space-x-2 space-x-1 md:mt-10 mt-5">
          <Link href="/posts">
            <a className="text-lg text-primary dark:text-darkText">Haberler</a>
          </Link>
        </nav>

        <div className="mt-10">
          <div className="flex space-x-4 items-center justify-center text-primary dark:text-darkText">
            <TwitterLogo size={24} />
            <InstagramLogo size={24} />
            <TelegramLogo size={24} />
            <FacebookLogo size={24} />
          </div>
        </div>
        <p className="mt-7 text-center dark:text-lightText text-darkText inline-flex items-center justify-center w-full">
          <Copyright className="mr-2" /> Copyright 2021, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
