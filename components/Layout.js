import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Provider from "../context/context";

const Layout = ({ children }) => {
  return (
    <Provider>
      <div className="dark:bg-darkBg bg-neutral-50 antialiased transition-colors duration-300 ease-in-out">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
