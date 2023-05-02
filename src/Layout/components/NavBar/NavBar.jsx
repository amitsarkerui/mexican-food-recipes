import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex gap-3 flex-col md:flex-row items-center justify-between">
        <Link to={"/"}>
          <h2 className="text-orange-500 text-3xl font-bold cursor-pointer">
            MEXI<span className="text-gray-800">YUM</span>
          </h2>
        </Link>
        <div>
          <ul className="flex flex-col gap-1 md:gap-6 md:flex-row font-medium text-lg text-gray-600">
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
        <div>
          <button className="btn bg-orange-500 border-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;