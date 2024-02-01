import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

function UserForum() {
  const { auth } = useOutletContext();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/forum/${auth.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (auth && auth.user.id) {
      getPost();
    }
  }, [auth]);

  return (
    <div>
      {post.length === 0 ? (
        <p>Loading...</p>
      ) : (
        post.map((p) => (
          <div key={p.id}>
            <h1>{p.title}</h1>
            <h3>{p.content}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default UserForum;
