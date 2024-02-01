import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [auth, setAuth] = useState("");

  return (
    <>
      <NavBar auth={auth} />
      <Outlet context={{ auth, setAuth }} />
      <Footer />
    </>
  );
}

export default App;
