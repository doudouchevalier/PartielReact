import { Link } from "react-router-dom"
export default function Navbar(){
    return(
    <nav className="desktop-nav">
    <a href="/"><i className="fas fa-film">HOME</i></a>
    <ul>
      <li><a href="/data/type:movie">Films</a></li>
      <li><a href="/data/type:tv">Séries</a></li>
      <li><a href="/data/type:all">Populaires</a></li>
    </ul>
  </nav>
    )
}