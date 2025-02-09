import API from "../js/api.js";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


export default function Focus(){
    const apiMovie = new API();
    let { id } = useParams();
      useEffect(() => {
        // Appel initial pour récupérer les films tendances du jour
        apiMovie.loadDataById(id, "movie");
      }, [id]);
    return (
        <>
        <h1>Focus - ID : {id} </h1>

        <nav className="desktop-nav">
        <a href="index.html"><i className="fas fa-film"></i></a>
        <ul>
          <li><a href="">Films</a></li>
          <li><a href="">Séries</a></li>
          <li><a href="">Populaires</a></li>
        </ul>
      </nav>
      <div className="focus-container">
</div>
    <footer>
      <p>Tous droits réservés</p>
    </footer>
      </>
    );
    
}