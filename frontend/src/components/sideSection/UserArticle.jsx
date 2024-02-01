import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

function UserArticle() {
  const { auth } = useOutletContext();
  const [article, setArticle] = useState([]);

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
    <div>
      {article.length === 0 ? (
        <p>Loading...</p>
      ) : (
        article.map((a) => (
          <div key={a.id}>
            <img src={a.image} alt={a.title} />
            <h3>{a.title}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default UserArticle;
