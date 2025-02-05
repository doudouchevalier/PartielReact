// MovieDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importer useParams pour récupérer l'ID du film depuis l'URL
import { fetchMovies } from "../api"; // Si tu as une fonction pour récupérer des films depuis ton API

export default function MovieDetails() {
  const { id } = useParams(); // Récupère l'ID du film dans l'URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charger les détails du film
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovies(`/movie/${id}`); // Appel à l'API avec l'ID du film
        if (data) {
          setMovie(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du film:", error);
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]); // Refaire l'appel chaque fois que l'ID change

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Film introuvable.</div>;
  }

  return (
    <div className="movie-details-container">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <p>{movie.overview}</p>
      <div>
        <h3>Genres:</h3>
        <ul>
          {movie.genres && movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Date de sortie:</h3>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <h3>Note:</h3>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
}
