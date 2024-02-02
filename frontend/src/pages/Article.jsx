import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const formatDateString = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
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
    <section className="pb-40">
      <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold sm:text-4xl">{article[0].title}</h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              src={article[0].image}
              alt={article[0].title}
              className="absolute h-96 w-96 object-cover rounded-lg"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>{formatDateString(article[0].publication_date)}</p>
              <p>{article[0].content}</p>
              <p>{article[0].author}</p>
              <a href={article[0].source}> Source </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
