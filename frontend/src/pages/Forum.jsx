import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

function Forum() {
  const forum = useLoaderData();

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    forum &&
    forum.map((f) => (
      <div key={f.id}>
        <NavLink to={`/post-forum/${f.id}`}>
          <h1> {f.title} </h1>
        </NavLink>

        <h3> {f.username} </h3>
        <p>{formatDateString(f.creation_date)}</p>
      </div>
    ))
  );
}

export default Forum;
