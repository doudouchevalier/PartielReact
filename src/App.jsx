import { useEffect, useState } from 'react';
// import './App.css';
import { fetchMovies } from './api';
import './css/style.css'
import Navbar from './components/navbar.jsx';
import Footer from './components/footer';
import Tendances from './components/tendances';
import SeriesTV from './components/seriestv';
import SearchContainer from './components/searchcontainer';



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies('/movie/popular'); // Endpoint TMDb pour les films populaires
      if (data && data.results) {
        setMovies(data.results);
      }
    };

    loadMovies();
  }, []);

  return (    
    <div className="container mx-auto p-4">
      <SearchContainer/>
      <Navbar/>
      <Tendances/>
      <SeriesTV/>
        {movies.map((movie) => (
          <div key={movie.id} className="border rounded-xl p-2 shadow-md">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-md"
            />
            <h3 className="text-center mt-2 text-lg font-bold">{movie.title}</h3>
          </div>
        ))}
      </div>
  );
}
export default App
