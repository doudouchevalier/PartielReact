import { useEffect, useState } from "react";
import API from "../js/api.js";

export default function Tendances() {
  const apiMovie = new API();
  const [filter, setFilter] = useState("day"); // Stocke le filtre actuel

  useEffect(() => {
    // Charge les films en fonction du filtre actuel
    const container = document.querySelector("#tendances");
    if (container) {
      container.innerHTML = ""; // Efface l'ancien contenu
      apiMovie.getDataByTrending(container, "all", filter);
    }
  }, [filter]);
  return (
    <div className="wrapper">
      <div className="tendances-container container">
        <div className="title-filter" id="title-tendances">
          <h2>Tendances</h2>
          <button
            className={filter === "day" ? "active" : ""}
            id="day"
            onClick={() => setFilter("day")}
          >
            Aujourd'hui
          </button>
          <button
            className={filter === "week" ? "active" : ""}
            id="week"
            onClick={() => setFilter("week")}
          >
            Cette semaine
          </button>
        </div>
        <div className="grid-tendances" id="tendances"></div>
      </div>
    </div>
  );
}
