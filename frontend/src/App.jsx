import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [auth, setAuth] = useState("");
  return (
    <div className="border-t-indigo-400">
      <NavBar auth={auth} />
      <Outlet context={{ auth, setAuth }} />
      <Footer />
    </div>
  );
}

export default App;
