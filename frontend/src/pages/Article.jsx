import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/article/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    article && (
      <div>
        <h1>{article[0].title}</h1>
        <img src={article[0].image} alt={article[0].title} />
        <p>{formatDateString(article[0].publication_date)}</p>
        <p>{article[0].content}</p>
        <p>{article[0].author}</p>
        <p>{article[0].source}</p>
      </div>
    )
  );
}

export default Article;
