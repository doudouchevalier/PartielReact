import { useEffect } from 'react';
import API from '../js/api.js';
export default function Tendances(){
  const apiMovie = new API();
  useEffect(() => {
    // Appel initial pour récupérer les films tendances du jour
    apiMovie.getDataByTrending(document.querySelector("#tendances"), "all", "day");
  }, []);

  const handleClickThisWeek = () => {
      document.querySelector("#week").addEventListener("click", (e) => {
      document.querySelector("#tendances").innerHTML = "";
      document.querySelectorAll("#title-tendances > button").forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
      apiMovie.getDataByTrending(document.querySelector("#tendances"), "all", "week");
    });
  };   
    const handleClickToday = () => {
      document.querySelector("#day").addEventListener("click", (e) => {
        document.querySelector("#tendances").innerHTML = "";
        document.querySelectorAll("#title-tendances > button").forEach((button) => button.classList.remove("active"));
        e.target.classList.add("active");
        apiMovie.getDataByTrending(document.querySelector("#tendances"), "all", "day");
      });
    }; 
    return(
        <div className="wrapper">
      <div className="tendances-container container">
        <div className="title-filter" id="title-tendances">
          <h2>Tendances</h2>
          <button className="active" id="day" onClick={() => handleClickToday()}>Aujourd'hui</button>
          <button id="week" onClick={() => handleClickThisWeek()}>Cette semaine</button>
        </div>
        <div className="grid-tendances" id="tendances"></div>
      </div>
    </div>
    )
}