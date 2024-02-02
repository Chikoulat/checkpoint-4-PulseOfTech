import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

function WriteComment({ setComments, id }) {
  const { auth } = useOutletContext();
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comment`, {
        content: comment,
        userId: auth.user.id,
        postId: id,
      });

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/comment/${id}`
      );
      setComments(response.data);
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return auth ? (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl bg-white rounded-lg border p-2 mx-auto m-20"
    >
      <textarea
        className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment..."
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
      <p>Connectez-vous pour poster un commentaire</p>
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

WriteComment.propTypes = {
  setComments: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default WriteComment;
