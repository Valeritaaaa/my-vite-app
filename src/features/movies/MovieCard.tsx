import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
    >
      <img
        src={
          movie.image
            ? movie.image
            : "https://via.placeholder.com/400x500?text=No+Image"
        }
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-pink-600 mb-2">
          {movie.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {movie.description}
        </p>
      </div>
    </Link>
  );
}

