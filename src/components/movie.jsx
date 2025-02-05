// src/components/Movie.jsx
export default function Movie({ title, posterPath, overview }) {
    return (
      <div className="movie border rounded-xl p-4 shadow-md bg-white">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-center mt-2 text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{overview.substring(0, 100)}...</p>
      </div>
    );
  }
  