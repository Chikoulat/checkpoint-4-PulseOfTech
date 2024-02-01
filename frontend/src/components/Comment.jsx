import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function comment() {
  const { id } = useParams();
  const [comments, setComments] = useState(null);

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
  }, [id]);
  if (!comments) {
    return <div>Loading...</div>;
  }

  return (
    comments && (
      <div>
        <h4>{comments[0].username}</h4>
        <p>{formatDateString(comments[0].creation_date)}</p>
        <p>{comments[0].content}</p>
      </div>
    )
  );
}

export default comment;
