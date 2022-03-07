import Link from "next/link";
import { List } from "phosphor-react";
import React from "react";
import { useProvider } from "../context/context";
import DarkMode from "./UI/DarkMode";
import MobileMenu from "./UI/MobileMenu";
import Overlay from "./UI/Overlay";

const Navbar = () => {
  const { isOpen, setIsOpen } = useProvider();
  return (
    <>
      <header className="py-4 sticky top-0 left-0 z-30 bg-neutral-50 dark:bg-darkBg transition-colors duration-300 ease-in-out text-transparent ">
        <div className="lg:px-8 sm:px-6 px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/">
                <a className="font-spartan text-3xl font-semibold text-primary dark:text-darkText">
                  Deriate
                </a>
              </Link>
              <div className="md:flex hidden space-x-2 font-spartan text-sm font-medium text-primary dark:text-darkText">
                <Link href="/">
                  <a>News</a>
                </Link>
                <Link href="/">
                  <a>Reviews</a>
                </Link>
                <Link href="/">
                  <a>Announcements</a>
                </Link>
                <Link href="/">
                  <a>iPhone</a>
                </Link>
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
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Overlay isOpen={isOpen} />
    </>
  );
};

export default Navbar;
