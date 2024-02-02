import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useOutletContext } from "react-router-dom";

function UserArticle() {
  const { auth } = useOutletContext();
  const [article, setArticle] = useState([]);
  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/article/${auth.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (auth && auth.user.id) {
      getArticle();
    }
  }, [auth]);

  return (
    <div className="flex flex-wrap justify-center">
      {article.length === 0 ? (
        <p>tu n'as aucun article</p>
      ) : (
        article.map((a) => (
          <div
            key={a.id}
            className="shadow transition hover:shadow-lg h-96 w-96 m-6"
          >
            <img
              src={a.image}
              alt={a.title}
              className="h-56 w-96 object-cover rounded-t-xl"
            />
            <div className="bg-slate-100 p-6 h-44 w-96 ">
              <p className="block text-xs text-gray-400">
                {formatDateString(a.publication_date)}
              </p>
              <NavLink to={`/article/${a.id}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">{a.title}</h3>
              </NavLink>{" "}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserArticle;
