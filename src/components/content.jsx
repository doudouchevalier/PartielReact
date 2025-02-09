import { useEffect } from 'react';
import API from '../js/api.js';
export default function SeriesTV(){
    const api = new API();
    useEffect(() => {
      // Appel initial pour récupérer les films tendances du jour
      api.getDataByTrending("tendances", "movie");
    }, []);
  
    const handleClick = (filter) => {
      api.getDataByTrending("tendances", "movie", filter);
    };
    return(
      <>
      <div class="wrapper">
      <div class="tendances-container container">
        <div class="title-filter" id="title-tendances">
          <h2>Tendances</h2>
          <button class="active" id="day">Aujourd'hui</button>
          <button id="week">Cette semaine</button>
        </div>
        <div class="grid-tendances" id="tendances"></div>
      </div>
      </div>
      
      <div class="wrapper-pop">
      <div class="populaires-container container">
        <div class="title-filter saveMe" id="title-category">
          <h2>Séries TV</h2>
      
          <button class="active" id="top_rated">Mieux notées</button>
          <button id="popular">Populaires</button>
        </div>
        <div class="grid-tendances" id="populaires"></div>
      </div>
      </div>
      </>
    )
}