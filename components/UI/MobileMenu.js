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

const MobileMenu = () => {
  const { isOpen, setIsOpen, ref } = useProvider();

  return (
    <div
      ref={ref}
      className={`fixed top-0 right-0 sm:w-80 w-full h-full bg-white dark:bg-darkBg z-50 
  transition-all duration-500 ease-in-out transform font-mono
  ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
    >
      <div className="pt-10 pb-5 px-5 h-full flex flex-col">
        <div className="mt-3">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl text-center font-medium dark:text-darkTitle text-lightTitle">
            Fruschain
          </h1>
          <nav className="flex flex-col items-start mt-10">
            {/* {categories?.map((category, index) => {
              return (
                <Link
                  href={`${
                    (category.name === "Haberler" && "/posts") ||
                    (category.name === "Development" && "/development") ||
                    `/tags/${category.slug}`
                  }`}
                  key={index}
                >
                  <a className="navLink dark:text-darkText text-lightText">
                    {category.name}
                  </a>
                </Link>
              );
            })} */}
          </nav>
        </div>
        <div className="mt-auto">
          <div className="text-center">
            <DarkMode />
          </div>
          <div className="flex space-x-4 items-center justify-center dark:text-darkText text-lightText mt-3">
            <TwitterLogo size={24} />
            <InstagramLogo size={24} />
            <TelegramLogo size={24} />
            <FacebookLogo size={24} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 focus:outline-none">
        <button
          className="dark:text-darkTitle text-lightTitle p-3 hover:rotate-90 transition-all duration-300 transform ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
