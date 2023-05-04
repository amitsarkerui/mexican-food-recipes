import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Layout/components/Home/Home.jsx";
import ChefDetails from "./Layout/components/ChefDetails/ChefDetails.jsx";
import Login from "./Layout/components/Login/Login.jsx";
import Register from "./Layout/components/Register/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Page404 from "./Page404/Page404.jsx";
import ForgetPassword from "./Layout/components/Login/ForgetPassword/ForgetPassword.jsx";
import Blog from "./Layout/components/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://mexican-food-server-amitsarkerui.vercel.app/chef"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mexican-food-server-amitsarkerui.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
