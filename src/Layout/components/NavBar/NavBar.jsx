import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";
import ActiveLink from "../../../ActiveLink/ActiveLink";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContextProvider);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User LoggedOutOut"))
      .catch((err) => console.log(err.message));
  };
  const renderUserImage = () => {
    return (
      <img
        id="user-name"
        className="w-12 h-12 rounded-full"
        src={user.photoURL}
        alt=""
        title={user.displayName}
      />
    );
  };
  return (
    <div className="container mx-auto my-6">
      <div className="flex gap-3 flex-col md:flex-row items-center justify-between">
        <Link to={"/"}>
          <h2 className="text-orange-500 text-3xl font-bold cursor-pointer">
            MEXI<span className="text-gray-800">YUM</span>
          </h2>
        </Link>
        <div>
          <ul className="flex flex-col items-center gap-1 md:gap-6 md:flex-row font-medium text-lg text-gray-600">
            <ActiveLink to={"/"} isActive={location.pathname === "/"}>
              Home
            </ActiveLink>
            <ActiveLink to={"/blog"} isActive={location.pathname === "/blog"}>
              Blog
            </ActiveLink>
            <ActiveLink to={"/login"} isActive={location.pathname === "/login"}>
              Login
            </ActiveLink>
            <ActiveLink
              to={"/register"}
              isActive={location.pathname === "/register"}
            >
              Register
            </ActiveLink>
          </ul>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-5">
              {renderUserImage()}
              <Link>
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline border-gray-700 text-gray-700"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <>
              <Link to={"/register"}>
                <button className="btn btn-outline mr-3 hover:bg-orange-500 hover:border-orange-500">
                  Register
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="btn bg-orange-500 border-none">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
