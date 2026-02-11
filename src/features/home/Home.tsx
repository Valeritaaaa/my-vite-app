import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex items-center justify-center">
      
      <div className="text-center px-6 max-w-2xl">
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
          ✨ Welcome to DisneyApp
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Discover magical stories, unforgettable adventures, 
          and your favorite animated movies in one place.
        </p>

        <Link
          to="/movies"
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
        >
          Explore Movies 🎬
        </Link>

      </div>
      
    </div>
  );
}
