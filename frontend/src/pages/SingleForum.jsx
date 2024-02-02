import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../components/Comment";
import WriteComment from "../components/WriteComment";

function SingleForum() {
  const { id } = useParams();
  const [forum, setForum] = useState(null);
  const [comments, setComments] = useState(null);

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
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
    <div className="px-4 py-4 mx-5 font-normal bg-gray-200 rounded-lg my-6">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={forum[0].profile_picture}
            alt={forum[0].username}
            className="h-24 w-24 rounded-lg object-cover"
          />
          <h1 className="mb-2 text-2xl font-semibold leading-snug">
            {forum[0].title}
          </h1>
        </div>
        <h3 className="mb-4">
          {forum[0].username} - {formatDateString(forum[0].creation_date)}
        </h3>
        <p className="text-gray-700">{forum[0].content}</p>
      </div>

      <div>
        <Comment comments={comments} setComments={setComments} />
      </div>
      <div>
        <WriteComment id={id} setComments={setComments} />
      </div>
    </div>
  );
}

export default SingleForum;
