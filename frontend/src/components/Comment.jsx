import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function comment({ comments, setComments }) {
  const { id } = useParams();

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/comment/${id}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching forum data:", error);
      }
    };

    fetchComment();
  }, [id, comments]);
  if (!comments) {
    return <div>Loading...</div>;
  }

  return (
    comments &&
    comments.map((c) => (
      <div key={c.id}>
        <h4>{c.username}</h4>
        <p>{formatDateString(c.creation_date)}</p>
        <p>{c.content}</p>
      </div>
    ))
  );
}

export default comment;
