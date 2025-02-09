import { useEffect } from 'react';
import API from '../js/api.js';
export default function SeriesTV(){
    const apiMovie = new API();
    useEffect(() => {
      // Appel initial pour récupérer les films tendances du jour
      apiMovie.getDataByTvCategory(document.querySelector("#populaires"), "top_rated");
    }, []);
  
    const handleClickPopular = () => {
        document.querySelector("#popular").addEventListener("click", (e) => {
        document.querySelector("#populaires").innerHTML = "";
        document.querySelectorAll("#title-category > button").forEach((button) => button.classList.remove("active"));
        e.target.classList.add("active");
        apiMovie.getDataByTvCategory(document.querySelector("#populaires"), "popular");
      });
    };
    const handleClickTopRated = () => {
      document.querySelector("#top_rated").addEventListener("click", (e) => {
      document.querySelector("#populaires").innerHTML = "";
      document.querySelectorAll("#title-category > button").forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
      apiMovie.getDataByTvCategory(document.querySelector("#populaires"), "top_rated");
    });
  };
    return(
        <div className="wrapper-pop">
        <div className="populaires-container container">
          <div className="title-filter saveMe" id="title-category">
            <h2>Séries TV</h2>
  
            <button className="active" id="top_rated" onClick={() => handleClickTopRated()}>Mieux notées</button>
            <button id="popular" onClick={() => handleClickPopular()}>Populaires</button>
          </div>
          <div className="grid-tendances" id="populaires"></div>
        </div>
      </div>
    )
}