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
        path: "/conexion",
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
