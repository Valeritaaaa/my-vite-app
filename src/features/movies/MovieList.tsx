import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

export default function MovieList({ movies }: Props) {
  return (
    <div className="min-h-screen bg-pink-50 p-8">
      
      <h1 data-cy="movie-list-title" className="text-3xl font-bold text-center text-pink-700 mb-10">
        Disney Movies ✨
      </h1>


      {movies.length === 0 ? (
        <p className="text-center text-gray-500">
          No movies available
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      
    </div>
  );
}

