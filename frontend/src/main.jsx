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

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
      },
      {
        path: "/article",
        element: <Article />,
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
