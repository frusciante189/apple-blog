import React from "react";
import Footer from "./Footer";
import Provider from "../context/context";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const Layout = ({ children }) => {
  return (
    <Provider>
      <DefaultSeo {...SEO} />
      <main className="dark:bg-darkBg bg-neutral-50 antialiased transition-colors duration-300 ease-in-out selection:bg-purple-500">
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default Layout;
