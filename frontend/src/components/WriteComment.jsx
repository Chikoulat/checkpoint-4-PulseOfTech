import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";

function WriteComment({ setComments, id }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comment`, {
        content: comment,
        userId: 3,
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

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment..."
        rows="4"
        cols="50"
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

WriteComment.propTypes = {
  setComments: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default WriteComment;
