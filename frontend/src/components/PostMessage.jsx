import axios from "axios";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

function PostMessage({ setPostMessage }) {
  const { auth } = useOutletContext();

  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/forum`,
        {
          title,
          content: message,
          userId: auth.user.id,
        }
      );
      setPostMessage(response.data);
      setTitle("");
      setMessage("");
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return auth ? (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl bg-white rounded-lg border p-2 mx-auto m-20"
    >
      <input
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        value={title}
        onChange={handleTitle}
        placeholder="Ecris le titre de ton message."
      />
      <textarea
        className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
        value={message}
        onChange={handleMessage}
        placeholder="Ecris ton message."
      />
      <button
        type="submit"
        className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
      >
        Poster
      </button>
    </form>
  ) : (
    <div className="m-12">
      <p>Connectez-vous pour poster un message</p>
      <a
        href="/connexion"
        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {" "}
        Connexion{" "}
      </a>
    </div>
  );
}

PostMessage.propTypes = {
  setPostMessage: PropTypes.func.isRequired,
};

export default PostMessage;
