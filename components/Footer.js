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
    <footer className="bg-neutral-50 dark:bg-darkBg lg:py-20 sm:py-16 py-12 font-mono border-t transition-all transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex space-x-4 items-center justify-center">
          <Link href="/">
            <a className="lg:text-4xl text-3xl font-medium dark:text-lightTitle text-darkTitle">
              Fruschain
            </a>
          </Link>
        </div>
        <nav className="flex sm:flex-row flex-col items-center justify-center lg:space-x-2 space-x-1 md:mt-10 mt-5">
          <Link href="/posts">
            <a className="text-lg">Haberler</a>
          </Link>
          <Link href="/tags/nft">
            <a className="text-lg">NFT</a>
          </Link>
          <Link href="/tags/kultur">
            <a className="text-lg">Kültür</a>
          </Link>
          <Link href="/tags/teknoloji">
            <a className="text-lg">Teknoloji</a>
          </Link>
          <Link href="/tags/metaverse">
            <a className="text-lg">Metaverse</a>
          </Link>
          <Link href="/tags/blockchain">
            <a className="text-lg">Blockchain</a>
          </Link>
          <Link href="/tags/defi">
            <a className="text-lg">DeFi</a>
          </Link>
          <Link href="/development">
            <a className="text-lg">Development</a>
          </Link>
        </nav>

        <div className="mt-10">
          <div className="flex space-x-4 items-center justify-center dark:text-lightText text-darkText">
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
