import { useEffect, useState } from "react";
import API from "../js/api.js";

export default function SeriesTV() {
  const apiMovie = new API();
  const [category, setCategory] = useState("top_rated"); // 🔥 Stocke la catégorie actuelle

  useEffect(() => {
    // Charge les séries TV en fonction de la catégorie sélectionnée
    const container = document.querySelector("#populaires");
    if (container) {
      container.innerHTML = ""; // 🔥 Efface l'ancien contenu avant d'ajouter le nouveau
      apiMovie.getDataByTvCategory(container, category);
    }
  }, [category]); // 🔥 useEffect s'exécute uniquement quand `category` change

  return (
    <div className="wrapper-pop">
      <div className="populaires-container container">
        <div className="title-filter saveMe" id="title-category">
          <h2>Séries TV</h2>

          <button
            className={category === "top_rated" ? "active" : ""}
            id="top_rated"
            onClick={() => setCategory("top_rated")} // ✅ Change la catégorie à "top_rated"
          >
            Mieux notées
          </button>

          <button
            className={category === "popular" ? "active" : ""}
            id="popular"
            onClick={() => setCategory("popular")} // ✅ Change la catégorie à "popular"
          >
            Populaires
          </button>
        </div>
        <div className="grid-tendances" id="populaires"></div>
      </div>
    </div>
  );
}
