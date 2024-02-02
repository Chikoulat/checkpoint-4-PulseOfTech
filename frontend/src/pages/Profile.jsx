import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import SideSection from "../components/sideSection/SideSection";

function Profile() {
  const { auth, setAuth } = useOutletContext();

  return (
    <div className="flex gap-5 my-8">
      <SideSection />
      <Outlet context={{ auth, setAuth }} />
    </div>
  );
}

export default Profile;
