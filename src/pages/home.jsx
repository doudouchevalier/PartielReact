/* fichier 404.jsx */
import Navbar from "../components/navbar";
import SearchContainer from "../components/searchcontainer";
import Tendances from "../components/tendances";
import SeriesTV from "../components/seriestv";

export default function Home() {

  return (
    <>
    <Navbar/>
    <SearchContainer/>
    <Tendances/>
      <SeriesTV/>
    </>
  )
}