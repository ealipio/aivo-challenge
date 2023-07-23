import { Movie as MovieType } from "../lib/types";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: MovieType[] }) {
  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center font-bold text-white">
        <h2 className="rounded-md bg-yellow-700 p-6 text-2xl tracking-tight">
          There are no movies to display, try refining the filter.
        </h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}
