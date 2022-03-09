import Link from "next/link";
import {
  TwitterLogo,
  InstagramLogo,
  TelegramLogo,
  FacebookLogo,
  Copyright,
  X,
} from "phosphor-react";
import { useProvider } from "../../context/context";
import DarkMode from "./DarkMode";
import Image from "next/image";

const MobileMenu = ({ featuredCategories }) => {
  const { isOpen, setIsOpen, ref } = useProvider();

  return (
    <div
      ref={ref}
      className={`fixed top-0 right-0 sm:w-80 w-full h-full bg-neutral-50 dark:bg-darkBg z-50 
  transition-all duration-300 ease-in-out transform
  ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
    >
      <div className="pt-10 pb-5 px-5 h-full flex flex-col">
        <div className="mt-3">
          <Link href="/">
            <div className="w-[120px] h-[35px] relative cursor-pointer mx-auto">
              <Image
                src="https://media.graphcms.com/UzUpTbVUSyVZzLBCI7NW?_ga=2.225340762.1788949347.1646580573-1778747608.1642625803"
                layout="fill"
                alt="logo"
              />
            </div>
          </Link>
          <nav className="flex flex-col items-start mt-10 space-y-5">
            {featuredCategories?.map((category, index) => {
              return (
                <Link
                  href={`${
                    (category.title === "Haberler" && "/posts") ||
                    `/tag/${category.slug}`
                  }`}
                  key={index}
                >
                  <a className="dark:text-darkText text-primary font-spartan text-sm font-medium">
                    {category.title}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto">
          <div className="text-center">
            <DarkMode />
          </div>
          <div className="flex space-x-4 items-center justify-center dark:text-darkText text-lightText mt-3">
            <Link href="https://twitter.com/deriateblog" passHref>
              <TwitterLogo size={24} className="cursor-pointer" />
            </Link>
            {/* <InstagramLogo size={24} />
            <TelegramLogo size={24} />
            <FacebookLogo size={24} /> */}
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 focus:outline-none">
        <button
          className="dark:text-darkText text-primary p-3 hover:rotate-90 transition-all duration-300 transform ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
