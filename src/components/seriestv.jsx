export default function SeriesTV(){
    return(
        <div className="wrapper-pop">
        <div className="populaires-container container">
          <div className="title-filter saveMe" id="title-category">
            <h2>Séries TV</h2>
  
            <button className="active" id="top_rated">Mieux notées</button>
            <button id="popular">Populaires</button>
          </div>
          <div className="grid-tendances" id="populaires"></div>
        </div>
      </div>
    )
}