import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>home page</h1>
      <NavLink to="/profil/mon-profil"> profil</NavLink>
    </>
  );
}

export default HomePage;
