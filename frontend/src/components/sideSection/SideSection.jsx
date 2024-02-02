import React from "react";
import { NavLink } from "react-router-dom";

function SideSection() {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white px-4 py-6">
      <ul className="mt-6 space-y-1 flex flex-col gap-32">
        <li className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          <NavLink to="/profil/mon-profil"> Mon profil </NavLink>
        </li>
        <li className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          <NavLink to="/profil/mes-posts"> Mes posts </NavLink>
        </li>
        <li className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          <NavLink to="/profil/mes-commentaires"> Mes Commentaires </NavLink>
        </li>
        <li className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          <NavLink to="/profil/mes-articles"> Mes articles </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideSection;
