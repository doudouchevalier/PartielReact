import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchMovies } from './api'

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
      <h1 className="text-2xl font-bold text-center mb-4">🎬 Films Populaires</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
    </div>
  );
}
export default App
