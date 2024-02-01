import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

function HomePage() {
  const articles = useLoaderData();
  return articles.map((article) => (
    <div key={article.id}>
      <img src={article.image} alt={article.title} />
      <NavLink to={`/article/${article.id}`}>
        <h1>{article.title}</h1>
      </NavLink>
    </div>
  ));
}

export default HomePage;
