import { useEffect, useState } from 'react';
import './App.css';
import { fetchMovies } from './api';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer';
import Tendances from './components/tendances';
import SeriesTV from './components/seriestv';
import SearchContainer from './components/searchcontainer';
import Movie from './components/movie.jsx';



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
          <Movie
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          overview={movie.overview}
        />
        ))}
      </div>
  );
}
export default App
