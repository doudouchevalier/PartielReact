import { useEffect, useState } from 'react';
import './App.css';
import { fetchMovies } from './api';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer';
import Tendances from './components/tendances';
import SeriesTV from './components/seriestv';
import SearchContainer from './components/searchcontainer';
import Movie from './components/movieDetails.jsx';
import MovieCard from './components/movieCard.jsx';
import { Link } from 'react-router-dom';
import API from './js/api.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes/root.jsx';


function App() {
  const [movies, setMovies] = useState([]);
  const api = new API();

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
      {/* <SearchContainer/>
      <Navbar/> */}
      <RouterProvider router={router}/>
      
        {movies.map((movie) => (
          <div key={movie.id}>
          <MovieCard
            title={movie.title}
            posterPath={movie.poster_path}
            overview={movie.overview}
          />
        </div>
        ))}
      </div>
  );
}

export default App