import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Forum from "./pages/Forum";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import UserPofile from "./components/sideSection/UserPofile";
import UserForum from "./components/sideSection/UserForum";
import UserComment from "./components/sideSection/UserComment";
import UserArticle from "./components/sideSection/UserArticle";
import SingleForum from "./pages/SingleForum";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/article`),
      },

      {
        path: "/inscription",
        element: <SignUp />,
      },
      {
        path: "/connexion",
        element: <Login />,
      },
      {
        path: "/forum",
        element: <Forum />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/forum`),
      },
      {
        path: "/post-forum/:id",
        element: <SingleForum />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "/profil",
        element: <Profile />,
        children: [
          {
            path: "mon-profil",
            element: <UserPofile />,
          },
          {
            path: "mes-posts",
            element: <UserForum />,
          },
          {
            path: "mes-commentaires",
            element: <UserComment />,
          },
          {
            path: "mes-articles",
            element: <UserArticle />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
