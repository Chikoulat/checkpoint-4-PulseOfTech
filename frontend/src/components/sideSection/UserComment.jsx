import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

function UserComment() {
  const { auth } = useOutletContext();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/${auth.user.id}`
        );
        setComment(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (auth && auth.user.id) {
      getComment();
    }
  }, [auth]);

  return (
    <div className="flex flex-col items-center">
      {comment.length === 0 ? (
        <p>Tu n'as pas encore de commentaires</p>
      ) : (
        comment.map((c) => (
          <>
            <div
              key={c.id}
              className="rounded-xl border-2 border-gray-100 bg-white m-6 w-3/4"
            >
              <h1 className="font-medium sm:text-lg">{c.postTitle}</h1>
              <h3 className="line-clamp-2 text-sm text-gray-700">
                {c.content}
              </h3>
            </div>
            <hr />
          </>
        ))
      )}{" "}
    </div>
  );
}

export default UserComment;
