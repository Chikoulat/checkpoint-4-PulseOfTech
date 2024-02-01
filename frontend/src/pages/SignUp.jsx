import axios from "axios";

import { useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const { setAuth } = useOutletContext();

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
        .then((res) => {
          setAuth(res.data);
          navigate("/connexion");
        });
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.res?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>{" "}
        <input
          type="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>{" "}
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />{" "}
        {password.length >= 8 ? "✅" : "❌"}
      </div>
      <div>
        <label htmlFor="confirm-password">confirm password</label>{" "}
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />{" "}
        {password === confirmPassword ? "✅" : "❌"}
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

export default Register;
