import { NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo/logo.png";

function NavBar({ auth, setAuth }) {
  return (
    <header className="input inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-5 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <NavLink className="flex items-center" to="/">
              <img className="h-16 rounded-3xl" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className=" md:flex md:items-center md:justify-center md:gap-5">
            <NavLink
              to="/forum"
              className="inline-block rounded-lg px-2 py-1 text-2xl font-extrabold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              forum
            </NavLink>
          </div>

          {auth ? (
            <div className="flex items-center justify-end gap-3">
              <p> hello {auth.user.username}!</p>
              <NavLink
                className=" items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                to="/profil/mon-profil"
              >
                profil
              </NavLink>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/"
                onClick={() => setAuth("")}
              >
                Log out
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-end gap-3">
              <a
                className=" items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/inscription"
              >
                Sign up
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/connexion"
              >
                Login
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

NavBar.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
    }),
  }),
  setAuth: PropTypes.func,
};

NavBar.defaultProps = {
  auth: { user: { id: 0, username: "" } },
  setAuth: () => {},
};

export default NavBar;
