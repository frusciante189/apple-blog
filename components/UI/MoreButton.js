import React from "react";
import Link from "next/link";

const MoreButton = () => {
  return (
    <div className="py-10 text-center">
      <Link href="/posts">
        <button className="text-primary dark:text-darkText font-spartan text-sm font-bold relative lineEffect after:bg-purple-500">
          Daha Fazlası
        </button>
      </Link>
    </div>
  );
};

export default MoreButton;
