import React from "react";
import { NavLink } from "react-router-dom";

function SideSection() {
  return (
    <ul>
      <li>
        <NavLink to="/profil/mon-profil"> Mon profil </NavLink>
      </li>
      <li>
        <NavLink to="/profil/mes-posts"> Mes posts </NavLink>
      </li>
      <li>
        <NavLink to="/profil/mes-commentaires"> Mes Commentaires </NavLink>
      </li>
      <li>
        <NavLink to="/profil/mes-articles"> Mes articles </NavLink>
      </li>
    </ul>
  );
}

export default SideSection;
