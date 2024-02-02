import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLoaderData } from "react-router-dom";
import PostMessage from "../components/PostMessage";

function Forum() {
  const forum = useLoaderData();

  const [postMessage, setPostMessage] = useState([forum]);

  const formatDateString = (dateString) => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_BACKEND_URL}/forum/`);
      } catch (error) {
        console.error("Error fetching forum data:", error);
      }
    };

    fetchMessage();
  }, [postMessage]);

  return (
    <div className="flex flex-col items-center">
      {" "}
      {forum &&
        forum.map((f) => (
          <div className="rounded-xl border-2 border-gray-100 bg-white m-6 w-3/4">
            <div
              key={f.id}
              className="flex flex-row items-center gap-4 p-4 sm:p-6 lg:p-8"
            >
              <img
                alt={f.username}
                src={f.profile_picture}
                className="h-24 w-24 rounded-lg object-cover"
              />
              <div>
                <NavLink to={`/post-forum/${f.id}`}>
                  <h1 className="font-medium sm:text-lg"> {f.title} </h1>
                </NavLink>
                <h3>
                  {" "}
                  {f.username} - {formatDateString(f.creation_date)}{" "}
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">
                  {f.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      <PostMessage setPostMessage={setPostMessage} />
    </div>
  );
}

export default Forum;
