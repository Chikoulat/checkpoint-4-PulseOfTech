import axios from "axios";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username,
      email: emailRef.current.value,
      password,
    };

    try {
      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, data)
        .then(() => {
          navigate("/connexion");
        });
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.res?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div className="border-2 rounded-lg relative">
          <input
            placeholder="Nom d'utilisateur"
            className="input w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            type="username"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="border-2 rounded-lg relative">
          <input
            placeholder="Adresse mail"
            className="input w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            ref={emailRef}
            type="email"
            id="email"
          />
        </div>
        <div className="border-2 rounded-lg relative flex flex-row items-center">
          <input
            placeholder="Mot de passe"
            className="input w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />{" "}
          {password.length >= 8 ? "✅" : "❌"}
        </div>

        <div className="border-2 rounded-lg relative flex flex-row items-center">
          <input
            placeholder="Confirmer le mot de passe"
            className="input w-80 Toastify__toast-icon rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />{" "}
          {password === confirmPassword ? "✅" : "❌"}
        </div>

        <button
          type="submit"
          className="input w-36 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Inscription
        </button>
      </form>
    </div>
  );
}

export default Register;
