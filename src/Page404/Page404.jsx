import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1683180420~exp=1683181020~hmac=33c9764d21913b16ca72d999e0247ab16cef728562731b12c314307fa92d2e11"
          alt=""
        />
        <p className="text-3xl">
          Looks like our services are currently offline
        </p>
        <Link className="btn" to={"/"}>
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Page404;
