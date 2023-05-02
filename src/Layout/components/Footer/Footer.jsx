import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-white rounded-lg shadow dark:bg-gray-900 m-4 mt-14">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to={"/"}>
            <h2 className="text-orange-500 text-3xl font-bold cursor-pointer">
              MEXI<span className="text-gray-800">YUM</span>
            </h2>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-6">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a className="hover:underline">MEXIYUM</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
