import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function UserPofile() {
  const { auth } = useOutletContext();

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/${auth.user.id}`
        );
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (auth && auth.id) {
      getUser();
    }
  }, [auth]);

  return (
    <div>
      <div>
        <img src={auth.user.profile_picture} alt={auth.user.username} />
      </div>
      <div>
        <h1> {auth.user.username} </h1>
        <h2> {auth.user.email} </h2>
      </div>
    </div>
  );
}

export default UserPofile;
