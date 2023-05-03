import React, { useContext, useState } from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { logIn, continueWithGoogle, continueWithGitHub } =
    useContext(AuthContextProvider);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        setError("");
        const loggedUser = result.user;
        e.target.reset();
        toast.success("Login successfully");
      })
      .catch((err) => setError(err.message));
  };
  const handleGoogle = () => {
    continueWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successfully");
      })
      .catch((err) => setError(err.message));
  };
  const handleGithub = () => {
    continueWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successfully (Github)");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="mt flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleLogin}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <span
                  href="#"
                  className="font-semibold text-orange-600 hover:text-orange-500"
                >
                  <Link to={"/forgetPassword"}>Forgot password?</Link>
                </span>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <p className="text-red-500 mt-4 font-medium">{error}</p>
          <p className="text-red-500"></p>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-sm mt-6">
          <span className="font-semibold">
            Have no account?
            <Link className="underline text-orange-500 ml-2" to={"/register"}>
              Create one
            </Link>
          </span>
        </div>
        <hr className="my-6" />
        <div>
          <button
            onClick={handleGoogle}
            className="flex items-center font-semibold btn btn-outline w-full"
          >
            <FaGooglePlusG className="text-xl mr-2" />
            <span>Continue with Google</span>
          </button>
          <button
            onClick={handleGithub}
            className="flex items-center font-semibold btn btn-outline mt-3 w-full"
          >
            <FaGithub className="text-xl mr-2" />
            <span>Continue with Github</span>
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
