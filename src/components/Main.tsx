import MovieList from "./MovieList";

import { movies } from "../lib/data";
import { useMovieStore } from "../store/movieStore";

export default function Main() {
  const customMovieList = useMovieStore((state) => state.customMovieList);
  const { filter } = useMovieStore((state) => state);

  if (filter === "") {
    return (
      <main className="mx-auto max-w-full flex-grow p-8 sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
        <div className="container mx-auto">
          <MovieList movies={movies} />
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-full flex-grow p-8 sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
      <div className="container mx-auto">
        <MovieList movies={customMovieList} />
      </div>
    </main>
  );
}
