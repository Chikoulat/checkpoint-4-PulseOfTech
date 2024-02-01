import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import SideSection from "../components/sideSection/SideSection";

function Profile() {
  const auth = useOutletContext();
  return (
    <>
      <SideSection />
      <Outlet context={auth} />
    </>
  );
}

export default Profile;
