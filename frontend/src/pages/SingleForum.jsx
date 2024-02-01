import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../components/Comment";

function SingleForum() {
  const { id } = useParams();
  const [forum, setForum] = useState(null);

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchForum = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/forum/${id}`
        );
        setForum(response.data);
      } catch (error) {
        console.error("Error fetching forum data:", error);
      }
    };

    fetchForum();
  }, [id]);

  if (!forum) {
    return <div>Loading...</div>;
  }

  return (
    forum && (
      <>
        <div>
          <h1>{forum[0].title}</h1>
          <h3>{forum[0].username}</h3>
          <p>{formatDateString(forum[0].creation_date)}</p>
          <p>{forum[0].content}</p>
        </div>
        <div>
          <Comment />
        </div>
      </>
    )
  );
}

export default SingleForum;
