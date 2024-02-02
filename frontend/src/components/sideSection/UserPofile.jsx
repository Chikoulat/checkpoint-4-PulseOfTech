import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function UserPofile() {
  const { auth } = useOutletContext();

  useEffect(() => {
    const getUser = async () => {
      try {
        if (auth && auth.user && auth.user.id) {
          await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/user/${auth.user.id}`
          );
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (auth && auth.user && auth.user.id) {
      getUser();
    }
  }, [auth]);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <img
        src={auth.user.profile_picture}
        alt={auth.user.username}
        className="w-32 h-32 rounded-full mx-auto"
      />

      <h1 className="text-center text-2xl font-semibold mt-3">
        {auth.user.username}{" "}
      </h1>
      <h2 className="text-center text-gray-600 mt-1"> {auth.user.email} </h2>
      <div className="flex justify-center mt-5">
        <div className="text-blue-500 hover:text-blue-700 mx-3">Twitter</div>
        <div href="/" className="text-blue-500 hover:text-blue-700 mx-3">
          LinkedIn
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore
          numquam veniam porro maxime sint voluptatibus distinctio, dicta iure
          vel nulla molestiae quae ex facilis error qui fuga dolorum quisquam!
        </p>
      </div>
    </div>
  );
}

export default UserPofile;
