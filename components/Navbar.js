import Link from "next/link";
import { List } from "phosphor-react";
import React from "react";
import DarkMode from "./UI/DarkMode";

const Navbar = () => {
  return (
    <header className="py-4 sticky top-0 left-0 z-30 bg-neutral-50 dark:bg-darkBg transition-colors duration-300 ease-in-out">
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
            <div className="md:hidden block">
              <List className="w-5 h-5" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
