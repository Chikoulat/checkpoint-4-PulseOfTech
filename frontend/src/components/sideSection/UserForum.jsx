import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useOutletContext } from "react-router-dom";

function UserForum() {
  const { auth } = useOutletContext();
  const [post, setPost] = useState([]);
  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/forum/${auth.user.id}`
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
    <div className="flex flex-col items-center">
      {post.length === 0 ? (
        <p>Pas de Post </p>
      ) : (
        post.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border-2 border-gray-100 bg-white m-6 w-3/4"
          >
            <div>
              <NavLink to={`/post-forum/${p.id}`}>
                <h1 className="font-medium sm:text-lg"> {p.title} </h1>
              </NavLink>
              <h3> {formatDateString(p.creation_date)} </h3>

              <p className="line-clamp-2 text-sm text-gray-700">{p.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserForum;
