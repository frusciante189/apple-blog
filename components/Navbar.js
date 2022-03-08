import Link from "next/link";
import { List } from "phosphor-react";
import React from "react";
import { useProvider } from "../context/context";
import DarkMode from "./UI/DarkMode";
import MobileMenu from "./UI/MobileMenu";
import Overlay from "./UI/Overlay";
import Image from "next/image";

const Navbar = ({ featuredCategories }) => {
  const { isOpen, setIsOpen } = useProvider();
  return (
    <>
      <header className="py-4 sticky top-0 left-0 z-30 bg-neutral-50 dark:bg-darkBg transition-colors duration-300 ease-in-out text-transparent ">
        <div className="lg:px-8 sm:px-6 px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {/* <Link href="/">
                <a className="font-spartan text-3xl font-semibold text-primary dark:text-darkText">
                  Deriate
                </a>
              </Link> */}
              <Link href="/">
                <div className="w-[120px] h-[35px] relative">
                  <Image
                    src="https://media.graphcms.com/UzUpTbVUSyVZzLBCI7NW?_ga=2.225340762.1788949347.1646580573-1778747608.1642625803"
                    layout="fill"
                  />
                </div>
              </Link>
              <div className="md:flex hidden space-x-2">
                {featuredCategories.map((category, index) => {
                  return (
                    <Link href={`/tag/${category.slug}`} key={index}>
                      <a className="font-spartan text-sm font-medium text-primary dark:text-darkText">
                        {category.title}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="md:block hidden">
                <DarkMode />
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden block"
              >
                <List className="w-5 h-5 text-primary dark:text-darkText" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        featuredCategories={featuredCategories}
      />
      <Overlay isOpen={isOpen} />
    </>
  );
};

export default Navbar;
