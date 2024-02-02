import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function comment({ comments, setComments }) {
  const { id } = useParams();

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
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
    return <p>Aucun commentaire pour ce sujet</p>;
  }

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-lg font-bold mb-4"> Commentaires </h2>
      {comments &&
        comments.map((c) => (
          <div key={c.id} className="flex flex-col space-y-4">
            <div className="flex flex-col py-4">
              <img
                src={c.profile_picture}
                alt={c.username}
                className="h-24 w-24 rounded-lg object-cover"
              />
              <h4 className="text-lg font-bold">{c.username}</h4>
              <p className="text-gray-700 text-sm mb-2">
                {formatDateString(c.creation_date)}
              </p>
            </div>
            <p className="text-gray-700">{c.content}</p>
            <hr />{" "}
          </div>
        ))}{" "}
    </div>
  );
}

export default comment;
