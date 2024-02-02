import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

function HomePage() {
  const articles = useLoaderData();
  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article) => (
        <div
          key={article.id}
          className="shadow transition hover:shadow-lg w-96 m-6"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-56 w-96 object-cover rounded-t-xl"
          />

          <div className="bg-slate-100 p-6 h-44 w-96 ">
            <p className="block text-xs text-gray-400">
              {" "}
              {formatDateString(article.publication_date)}{" "}
            </p>
            <NavLink to={`/article/${article.id}`}>
              <h3 className="mt-0.5 text-lg text-gray-900">{article.title}</h3>
            </NavLink>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
