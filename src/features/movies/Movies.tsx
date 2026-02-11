import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { getMovies } from "../../services/movies.services";
import type { Movie } from "../../models/movie.model";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-pink-600 animate-pulse">
          Loading movies...
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        
        <Link
          to="/"
          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition mb-6"
        >
          ← Volver a Home
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-700">
            Películas
          </h1>
        </header>

        <MovieList movies={movies} />
        
      </div>
    </section>
  );
}
