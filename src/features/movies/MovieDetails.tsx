import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.services";


export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovies()
      .then((movies) => {
        const foundMovie = movies.find((m) => m.id === id);
        setMovie(foundMovie || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-pink-600 animate-pulse">
          Loading movie details...
        </p>
      </div>
    );
  }
  if (!movie) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Movie not found 
      </div>
    );
  }



  return (
    <div className="max-w-4xl mx-auto mt-12 px-6">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Imagen */}
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Información */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">
            {movie.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {movie.description}
          </p>

          <span className="text-sm text-gray-400">
            Release Year: {movie.year}
          </span>

          <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition">
            Watch Now 
          </button>
        </div>

      </div>
    </div>
  );
}
