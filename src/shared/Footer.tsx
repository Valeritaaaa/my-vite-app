export function Footer() {
  return (
    <footer className="bg-white border-t mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        <h2 className="text-xl font-bold text-pink-600 mb-2">
          ✨ DisneyApp
        </h2>

        <p className="text-gray-500 text-sm">
          Discover magical stories and unforgettable adventures.
        </p>

        <div className="mt-4 text-gray-400 text-xs">
          © {new Date().getFullYear()} DisneyApp. Made with 💖 by Valeria.
        </div>

      </div>
    </footer>
  );
}
