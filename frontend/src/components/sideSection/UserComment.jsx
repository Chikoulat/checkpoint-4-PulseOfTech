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
          `${import.meta.env.VITE_BACKEND_URL}/comment/${auth.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
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
    <div>
      {comment.length === 0 ? (
        <p>Loading...</p>
      ) : (
        comment.map((c) => (
          <div key={c.id}>
            <h3>{c.content}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default UserComment;
