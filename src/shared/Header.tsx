import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition"
        >
          ✨ DisneyApp
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-600 font-medium">
          <Link
            to="/"
            className="hover:text-pink-500 transition"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="hover:text-pink-500 transition"
          >
            Movies
          </Link>
        </nav>

      </div>
    </header>
  );
}
